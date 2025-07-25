import Header from "@/components/dashboard/Header"
import Subscriptions from "@/components/dashboard/subscriptions/SubscriptionsSection"

import DashboardPageShell from "@/components/dashboard/DashboardPageShell"

export default async function SubscriptionsPage() {
    return (
        <DashboardPageShell activeItem="subscriptions">
            <Header />
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
                <Subscriptions />
            </div>
        </DashboardPageShell>
    )
}