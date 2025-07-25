import Header from "@/components/dashboard/Header"
import PluginsDashboard from "@/components/dashboard/plugins/PluginsDashboard"

import DashboardPageShell from "@/components/dashboard/DashboardPageShell"

export default function PluginsPage() {
    return (
        <DashboardPageShell activeItem="plugins">
            <Header />
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
                <PluginsDashboard />
            </div>
        </DashboardPageShell>
    )
}