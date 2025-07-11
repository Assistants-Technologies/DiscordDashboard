'use client'

export default function DashboardError({ error }: { error: Error }) {
    return (
        <div className="p-8 text-center">
            <p className="text-red-600 mb-4">Oops! Something went wrong:</p>
            <pre className="text-sm text-gray-800">{error.message}</pre>
        </div>
    )
}