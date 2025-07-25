import Header from "@/components/dashboard/Header";
import StatsSection from "@/components/dashboard/StatsSection";

import DashboardPageShell from "@/components/dashboard/DashboardPageShell";

export default function DashboardPage() {
    return (
        <DashboardPageShell activeItem="overview">
            <Header/>
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
                <StatsSection />
            </div>
        </DashboardPageShell>
    );
}