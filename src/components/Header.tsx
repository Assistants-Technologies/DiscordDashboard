"use client"
import { useState, useEffect } from "react"
import { useSession, signIn } from "next-auth/react"
import Link from "next/link"
import clsx from "clsx"

export function Header() {
    const [menuOpen,  setMenuOpen]  = useState(false)
    const [scrolled,  setScrolled]  = useState(false)
    const { data: session }        = useSession()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const glass = scrolled || menuOpen

    return (
        <header
            className={clsx(
                "fixed inset-x-0 top-0 z-50 overflow-hidden transition-shadow duration-300",
                glass ? "shadow-md" : "shadow-none"
            )}
        >
            <div
                className={clsx(
                    "w-full transition-[padding] duration-300",
                    // glass background whenever scrolled or menu open
                    glass ? "bg-white/30 backdrop-blur-lg" : "bg-white/0",
                    scrolled ? "py-4" : "py-8"
                )}
            >
                {/* Nav row */}
                <div className="container mx-auto px-6 flex items-center justify-between" style={{ maxWidth: "1280px" }}>
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-10 h-10 rounded-lg overflow-hidden">
                            <img src="/dbd_logo.png" alt="Logo" className="w-full h-full object-cover" />
                        </div>
                        <span className="hidden md:inline text-2xl font-bold gradient-text">
              iscord-Dashboard
            </span>
                    </Link>
                    <nav className="hidden md:flex items-center space-x-8">
                        {["Features", "Documentation", "Pricing", "Support"].map((l) => (
                            <Link key={l} href="#" className="font-medium hover:text-purple-700 transition">
                                {l}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={() => setMenuOpen((o) => !o)}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                        <Link
                            href={session?.user ? "/dashboard" : "#"}
                            onClick={() =>
                                !session?.user &&
                                signIn("identityprovider", { callbackUrl: "/dashboard" })
                            }
                            className="px-6 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                        >
                            Dashboard
                        </Link>
                    </div>
                </div>

                {menuOpen && (
                    <div className="md:hidden container mx-auto px-6 pt-4 pb-2 space-y-2" style={{ maxWidth: "1280px" }}>
                        {["Features", "Documentation", "Pricing", "Support"].map((l) => (
                            <Link
                                key={l}
                                href="#"
                                className="block px-4 py-2 font-medium rounded-lg hover:bg-gray-100 transition"
                            >
                                {l}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </header>
    )
}