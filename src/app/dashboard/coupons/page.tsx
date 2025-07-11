import Header from "@/components/dashboard/Header"
import Coupons from "@/components/dashboard/coupons/CouponsSection"

import DashboardPageShell from "@/components/dashboard/DashboardPageShell"

export default function StripeConnectPage() {
    return (
        <DashboardPageShell>
            <Header />
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
                <Coupons />
            </div>
        </DashboardPageShell>
    )
}