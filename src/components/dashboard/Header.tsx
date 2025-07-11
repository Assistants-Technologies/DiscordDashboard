"use client";
import { useSidebar } from "@/contexts/SidebarContext";

export default function Header() {
    const { setSidebarOpen } = useSidebar();

    return (
        <>
            {/* Mobile header */}
            <div className="md:hidden flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white">
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
                    <div className="flex items-center ml-4">
                        <div className="w-6 h-6 rounded-lg bg-gradient-to-r from-red-500 via-orange-500 to-purple-700 flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                />
                            </svg>
                        </div>
                        <span className="ml-2 text-lg font-bold gradient-text">d-dash</span>
                    </div>
                </div>
                <div className="flex items-center">
                    <button className="p-1 text-gray-400 hover:text-gray-500 focus:outline-none">
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
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Desktop page header */}
            <div className="md:block bg-white shadow-sm">
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
            </div>
        </>
    );
}