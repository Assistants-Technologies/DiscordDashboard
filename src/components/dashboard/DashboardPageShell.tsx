'use client';

import { useSidebar } from "@/contexts/SidebarContext";

export default function DashboardPageShell({
                                               children,
                                           }: {
    children: React.ReactNode;
}) {
    const { sidebarOpen, setSidebarOpen } = useSidebar();

    return (
        <main onClick={() => sidebarOpen && setSidebarOpen(false)}>
            {children}
        </main>
    );
}