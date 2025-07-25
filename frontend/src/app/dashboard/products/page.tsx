import Header from "@/components/dashboard/Header"
import Products from "@/components/dashboard/products/ProductsListSection"

import DashboardPageShell from "@/components/dashboard/DashboardPageShell"

export default function ProductsPage() {
    return (
        <DashboardPageShell  activeItem="products">
            <Header />
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
                <Products />
            </div>
        </DashboardPageShell>
    )
}