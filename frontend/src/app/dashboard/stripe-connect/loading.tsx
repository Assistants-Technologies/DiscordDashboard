'use client';

export default function StripeConnectLoading() {
    return (
        <div className="px-4 py-8 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white shadow rounded-lg overflow-hidden">
                    {/* Header skeleton */}
                    <div className="px-6 py-5 border-b border-gray-200">
                        <div className="h-6 bg-gray-200 rounded w-1/3 animate-pulse" />
                        <div className="mt-2 h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
                    </div>

                    {/* Empty-state skeleton */}
                    <div className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-300 text-center animate-pulse">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mx-auto h-12 w-12 text-gray-200"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                        </svg>
                        <div className="mt-2 h-4 bg-gray-200 rounded w-1/3 mx-auto animate-pulse" />
                        <div className="mt-1 h-3 bg-gray-200 rounded w-1/2 mx-auto animate-pulse" />
                        <div className="mt-6 space-x-3">
                            <div className="inline-block w-24 h-8 bg-gray-200 rounded-md animate-pulse" />
                            <div className="inline-block w-24 h-8 bg-gray-200 rounded-md animate-pulse" />
                        </div>
                    </div>

                    {/* Test & Live account skeletons */}
                    <div className="px-6 py-5 space-y-8">
                        {['Test', 'Live'].map(label => (
                            <div key={label}>
                                <h4 className="h-5 bg-gray-200 rounded w-1/4 mb-4 animate-pulse" />

                                <div className="bg-white shadow overflow-hidden rounded-md">
                                    <ul className="divide-y divide-gray-200">
                                        <li className="px-6 py-4 flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <div className="h-10 w-10 bg-gray-200 rounded-full animate-pulse" />
                                                <div className="space-y-2">
                                                    <div className="h-4 bg-gray-200 rounded w-20 animate-pulse" />
                                                    <div className="h-3 bg-gray-200 rounded w-24 animate-pulse" />
                                                </div>
                                            </div>
                                            <div className="h-6 w-20 bg-gray-200 rounded animate-pulse" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}