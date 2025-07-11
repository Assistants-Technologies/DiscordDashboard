'use client'

export default function ThemeGrid() {
    return (
        <div className="px-4 py-6 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                    {
                        name: 'Dark Elegance',
                        gradient: 'from-purple-500 to-pink-500',
                        iconColor: 'bg-purple-600',
                        by: 'ThemeCraft',
                        price: '$9.99',
                        version: '2.1.0',
                        downloads: '4.2k',
                        desc: 'Premium dark theme with elegant accents',
                    },
                    {
                        name: 'Ocean Breeze',
                        gradient: 'from-blue-400 to-blue-600',
                        iconColor: 'bg-blue-500',
                        by: 'AquaDesigns',
                        price: '$7.99',
                        version: '1.5.2',
                        downloads: '3.7k',
                        desc: 'Light blue theme with refreshing colors',
                    },
                    {
                        name: 'Forest Retreat',
                        gradient: 'from-green-400 to-green-600',
                        iconColor: 'bg-green-500',
                        by: 'NatureUI',
                        price: '$6.99',
                        version: '1.2.3',
                        downloads: '2.8k',
                        desc: 'Nature-inspired theme with earthy tones',
                    },
                ].map((theme, idx) => (
                    <div
                        key={idx}
                        className="bg-white overflow-hidden shadow rounded-lg transition duration-150 ease-in-out transform hover:-translate-y-1"
                    >
                        <div
                            className={`h-48 bg-gradient-to-r ${theme.gradient} flex items-center justify-center`}
                        >
                            <span className="text-white text-xl font-bold">{theme.name}</span>
                        </div>
                        <div className="px-4 py-5 sm:p-6">
                            <div className="flex items-center">
                                <div className={`${theme.iconColor} rounded-md p-2 flex-shrink-0`}>
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
                                            d={
                                                idx === 0
                                                    ? 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                                                    : idx === 1
                                                        ? 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
                                                        : 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                                            }
                                        />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">{theme.name}</h3>
                                    <p className="mt-1 text-sm text-gray-500">{theme.desc}</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="flex justify-between text-sm text-gray-500">
                                    <span>Version: {theme.version}</span>
                                    <span>Downloads: {theme.downloads}</span>
                                </div>
                                <div className="mt-2 flex justify-between text-sm">
                                    <span className="text-gray-500">By: {theme.by}</span>
                                    <span className="text-purple-600 font-medium">{theme.price}</span>
                                </div>
                            </div>
                            <div className="mt-5">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600"
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}