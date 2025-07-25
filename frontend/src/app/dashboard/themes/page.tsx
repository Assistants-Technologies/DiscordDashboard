import Header from "@/components/dashboard/Header"
import ThemeGrid from "@/components/dashboard/themes/ThemeGrid"

import DashboardPageShell from "@/components/dashboard/DashboardPageShell"

import {Suspense} from "react";
import Loading from "./loading";

export default function ThemesPage() {
    return (
        <DashboardPageShell activeItem="themes">
            <Header />
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
                <Suspense fallback={<p>Loading feed...</p>}>
                    <ThemeGrid />
                </Suspense>
            </div>
        </DashboardPageShell>
    )
}