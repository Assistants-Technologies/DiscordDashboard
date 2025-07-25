'use client';

import useSWR from 'swr';
import Link from "next/link";

type AccountInfo = {
    stripeAccountId: string;
    createdAt: string;
    isReady: boolean;
    blocked: boolean;
    blockReasons: string[];
    onboardUrl: string;
    loginUrl: string | null;
};

type ConnectResponse = {
    test: AccountInfo;
    live: AccountInfo;
};

const fetcher = (url: string) =>
    fetch(url).then(res => {
        if (!res.ok) throw new Error('Fetch failed');
        return res.json() as Promise<ConnectResponse>;
    });

export default function StripeConnect() {
    const { data, error } = useSWR<ConnectResponse>('/api/stripe-connect', fetcher, { suspense: true });

    if (!data && !error) return <div className="p-6 text-center">Loading…</div>;
    if (error) return <div className="p-6 text-red-600">Error: {error.message}</div>;

    const { test, live } = data!;
    const bothReady = test.isReady && !test.blocked && live.isReady && !live.blocked;
    const anyNotReady = !bothReady;

    return (
        <div className="px-4 py-8 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white shadow rounded-lg overflow-hidden">
                    {/* Header */}
                    <div className="px-6 py-5 border-b border-gray-200">
                        <h3 className="text-lg font-medium text-gray-900">Stripe Connect Accounts</h3>
                        <p className="mt-1 text-sm text-gray-500">
                            Set up multiple Stripe accounts (TEST & LIVE) to manage payments.
                        </p>
                    </div>

                    {/* Empty-state block if any env not ready */}
                    {anyNotReady && (
                        <div className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-300 text-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mx-auto h-12 w-12 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <h3 className="mt-2 text-sm font-medium text-gray-900">
                                {
                                    test.isReady || live.isReady
                                        ? "You should onboard all of your Stripe accounts."
                                        : "You have no Stripe accounts onboarded yet."
                                }
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                                {
                                    test.isReady || live.isReady
                                        ? "Manage your account below or onboard a second one."
                                        : "Click the buttons below to onboard your Test and Live accounts."
                                }
                            </p>
                            <div className="mt-6 space-x-3">
                                <Link
                                    href={test.isReady ? test.loginUrl : test.onboardUrl}
                                    target="_blank"
                                    className="px-4 py-2 bg-purple-600 text-white text-sm rounded-md shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600"
                                >
                                    {test.isReady ? "Manage" : "Onboard"} Test
                                </Link>
                                <Link
                                    href={live.isReady ? live.loginUrl : live.onboardUrl}
                                    target="_blank"
                                    className="px-4 py-2 bg-white text-sm rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600"
                                >
                                    {live.isReady ? "Manage" : "Onboard"} Live
                                </Link>
                            </div>
                        </div>
                    )}

                    {/* Banner if both ready */}
                    {bothReady && (
                        <div className="bg-green-50 border-l-4 border-green-400 p-4">
                            <p className="text-sm text-green-700">
                                Both Test and Live accounts are onboarded and ready to manage!
                            </p>
                        </div>
                    )}

                    {/* Details for each env */}
                    <div className="px-6 py-5 space-y-8">
                        {[['Test', test], ['Live', live]].map(([label, info]) => {
                            const acct = info as AccountInfo;
                            const shortId = acct.stripeAccountId.replace(/^(.{7}).+(.{2})$/, '$1…$2');
                            const created = new Date(acct.createdAt).toLocaleDateString('en-US', {
                                month: 'short', day: 'numeric', year: 'numeric'
                            });

                            return (
                                <div key={label}>
                                    <h4 className="text-md font-medium text-gray-900 mb-4">{label} Account</h4>
                                    <div className="bg-white shadow overflow-hidden rounded-md">
                                        <ul className="divide-y divide-gray-200">
                                            <li className="px-6 py-4 flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <div className={`h-10 w-10 ${acct.blocked || !acct.isReady ? 'bg-yellow-100' : 'bg-green-100'} rounded-full flex items-center justify-center`}>
                                                        <svg
                                                            className={`h-6 w-6 ${acct.blocked || !acct.isReady ? 'text-yellow-600' : 'text-green-600'}`}
                                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                                        >
                                                            {(acct.blocked || !acct.isReady) ? (
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                                            ) : (
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                                      d="M5 13l4 4L19 7" />
                                                            )}
                                                        </svg>
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{shortId}</div>
                                                        <div className="text-sm text-gray-500">Created on {created}</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center">
                                                    {acct.isReady && acct.loginUrl ? (
                                                        <Link
                                                            href={acct.loginUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-sm font-medium text-purple-600 hover:text-purple-700"
                                                        >
                                                            Manage
                                                        </Link>
                                                    ) : (
                                                        <Link
                                                            href={acct.onboardUrl}
                                                            target={"_blank"}
                                                            className="text-sm font-medium text-purple-600 hover:text-purple-700"
                                                        >
                                                            Onboard
                                                        </Link>
                                                    )}
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Block Reasons below card */}
                                    {acct.blockReasons.length > 0 && (
                                        <div className="mt-2 p-4 bg-red-50 border-l-4 border-red-400 rounded-md">
                                            <ul className="list-disc list-inside space-y-1 text-sm text-red-700">
                                                {acct.blockReasons.map((reason, idx) => (
                                                    <li key={idx}>{reason}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}