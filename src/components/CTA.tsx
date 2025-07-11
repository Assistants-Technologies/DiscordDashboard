'use client'

export function CTA() {
    return (
        <section className="bg-gradient-to-r from-purple-700 to-red-500 py-16 md:py-24">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Ready to build your perfect Discord dashboard?
                </h2>
                <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
                    Join hundreds of developers who trust discord-dashboard for their bot administration needs.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <a href="#"
                       className="px-8 py-3 bg-white text-purple-700 font-medium rounded-lg hover:bg-opacity-90 transition-all duration-300">
                        Get Started for Free
                    </a>
                    <a href="#"
                       className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                        Contact Sales
                    </a>
                </div>
            </div>
        </section>
    )
}