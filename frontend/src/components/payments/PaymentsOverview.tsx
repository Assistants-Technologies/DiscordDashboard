'use client'

import { motion } from 'framer-motion'

const colorVariants = {
    'purple-600': {
        bg: 'bg-purple-600/10',
        text: 'text-purple-600'
    },
    'orange-500': {
        bg: 'bg-orange-500/10',
        text: 'text-orange-500'
    },
    'red-500': {
        bg: 'bg-red-500/10',
        text: 'text-red-500'
    },
}

export function PaymentsOverview() {
    return (
        <main>
            <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="container mx-auto px-6 max-w-6xl">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Revolutionize Your Discord Bot Monetization
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discord-Dashboard provides beautiful, customizable admin panels that make managing your Dashboard instance effortless.
                            From payments to analytics, we've built everything you need to grow your bot business.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                title: 'Seamless Payments',
                                desc: 'Integrated Stripe Connect handles all transactions securely, with automatic payouts to your bank account.',
                                color: 'purple-600',
                                icon: (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                )
                            },
                            {
                                title: 'Premium Features',
                                desc: 'Offer tiered subscriptions with different feature sets to maximize your revenue potential.',
                                color: 'orange-500',
                                icon: (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                )
                            },
                            {
                                title: 'Advanced Analytics',
                                desc: 'Track user growth, revenue metrics, and feature usage with beautiful, actionable dashboards.',
                                color: 'red-500',
                                icon: (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                )
                            }
                        ].map(({ title, desc, color, icon }, i) => (
                            <div
                                key={i}
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className={`w-12 h-12 ${colorVariants[color].bg} rounded-lg flex items-center justify-center mb-4`}>
                                    <svg className={`w-6 h-6 ${colorVariants[color].text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        {icon}
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-3">{title}</h3>
                                <p className="text-gray-600">{desc}</p>
                            </div>
                        ))}
                    </div>

                    <motion.div
                        className="bg-white rounded-xl shadow-xl p-10 mb-16"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex flex-col md:flex-row gap-10">
                            <motion.div
                                className="md:w-1/2"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    hidden: {},
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.2
                                        }
                                    }
                                }}
                            >
                                <h2 className="text-3xl font-bold mb-6">How Payments Work</h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            title: 'Secure Transactions',
                                            desc: 'We use Stripe Connect to handle all payments with bank-grade security. Your users\' payment data never touches your servers - it\'s processed directly by Stripe\'s PCI-compliant infrastructure.',
                                            color: 'purple-600'
                                        },
                                        {
                                            title: 'Automatic Payouts',
                                            desc: 'Get paid automatically with daily, weekly, or monthly payouts to your bank account. We handle all the complex tax and compliance requirements so you don\'t have to.',
                                            color: 'orange-500'
                                        },
                                        {
                                            title: 'Fraud Protection',
                                            desc: 'Stripe\'s advanced machine learning models detect and prevent fraudulent transactions before they happen, reducing chargebacks and keeping your revenue safe.',
                                            color: 'red-500'
                                        }
                                    ].map(({ title, desc, color }, i) => (
                                        <motion.div
                                            key={i}
                                            variants={{
                                                hidden: { opacity: 0, y: 30 },
                                                visible: { opacity: 1, y: 0 }
                                            }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <h3 className={`text-xl font-semibold mb-2 text-${color}`}>{title}</h3>
                                            <p className="text-gray-600">{desc}</p>
                                        </motion.div>
                                    ))}
                                </div>
                                <motion.div
                                    className="mt-8"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.2 }}
                                >
                                    <div className="bg-purple-100 text-purple-600 p-4 rounded-lg">
                                        <p className="font-medium">Sandbox Mode</p>
                                        <p className="text-sm">Test payments with fake money before going live</p>
                                    </div>
                                </motion.div>
                            </motion.div>

                            <motion.div
                                className="md:w-1/2"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="browser-window bg-white h-full border rounded-xl overflow-hidden shadow-md">
                                    <div className="browser-header flex items-center gap-2 p-2">
                                        <div className="browser-dot bg-red-400 w-3 h-3 rounded-full"></div>
                                        <div className="browser-dot bg-yellow-400 w-3 h-3 rounded-full"></div>
                                        <div className="browser-dot bg-green-400 w-3 h-3 rounded-full"></div>
                                    </div>
                                    <div className="p-6">
                                        <img
                                            src="https://stripe.com/img/v3/home/social.png"
                                            alt="Stripe Connect"
                                            className="w-full rounded-lg shadow-md"
                                        />
                                        <div className="mt-6 space-y-4">
                                            {[
                                                { text: 'PCI DSS Level 1 Certified', color: 'purple-600' },
                                                { text: '99.99% Uptime Guarantee', color: 'orange-500' },
                                                { text: '256-bit Encryption', color: 'red-500' }
                                            ].map(({ text, color }, i) => (
                                                <div className="flex items-center" key={i}>
                                                    <div className={`w-8 h-8 bg-${color} rounded-full flex items-center justify-center mr-3`}>
                                                        <svg
                                                            className="w-4 h-4 text-white"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>
                                                    <p className="text-gray-700">{text}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold mb-6">Trusted by Thousands of Bot Developers</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                            Become part of a growing community of bot developers earning revenue through our platform.
                        </p>
                        <div className="flex flex-wrap justify-center gap-8">
                            {[
                                { label: 'Reduction in payment-related support tickets', value: '95%', color: 'purple-600' },
                                { label: 'Average revenue increase after implementation', value: '3.5x', color: 'orange-500' },
                                { label: 'API uptime last year', value: '99.9%', color: 'red-500' }
                            ].map(({ label, value, color }, i) => (
                                <div
                                    className="bg-white p-6 rounded-lg shadow-md flex items-center"
                                    key={i}
                                >
                                    <div className={`text-3xl font-bold text-${color} mr-4`}>{value}</div>
                                    <div className="text-gray-600">{label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}