'use client'

import { motion } from 'framer-motion'

export function Marketplace() {
    // simple fade+slide variants
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    }

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                {/* header */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Extend with <span className="gradient-text">Marketplace</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Enhance your dashboard with themes and plugins from our marketplace
                    </p>
                </motion.div>

                {/* card */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    className="flex flex-col items-center"
                >
                    <motion.div
                        className="bg-gray-50 p-8 rounded-xl border border-gray-200 max-w-2xl w-full text-center mb-8 hover:border-purple-700 hover:shadow-md transition-all duration-300"
                        whileHover={{ scale: 1.02, zIndex: 1 }}
                    >
                        <div className="w-20 h-20 rounded-lg bg-gradient-to-r from-purple-700 to-red-500 flex items-center justify-center mb-6 mx-auto">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">One Marketplace for Everything</h3>
                        <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                            Browse our marketplace for premium themes and plugins. Download and install them directly into your discord-dashboard with just a few clicks.
                        </p>
                        <a
                            href="#"
                            className="px-8 py-3 bg-gradient-to-r from-purple-700 to-red-500 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 inline-block"
                        >
                            Open Marketplace in Dashboard
                        </a>
                    </motion.div>

                    <motion.p
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeUp}
                        className="text-gray-500 max-w-lg mx-auto text-center"
                    >
                        Marketplace access requires an active project.{' '}
                        <a href="#" className="text-purple-700 hover:underline">
                            Learn more
                        </a>{' '}
                        about managing extensions.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    )
}