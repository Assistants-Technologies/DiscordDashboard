import Header from "@/components/dashboard/Header"
import StatsSection from "@/components/dashboard/StatsSection"
import StripeConnect from "@/components/dashboard/stripe-connect/StripeConnect"

import DashboardPageShell from "@/components/dashboard/DashboardPageShell"

import { Suspense } from "react"

import Loading from "./loading"

export default function StripeConnectPage() {
    return (
        <DashboardPageShell  activeItem="stripe-connect">
            <Header />
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
                <Suspense fallback={<Loading />}>
                    <StripeConnect />
                </Suspense>
            </div>
        </DashboardPageShell>
    )
}