'use client'

import { useSession, signIn } from "next-auth/react"
import { useEffect } from 'react'

interface Props {
    provider: string
    callbackUrl: string
}

export default function AuthRedirect({ provider, callbackUrl }: Props) {
    useEffect(() => {
        signIn(provider, { callbackUrl })
    }, [])

    return (
        <div className="flex h-screen items-center justify-center">
            <p className="text-gray-600">Redirecting...</p>
        </div>
    )
}