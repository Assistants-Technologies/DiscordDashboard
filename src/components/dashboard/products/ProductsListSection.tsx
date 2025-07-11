export default function ProductsListSection() {
    return (
        <div className="px-4 py-6 sm:px-6 lg:px-8">
            <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="px-4 py-5 sm:px-6 border-b border-gray-200 flex justify-between items-center">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Your Products</h3>
                    <button className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-rose-500 hover:from-purple-700 hover:to-rose-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600">
                        + New Product
                    </button>
                </div>

                <div className="divide-y divide-gray-200">
                    {/* Product Item */}
                    <div className="px-4 py-4 sm:px-6 hover:bg-gray-50 transition duration-150 ease-in-out">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-rose-500 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium text-gray-900">Discord Coins</h4>
                                    <p className="text-sm text-gray-500">100 coins for server perks</p>
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600">
                                    Edit
                                </button>
                                <button className="px-3 py-1 border border-transparent rounded-md text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600">
                                    Remove
                                </button>
                            </div>
                        </div>

                        <div className="mt-4 grid grid-cols-3 gap-4">
                            <div>
                                <p className="text-sm text-gray-500">Price</p>
                                <p className="text-sm font-medium text-gray-900">$4.99</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Currency</p>
                                <p className="text-sm font-medium text-gray-900">USD</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Status</p>
                                <p className="text-sm font-medium text-green-600">Active</p>
                            </div>
                        </div>
                    </div>

                    {/* Another Product Item */}
                    <div className="px-4 py-4 sm:px-6 hover:bg-gray-50 transition duration-150 ease-in-out">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10 rounded-md bg-gradient-to-r from-orange-400 to-rose-500 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium text-gray-900">Premium Role</h4>
                                    <p className="text-sm text-gray-500">Exclusive server role</p>
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600">
                                    Edit
                                </button>
                                <button className="px-3 py-1 border border-transparent rounded-md text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600">
                                    Remove
                                </button>
                            </div>
                        </div>

                        <div className="mt-4 grid grid-cols-3 gap-4">
                            <div>
                                <p className="text-sm text-gray-500">Price</p>
                                <p className="text-sm font-medium text-gray-900">$9.99</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Currency</p>
                                <p className="text-sm font-medium text-gray-900">USD</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Status</p>
                                <p className="text-sm font-medium text-green-600">Active</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}