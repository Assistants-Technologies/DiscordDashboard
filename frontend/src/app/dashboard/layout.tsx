import { Metadata } from "next"
import { Providers } from "@/components/Providers"
import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { headers as nextHeaders } from "next/headers"

import AuthRedirect from "@/components/AuthRedirect"

export const metadata: Metadata = {
    title: "Dashboard | discord-dashboard",
}

interface Props {
    children: React.ReactNode
}

export default async function DashboardLayout({ children }: Props) {
    const session = await auth()

    const hdrs = await nextHeaders()
    const callbackUrl = hdrs.get("x-callback-url") ?? "/dashboard"

    if (!session?.user) {
        return <AuthRedirect callbackUrl={callbackUrl} provider={'identityprovider'} />
    }

    return <Providers>{children}</Providers>
}