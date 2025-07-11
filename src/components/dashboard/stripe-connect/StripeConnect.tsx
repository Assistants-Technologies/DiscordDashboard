export default function StripeConnect() {
    return (
        <div className="px-4 py-8 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white shadow rounded-lg overflow-hidden">
                    <div className="px-6 py-5 border-b border-gray-200">
                        <h3 className="text-lg font-medium text-gray-900">Stripe Connect Accounts</h3>
                        <p className="mt-1 text-sm text-gray-500">
                            Connect multiple Stripe accounts (including sandbox) to manage payments.
                        </p>
                    </div>

                    <div className="px-6 py-5 space-y-8">
                        {/* Empty state */}
                        <div className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-300 text-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto h-12 w-12 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <h3 className="mt-2 text-sm font-medium text-gray-900">
                                No Stripe accounts connected
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                                Get started by connecting your first Stripe account.
                            </p>
                            <div className="mt-6 space-x-3">
                                <button className="px-4 py-2 bg-purple-600 text-white text-sm rounded-md shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600">
                                    Connect Live Account
                                </button>
                                <button className="px-4 py-2 bg-white text-sm rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600">
                                    Connect Sandbox Account
                                </button>
                            </div>
                        </div>

                        {/* Connected Accounts */}
                        <div>
                            <h4 className="text-md font-medium text-gray-900 mb-4">Connected Accounts</h4>
                            <div className="bg-white shadow overflow-hidden rounded-md">
                                <ul className="divide-y divide-gray-200">
                                    <li className="px-6 py-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                                                    <svg
                                                        className="h-6 w-6 text-green-600"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M5 13l4 4L19 7"
                                                        />
                                                    </svg>
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">
                                                        Live Account (acct_1...7890)
                                                    </div>
                                                    <div className="text-sm text-gray-500">Connected on Jan 15, 2023</div>
                                                </div>
                                            </div>
                                            <div className="flex space-x-4">
                                                <button className="text-sm font-medium text-purple-600 hover:text-purple-700">Manage</button>
                                                <button className="text-sm font-medium text-red-600 hover:text-red-500">Disconnect</button>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="px-6 py-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="h-10 w-10 bg-yellow-100 rounded-full flex items-center justify-center">
                                                    <svg
                                                        className="h-6 w-6 text-yellow-600"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                                        />
                                                    </svg>
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">
                                                        Sandbox Account (acct_1...1234)
                                                    </div>
                                                    <div className="text-sm text-gray-500">Connected on Feb 1, 2023</div>
                                                </div>
                                            </div>
                                            <div className="flex space-x-4">
                                                <button className="text-sm font-medium text-purple-600 hover:text-purple-700">Manage</button>
                                                <button className="text-sm font-medium text-red-600 hover:text-red-500">Disconnect</button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Payment Settings */}
                        <div>
                            <h4 className="text-md font-medium text-gray-900 mb-4">Payment Settings</h4>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="payouts"
                                            name="payouts"
                                            type="checkbox"
                                            className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-600"
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="payouts" className="font-medium text-gray-700">
                                            Enable automatic payouts
                                        </label>
                                        <p className="text-gray-500">
                                            Automatically transfer funds to your bank account weekly.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="invoices"
                                            name="invoices"
                                            type="checkbox"
                                            className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-600"
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="invoices" className="font-medium text-gray-700">
                                            Send email receipts
                                        </label>
                                        <p className="text-gray-500">
                                            Automatically send payment receipts to customers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}