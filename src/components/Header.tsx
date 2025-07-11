'use client'

import { useState } from 'react'

export function Header() {
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <header className="bg-white">
            <div className="container mx-auto px-6 py-8">
                <nav className="flex items-center justify-between">
                    {/* Brand */}
                    <div className="flex items-center space-x-2">
                        {/* Logo */}
                        <div className="w-10 h-10 rounded-lg overflow-hidden">
                            <img
                                src="/dbd_logo.png"
                                alt="Discord Dashboard Logo"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Text name hidden on mobile */}
                        <span className="hidden md:inline text-2xl font-bold gradient-text">
              iscord-Dashboard
            </span>
                    </div>

                    {/* Desktop links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="font-medium hover:text-purple-700 transition">
                            Features
                        </a>
                        <a href="#" className="font-medium hover:text-purple-700 transition">
                            Documentation
                        </a>
                        <a href="#" className="font-medium hover:text-purple-700 transition">
                            Pricing
                        </a>
                        <a href="#" className="font-medium hover:text-purple-700 transition">
                            Support
                        </a>
                    </div>

                    {/* Mobile toggle + Dashboard button */}
                    <div className="flex items-center space-x-2">
                        {/* hamburger / close */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-800"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={
                                        mobileOpen
                                            ? 'M6 18L18 6M6 6l12 12' // X
                                            : 'M4 6h16M4 12h16M4 18h16' // ☰
                                    }
                                />
                            </svg>
                        </button>

                        {/* Dashboard always visible */}
                        <a
                            href="#"
                            className="px-6 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                        >
                            Dashboard
                        </a>
                    </div>
                </nav>

                {/* Mobile dropdown */}
                {mobileOpen && (
                    <div className="md:hidden mt-4 space-y-2">
                        <a
                            href="#"
                            className="block px-4 py-2 font-medium rounded-lg hover:bg-gray-100 transition"
                        >
                            Features
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 font-medium rounded-lg hover:bg-gray-100 transition"
                        >
                            Documentation
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 font-medium rounded-lg hover:bg-gray-100 transition"
                        >
                            Pricing
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 font-medium rounded-lg hover:bg-gray-100 transition"
                        >
                            Support
                        </a>
                    </div>
                )}
            </div>
        </header>
    )
}