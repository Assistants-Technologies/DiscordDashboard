'use client';

import Sidebar from './Sidebar';

import { useSidebar } from "@/contexts/SidebarContext";

interface DashboardPageShellProps {
    activeItem: string;
    children: React.ReactNode;
}

export default function DashboardPageShell({
    children,
    activeItem
}: DashboardPageShellProps) {
    const { sidebarOpen, setSidebarOpen } = useSidebar();

    return (
        <main onClick={() => sidebarOpen && setSidebarOpen(false)}>
            <div className="font-space bg-gray-50 text-gray-800 h-screen overflow-hidden flex">
                <Sidebar activeItem={activeItem} />
                <div className="flex-1 overflow-auto">
                    {children}
                </div>
            </div>
        </main>
    );
}