interface Stat {
    title: string;
    value: string;
    percentage: string;
    percentageColor: string;
    iconColor: string;
    icon: JSX.Element;
}

const stats: Stat[] = [
    {
        title: "Total Revenue",
        value: "$12,345",
        percentage: "+12%",
        percentageColor: "text-green-600",
        iconColor: "from-purple-700 to-red-500",
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        ),
    },
    {
        title: "Active Subscriptions",
        value: "342",
        percentage: "+8%",
        percentageColor: "text-green-600",
        iconColor: "from-orange-500 to-red-500",
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
        ),
    },
    {
        title: "New Customers",
        value: "56",
        percentage: "-3%",
        percentageColor: "text-red-600",
        iconColor: "from-red-500 to-orange-500",
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
        ),
    },
    {
        title: "Conversion Rate",
        value: "3.2%",
        percentage: "+0.4%",
        percentageColor: "text-green-600",
        iconColor: "from-purple-700 to-red-500",
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
        ),
    },
];

export default function StatsSection() {
    return (
        <section>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((s, i) => (
                    <div
                        key={i}
                        className="bg-white overflow-hidden shadow rounded-lg p-5 flex items-center"
                    >
                        <div>
                            <div className="text-sm font-medium text-gray-500">{s.title}</div>
                            <div className="mt-1 text-xl font-semibold text-gray-900">{s.value}</div>
                            <div className={`mt-1 text-sm ${s.percentageColor}`}>{s.percentage}</div>
                        </div>
                        <div className="ml-auto">
                            <div
                                className={`w-10 h-10 rounded-full bg-gradient-to-br ${s.iconColor} flex items-center justify-center`}
                            >
                                <svg
                                    className="h-5 w-5 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    {s.icon}
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}