import { Metadata } from "next";
import DashboardShell from "@/components/dashboard/DashboardShell";

export const metadata: Metadata = {
    title: "Dashboard | discord-dashboard",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return <DashboardShell>{children}</DashboardShell>;
}