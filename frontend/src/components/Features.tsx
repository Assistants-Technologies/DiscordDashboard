'use client'

import { motion } from 'framer-motion'

const features = [
    {
        title: 'Secure Authentication',
        desc: 'OAuth2 login with Discord ensures only authorized users can access your dashboard.',
        gradient: 'from-red-500 to-orange-500',
        iconPath:
            'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    },
    {
        title: 'Stripe Connect Integration',
        desc: 'Built-in ready-to-play Stripe integration. All user data kept secure, payments go directly to you.',
        gradient: 'from-orange-500 to-purple-700',
        iconPath:
            'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
    },
    {
        title: 'Customizable UI',
        desc: 'Fully responsive design that works on all devices. Customize colors and layout to match your brand.',
        gradient: 'from-purple-700 to-red-500',
        iconPath:
            'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
    },
    {
        title: 'Lightning Fast',
        desc: 'Optimized for performance with minimal overhead. Your users will love the snappy interface.',
        gradient: 'from-red-500 to-orange-500',
        iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
    },
    {
        title: 'Mobile Friendly',
        desc: 'Fully responsive design that works perfectly on mobile devices and tablets.',
        gradient: 'from-orange-500 to-purple-700',
        iconPath:
            'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    },
    {
        title: 'Advanced Analytics',
        desc: 'Track user engagement, bot performance, and revenue metrics with detailed analytics.',
        gradient: 'from-purple-700 to-red-500',
        iconPath:
            'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    },
]

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
}

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
        },
    },
}

const hoverEffect = {
    scale: 1.03,
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
    transition: { duration: 0.3, ease: 'easeOut' },
}

export function Features() {
    return (
        <section className="bg-gray-50 py-16 md:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        Powerful Features
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                    >
                        Everything you need to manage your Discord bot with style
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            variants={item}
                            whileHover={hoverEffect}
                            className="relative bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div
                                className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d={feature.iconPath}
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-gray-600">{feature.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}