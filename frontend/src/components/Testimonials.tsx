'use client'

import { motion } from 'framer-motion'

interface Testimonial {
    id: string
    initials: string
    name: string
    role: string
    gradient: string
    quote: string
}

const testimonials: Testimonial[] = [
    {
        id: '1',
        initials: 'dk',
        name: 'duckodas',
        role: 'Bot Developer',
        gradient: 'from-purple-700 to-red-500',
        quote:
            '“The team helped me with some issues regarding using it with typescript and they did fix it, didn’t really take a long time and was worth doing the team is kind, the dashboard is hot asf everything is just goood🔥”',
    },
    {
        id: '2',
        initials: 'kb',
        name: 'kobeeeef',
        role: 'Bot Developer',
        gradient: 'from-orange-500 to-red-500',
        quote:
            '“The new update is really pog. The suggestions get added insanely quick and also insanely improved, as of today - there has been so many new insane updates and some that we never thought we needed.”',
    },
    {
        id: '3',
        initials: 'mx',
        name: 'maxencexz',
        role: 'Bot Developer',
        gradient: 'from-red-500 to-purple-700',
        quote:
            "“This is one of the best free packages I've ever used since I started coding. It makes it super easy to make your discord dashboard - it also saves a lot of your time.”",
    },
]

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export function Testimonials() {
    return (
        <section className="bg-gray-100 py-16 md:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Trusted by <span className="gradient-text">Thousands</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        See what our users say about discord-dashboard
                    </p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {testimonials.map((t) => (
                        <motion.div
                            key={t.id}
                            className="bg-white p-8 rounded-xl shadow-sm"
                            variants={itemVariants}
                            whileHover={{ scale: 1.03, zIndex: 1 }}
                        >
                            <div className="flex items-center mb-4">
                                <div
                                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${t.gradient} flex items-center justify-center text-white font-bold mr-4`}
                                >
                                    {t.initials}
                                </div>
                                <div>
                                    <h4 className="font-bold">{t.name}</h4>
                                    <p className="text-gray-500 text-sm">{t.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-700">{t.quote}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}