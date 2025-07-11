'use client'

import { motion } from 'framer-motion'

export function StripeIntegration() {
    const points = [
        "Subscriptions or one-time payments - we've got you covered",
        'All user data is encrypted and kept secure',
        'Payments go directly to your Stripe account',
        'No middleman - you keep 100% of your revenue',
    ]
    const plans = [
        { name: 'Premium Subscription', price: '$9.99/month', colorFrom: 'bg-purple-700' },
        { name: 'One-Time Payment',      price: '$29.99 one time', colorFrom: 'bg-orange-500' },
    ]

    // Variants for staggered list items & cards
    const listContainer = {
        hidden: {},
        show: { transition: { staggerChildren: 0.1 } },
    }
    const listItem = {
        hidden: { opacity: 0, x: -20 },
        show:   { opacity: 1, x: 0, transition: { duration: 0.4 } },
    }
    const cardContainer = {
        hidden: { opacity: 0, x: 20 },
        show:   { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    }

    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center">
                    {/* LEFT SIDE */}
                    <motion.div
                        className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            show:   { opacity: 1, x:  0, transition: { duration: 0.6 } },
                        }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Seamless <span className="gradient-text">Stripe Integration</span>
                        </h2>
                        <p className="text-xl text-gray-600 mb-6">
                            Our built-in Stripe Connect integration means you can start accepting payments immediately,
                            with all funds going directly to your account.
                        </p>

                        <motion.ul
                            className="space-y-4 mb-8"
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={listContainer}
                        >
                            {points.map((txt, i) => (
                                <motion.li key={i} className="flex items-start" variants={listItem}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-purple-700 mr-2 mt-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-700">{txt}</span>
                                </motion.li>
                            ))}
                        </motion.ul>

                        <motion.a
                            href="#"
                            className="px-8 py-3 bg-gradient-to-r from-purple-700 to-red-500 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 inline-block"
                            whileHover={{ scale: 1.05 }}
                        >
                            Learn About Payments
                        </motion.a>
                    </motion.div>

                    {/* RIGHT SIDE */}
                    <motion.div
                        className="lg:w-1/2"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            show:   { opacity: 1, x:   0, transition: { duration: 0.6, delay: 0.2 } },
                        }}
                    >
                        <div className="bg-gradient-to-r from-purple-700 to-red-500 p-1 rounded-xl">
                            <div className="bg-white p-8 rounded-lg">
                                <motion.div
                                    className="flex items-center mb-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    <div className="w-12 h-8 bg-gray-100 rounded mr-4"></div>
                                    <h3 className="text-xl font-bold">Stripe Payment Integration</h3>
                                </motion.div>

                                <motion.div
                                    className="space-y-4"
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.3 }}
                                    variants={listContainer}
                                >
                                    {plans.map((plan, i) => (
                                        <motion.div
                                            key={i}
                                            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                                            variants={listItem}
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            <div className="flex items-center">
                                                <div
                                                    className={`${plan.colorFrom} w-8 h-8 rounded-full flex items-center justify-center text-white mr-3`}
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="font-medium">{plan.name}</p>
                                                    <p className="text-sm text-gray-500">{plan.price}</p>
                                                </div>
                                            </div>
                                            <button
                                                className={`px-4 py-2 ${plan.colorFrom} text-white text-sm font-medium rounded hover:bg-opacity-90 transition`}
                                            >
                                                Select
                                            </button>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                <motion.div
                                    className="mt-8 pt-6 border-t border-gray-200"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    <p className="text-sm text-gray-500 mb-4">
                                        Payments processed securely by Stripe
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <div className="flex space-x-2">
                                            <div className="w-10 h-6 bg-gray-200 rounded"></div>
                                            <div className="w-10 h-6 bg-gray-200 rounded"></div>
                                            <div className="w-10 h-6 bg-gray-200 rounded"></div>
                                        </div>
                                        <motion.button
                                            className="px-6 py-2 bg-gradient-to-r from-purple-700 to-red-500 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            Continue
                                        </motion.button>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}