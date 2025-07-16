"use client";
import { useSidebar } from "@/contexts/SidebarContext";
import Link from "next/link";

export default function Header() {
    const { setSidebarOpen } = useSidebar();

    return (
        <>
            {/* Mobile header */}
            <div className="md:hidden flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white">
                <div className="flex items-center">
                    <Link className="flex items-center ml-4" href="/">
                        <img
                            src="/dbd_logo.png"
                            alt="Dashboard Logo"
                            className="w-8 h-8 rounded-lg"
                        />
                        <span className="ml-1 text-lg font-bold gradient-text">ashboard</span>
                    </Link>
                </div>
                <div className="flex items-center">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="text-gray-500 hover:text-gray-600 focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Desktop page header */}
            {/*<div className="md:block bg-white shadow-sm">
                <div className="px-4 py-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold leading-tight text-gray-900">Dashboard Overview</h1>
                        <div className="flex space-x-3">
                            <button className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-700">
                                Refresh
                            </button>
                            <button className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-700 to-red-500 hover:from-purple-700 hover:to-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-700">
                                New Product
                            </button>
                        </div>
                    </div>
                </div>
            </div>*/}
        </>
    );
}