'use client'

export default function PluginsDashboard() {
    return (
        <div className="px-4 py-6 sm:px-6 lg:px-8">
            {/* Filters */}
            <div className="mb-6 bg-white p-4 rounded-lg shadow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="w-full sm:w-auto">
                        <label htmlFor="search" className="sr-only">Search</label>
                        <div className="relative rounded-md shadow-sm">
                            <input
                                type="text"
                                name="search"
                                id="search"
                                className="block w-full rounded-md border-gray-300 pl-3 pr-10 py-2 focus:border-purple-600 focus:ring-purple-600 sm:text-sm"
                                placeholder="Search plugins..."
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-auto">
                        <label htmlFor="filter" className="sr-only">Filter</label>
                        <select
                            id="filter"
                            name="filter"
                            className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-purple-600 focus:ring-purple-600 sm:text-sm"
                        >
                            <option>All Plugins</option>
                            <option>Free Only</option>
                            <option>Paid Only</option>
                            <option>Most Popular</option>
                            <option>Recently Added</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Plugins Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                    {
                        iconColor: 'bg-purple-600',
                        title: 'Analytics Dashboard',
                        description: "Track your bot's usage statistics",
                        badge: 'FREE',
                        badgeColor: 'bg-green-100 text-green-800',
                    },
                    {
                        iconColor: 'bg-red-600',
                        title: 'Moderation Logs',
                        description: 'View and manage moderation actions',
                        badge: 'FREE',
                        badgeColor: 'bg-green-100 text-green-800',
                    },
                    {
                        iconColor: 'bg-orange-500',
                        title: 'Premium Features',
                        description: 'Monetize your bot with premium tiers',
                        badge: '$9.99/month',
                        badgeColor: 'bg-yellow-100 text-yellow-800',
                    }
                ].map((plugin, idx) => (
                    <div key={idx} className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <div className="flex items-center">
                                <div className={`flex-shrink-0 ${plugin.iconColor} rounded-md p-3`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={
                                            idx === 0 ? "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                                                : idx === 1 ? "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                                    : "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                        } />
                                    </svg>
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <h3 className="text-lg font-medium text-gray-900">{plugin.title}</h3>
                                    <p className="text-sm text-gray-500">{plugin.description}</p>
                                </div>
                            </div>
                            <div className="mt-4 flex justify-between items-center">
                                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${plugin.badgeColor}`}>
                                    {plugin.badge}
                                </span>
                                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600">
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}