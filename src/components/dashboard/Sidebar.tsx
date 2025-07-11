"use client";

import { useState } from "react";

import Image from "next/image";
import clsx from "clsx";

import { useSidebar } from "@/contexts/SidebarContext";

const NAVIGATION = [
    {
        section: "Dashboard",
        items: [
            {
                label: "Overview",
                href: "#",
                icon: (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                ),
                active: true,
            },
            {
                label: "Statistics",
                href: "#",
                icon: (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                ),
            },
        ],
    },
    {
        section: "Monetization",
        items: [
            {
                label: "Stripe Connect",
                href: "#",
                icon: (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                ),
            },
            {
                label: "Products",
                href: "#",
                icon: (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                ),
            },
            {
                label: "Subscriptions",
                href: "#",
                icon: (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                ),
            },
            {
                label: "Coupons",
                href: "#",
                icon: (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                    />
                ),
            },
            {
                label: "Payments",
                href: "#",
                icon: (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                ),
            },
        ],
    },
    {
        section: "Marketplace",
        items: [
            {
                label: "Plugins",
                href: "#",
                icon: (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                ),
            },
            {
                label: "Themes",
                href: "#",
                icon: (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                ),
            },
        ],
    },
];

export default function Sidebar() {
    const { sidebarOpen, setSidebarOpen } = useSidebar();
    
    return (
        <>
            {/* Overlay dla mobilki */}
            <div
                className={clsx(
                    "fixed inset-0 z-40 bg-black bg-opacity-25 transition-opacity md:hidden",
                    sidebarOpen ? "block" : "hidden"
                )}
                onClick={() => setSidebarOpen(false)}
            />

            {/* Sidebar */}
            <div
                className={clsx(
                    "fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 overflow-y-auto transition-transform duration-300 md:static md:translate-x-0 md:flex md:flex-shrink-0",
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="h-screen md:h-auto flex flex-col">
                    {/* Logo */}
                    <div className="flex items-center h-16 px-4 border-b border-gray-200">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-red-500 via-orange-500 to-purple-700 flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-white"
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

                    {/* Project Selector */}
                    <div className="px-4 py-3 border-b border-gray-200">
                        <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                            Project
                        </label>
                        <div className="relative">
                            <select className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-purple-700 appearance-none">
                                <option>My Awesome Bot</option>
                                <option>Music Player</option>
                                <option>Moderation Tool</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <svg
                                    className="h-5 w-5 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex-1 overflow-y-auto">
                        <nav className="px-2 space-y-1 py-4">
                            {NAVIGATION.map((section) => (
                                <div key={section.section}>
                                    <div className="px-3 py-1 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        {section.section}
                                    </div>
                                    {section.items.map((item) => (
                                        <a
                                            href={item.href}
                                            key={item.label}
                                            className={clsx(
                                                "sidebar-item group flex items-center px-3 py-2 text-sm font-medium rounded-md",
                                                item.active && "active"
                                            )}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                {item.icon}
                                            </svg>
                                            <span className="ml-3">{item.label}</span>
                                        </a>
                                    ))}
                                </div>
                            ))}
                        </nav>
                    </div>

                    {/* User Profile */}
                    <div className="p-4 border-t border-gray-200">
                        <div className="flex items-center">
                            <Image
                                className="h-9 w-9 rounded-full"
                                width={36}
                                height={36}
                                alt="User avatar"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            />
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-700">John Developer</p>
                                <a
                                    href="#"
                                    className="text-xs font-medium text-gray-500 hover:text-gray-700 flex items-center"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 mr-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                        />
                                    </svg>
                                    Log out
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}