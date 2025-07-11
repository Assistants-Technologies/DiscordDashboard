"use client";

import { SidebarProvider } from "../../contexts/SidebarContext";
import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardShell({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <div className="font-space bg-gray-50 text-gray-800 h-screen overflow-hidden flex">
                <Sidebar />
                <div className="flex-1 overflow-auto">
                    {children}
                </div>
            </div>
        </SidebarProvider>
    );
}