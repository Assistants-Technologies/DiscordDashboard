'use client'

export default function CreateFirstProject() {
    return (
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Header */}
            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Welcome to Discord-Dashboard
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    A <span className="font-medium">Project</span> is an isolated instance that powers your Discord
                    Dashboard, complete with built-in Stripe Connect integration, analytics, and monetization features.
                </p>
            </div>

            {/* Create Project Form */}
            <div className="bg-white rounded-xl shadow-sm p-6 max-w-md mx-auto">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Create Your First Project
                </h2>
                <form>
                    <div className="mb-4">
                        <label
                            htmlFor="project-name"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Project Name
                        </label>
                        <input
                            type="text"
                            id="project-name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-700 focus:border-purple-700"
                            placeholder="My Awesome Bot"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-700 to-indigo-600 text-white py-3 px-4 rounded-lg hover:opacity-90 transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:scale-[1.02]"
                    >
            <span className="flex items-center justify-center">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Create Project
            </span>
                    </button>
                </form>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="text-purple-700 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <h3 className="font-medium text-lg mb-2">Lightning Fast</h3>
                    <p className="text-gray-600">
                        Projects run on our high-performance infrastructure with minimal latency.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="text-orange-500 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>
                    <h3 className="font-medium text-lg mb-2">Secure by Design</h3>
                    <p className="text-gray-600">
                        Each project is fully isolated with enterprise-grade security measures.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="text-red-500 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>
                    <h3 className="font-medium text-lg mb-2">Monetization Ready</h3>
                    <p className="text-gray-600">
                        Built-in Stripe Connect integration makes premium features easy.
                    </p>
                </div>
            </div>
        </div>
    )
}