import Header from "@/components/dashboard/Header"
import CreateFirstProject from "@/components/dashboard/create-project/CreateFirstProject"

import DashboardPageShell from "@/components/dashboard/DashboardPageShell"

export default function CreateProjectPage() {
    return (
        <DashboardPageShell activeItem="create-project">
            <Header />
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
                <CreateFirstProject />
            </div>
        </DashboardPageShell>
    )
}