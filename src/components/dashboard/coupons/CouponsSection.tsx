export default function CouponsSection() {
    return (
        <div className="px-4 py-6 sm:px-6 lg:px-8">
            {/* Coupons header */}
            <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Coupons</h3>
                <div className="mt-3 sm:mt-0 sm:ml-4">
                    <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-rose-500 hover:from-purple-700 hover:to-rose-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600"
                    >
                        Create Coupon
                    </button>
                </div>
            </div>

            {/* Coupons list */}
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-gray-200 ring-opacity-100 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Code</th>
                                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Discount</th>
                                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Uses</th>
                                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Expires</th>
                                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                                    <th className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                {[
                                    {
                                        code: "SUMMER2023",
                                        discount: "20% off",
                                        uses: "142/∞",
                                        expires: "Aug 31, 2023",
                                        status: { label: "Active", color: "green" },
                                    },
                                    {
                                        code: "WELCOME10",
                                        discount: "$10 off",
                                        uses: "89/100",
                                        expires: "Never",
                                        status: { label: "Active", color: "green" },
                                    },
                                    {
                                        code: "BLACKFRIDAY",
                                        discount: "30% off",
                                        uses: "0/50",
                                        expires: "Nov 30, 2023",
                                        status: { label: "Scheduled", color: "yellow" },
                                    },
                                    {
                                        code: "HOLIDAY2022",
                                        discount: "25% off",
                                        uses: "120/120",
                                        expires: "Jan 1, 2023",
                                        status: { label: "Expired", color: "red" },
                                    },
                                ].map((coupon) => (
                                    <tr key={coupon.code}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                            {coupon.code}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{coupon.discount}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{coupon.uses}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{coupon.expires}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${coupon.status.color}-100 text-${coupon.status.color}-800`}
                        >
                          {coupon.status.label}
                        </span>
                                        </td>
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                            <a href="#" className="text-purple-600 hover:text-rose-500">
                                                Edit
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}