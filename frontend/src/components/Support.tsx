'use client'

export function Support() {
    return (
        <section className="bg-gray-100 py-16 md:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Need <span className="gradient-text">Help?</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Our support team is here to assist you with any questions
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Discord Support */}
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-purple-700 hover:shadow-md transition-all duration-300">
                        <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-700 to-red-500 flex items-center justify-center mb-6 mx-auto">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-center">Discord Support</h3>
                        <p className="text-gray-600 text-center">
                            Join our Discord server for real-time assistance from our team and community
                        </p>
                        <div className="mt-6 text-center">
                            <a
                                href="https://discord.gg/AssistantsTechnologies"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 bg-purple-700 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 inline-block"
                            >
                                Join Discord
                            </a>
                        </div>
                    </div>

                    {/* Email Support */}
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-orange-500 hover:shadow-md transition-all duration-300">
                        <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mb-6 mx-auto">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-center">Email Support</h3>
                        <p className="text-gray-600 text-center">
                            Contact our support team directly for personalized assistance
                        </p>
                        <div className="mt-6 text-center">
                            <a
                                href="mailto:support@assts.tech"
                                className="px-6 py-2 bg-orange-500 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 inline-block"
                            >
                                Email Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}