export default function SubscriptionsSection() {
    return (
        <div className="px-4 py-6 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-12">

                {/* Subscription Tiers */}
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-medium text-gray-900">Subscription Tiers</h2>
                        <button className="px-4 py-2 rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-rose-500 hover:from-purple-700 hover:to-rose-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600">
                            Create New Tier
                        </button>
                    </div>

                    <div className="bg-white shadow overflow-hidden sm:rounded-md">
                        <ul className="divide-y divide-gray-200">
                            {/* Premium Tier */}
                            <li className="px-4 py-4 sm:px-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="flex items-center">
                                            <p className="text-lg font-medium text-purple-700">Premium</p>
                                            <span className="ml-2 px-2 inline-flex text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                                        </div>
                                        <div className="mt-2 sm:flex sm:justify-between text-sm text-gray-500">
                                            <p className="flex items-center">
                                                <ClockIcon />
                                                $9.99/month
                                            </p>
                                            <p className="flex items-center mt-2 sm:mt-0">
                                                <CalendarIcon />
                                                Created on <time dateTime="2020-01-07">January 7, 2020</time>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="ml-4 flex space-x-2">
                                        <button className="px-3 py-1 rounded-md text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:ring-purple-600">
                                            Edit
                                        </button>
                                        <button className="px-3 py-1 rounded-md text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-red-600">
                                            Stop
                                        </button>
                                    </div>
                                </div>
                            </li>

                            {/* Basic Tier */}
                            <li className="px-4 py-4 sm:px-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="flex items-center">
                                            <p className="text-lg font-medium text-gray-500">Basic</p>
                                            <span className="ml-2 px-2 inline-flex text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                        Inactive
                      </span>
                                        </div>
                                        <div className="mt-2 sm:flex sm:justify-between text-sm text-gray-500">
                                            <p className="flex items-center">
                                                <ClockIcon />
                                                $4.99/month
                                            </p>
                                            <p className="flex items-center mt-2 sm:mt-0">
                                                <CalendarIcon />
                                                Created on <time dateTime="2020-01-07">January 7, 2020</time>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="ml-4 flex space-x-2">
                                        <button className="px-3 py-1 rounded-md text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:ring-purple-600">
                                            Edit
                                        </button>
                                        <button className="px-3 py-1 rounded-md text-sm font-medium text-white bg-gray-500 hover:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                            Reactivate
                                        </button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Active Subscriptions */}
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-medium text-gray-900">Active Subscriptions</h2>
                        <select className="block pl-3 pr-10 py-2 border-gray-300 bg-white rounded-md shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600">
                            <option>All Tiers</option>
                            <option>Premium</option>
                            <option>Basic</option>
                        </select>
                    </div>

                    <div className="bg-white shadow overflow-hidden sm:rounded-md">
                        <ul className="divide-y divide-gray-200">
                            <li className="px-4 py-4 sm:px-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <img
                                            className="h-10 w-10 rounded-full"
                                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                                            alt="Jane Cooper"
                                        />
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">Jane Cooper</div>
                                            <div className="text-sm text-gray-500">Premium Tier</div>
                                        </div>
                                    </div>
                                    <div className="ml-4 flex space-x-2">
                                        <button className="px-3 py-1 rounded-md text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:ring-purple-600">
                                            View
                                        </button>
                                        <button className="px-3 py-1 rounded-md text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-red-600">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-2 sm:flex sm:justify-between text-sm text-gray-500">
                                    <p className="flex items-center">
                                        <CalendarIcon />
                                        Next payment: <time dateTime="2023-01-07">January 7, 2023</time>
                                    </p>
                                    <p className="flex items-center mt-2 sm:mt-0">
                                        <CalendarIcon />
                                        Started on <time dateTime="2022-01-07">January 7, 2022</time>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ClockIcon() {
    return (
        <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
    );
}

function CalendarIcon() {
    return (
        <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
    );
}