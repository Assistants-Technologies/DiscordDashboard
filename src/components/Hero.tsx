'use client'

import { motion } from 'framer-motion'

export function Hero() {
    return (
        <section className="container mx-auto px-6 py-16 md:py-24">
            <div className="flex flex-col md:flex-row items-center">
                {/* Text side */}
                <motion.div
                    className="md:w-1/2 mb-12 md:mb-0"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                        Build beautiful <span className="gradient-text">admin panels</span> for your Discord bots
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Plug-and-play solution that lets you focus on your bot&apos;s functionality while we handle the dashboard magic.
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <motion.a
                            href="#"
                            className="px-8 py-3 bg-gradient-to-r from-purple-700 to-red-500 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 text-center"
                            whileHover={{ scale: 1.05 }}
                        >
                            Get Started
                        </motion.a>
                        <motion.a
                            href="#"
                            className="px-8 py-3 border-2 border-gray-200 font-medium rounded-lg hover:border-purple-700 hover:text-purple-700 transition-all duration-300 text-center"
                            whileHover={{ scale: 1.05 }}
                        >
                            View Demo
                        </motion.a>
                    </div>
                </motion.div>

                {/* Preview side */}
                <motion.div
                    className="md:w-1/2 md:pl-12"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div
                        className="browser-window rounded-lg overflow-hidden shadow-lg"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="flex items-center h-8 px-3 bg-gray-100">
                            <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                            <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
                            <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                        </div>

                        <div className="mx-4 my-3 px-4 h-10 bg-white border border-gray-200 rounded-lg flex items-center space-x-2">
                            <div className="bg-gray-100 p-1 rounded">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4 text-gray-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                    />
                                </svg>
                            </div>
                            <span className="text-gray-700 font-medium text-sm truncate">
                https://your-dashboard.com/commands
              </span>
                        </div>

                        <div className="bg-white p-1 rounded-b-lg">
                            <img
                                src="/screenshot.png"
                                alt="Dashboard Preview"
                                className="w-full h-auto rounded-b-lg"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}