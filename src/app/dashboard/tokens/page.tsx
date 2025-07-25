'use client'

import { useEffect, useState } from 'react'

export default function TokenPage() {
    const [status, setStatus] = useState<{ TEST: boolean; LIVE: boolean } | null>(null)
    const [env, setEnv] = useState<'TEST' | 'LIVE'>('TEST')
    const [token, setToken] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        console.log('token', token)
        fetch('/api/user/token')
            .then(res => res.json())
            .then(setStatus)
    }, [])

    const generate = async () => {
        setLoading(true)
        const res = await fetch('/api/user/token', {
            method: 'POST',
            body: JSON.stringify({ environment: env }),
        })

        const data = await res.json()
        if (res.ok) {
            setToken(data.token)
            setStatus(prev => prev ? { ...prev, [env]: true } : null)
        } else {
            alert(data.error || 'Something went wrong')
        }
        setLoading(false)
    }

    return (
        <main className="max-w-xl mx-auto mt-10 space-y-6 px-4">
            <section className="border rounded-lg p-6 bg-white shadow">
                <h2 className="text-xl font-semibold mb-4">Token status</h2>
                {status ? (
                    <ul className="list-disc list-inside text-sm space-y-1">
                        <li>TEST: {status.TEST ? '✅ Exists' : '❌ Not created'}</li>
                        <li>LIVE: {status.LIVE ? '✅ Exists' : '❌ Not created'}</li>
                    </ul>
                ) : (
                    <p className="text-gray-500 text-sm">Loading token status...</p>
                )}
            </section>

            <section className="border rounded-lg p-6 bg-white shadow">
                <h2 className="text-xl font-semibold mb-4">Create New Token</h2>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Environment</label>
                    <div className="flex gap-4 text-sm">
                        <label className="flex items-center gap-1">
                            <input
                                type="radio"
                                name="env"
                                value="TEST"
                                checked={env === 'TEST'}
                                onChange={() => setEnv('TEST')}
                            />
                            TEST
                        </label>
                        <label className="flex items-center gap-1">
                            <input
                                type="radio"
                                name="env"
                                value="LIVE"
                                checked={env === 'LIVE'}
                                onChange={() => setEnv('LIVE')}
                            />
                            LIVE
                        </label>
                    </div>
                </div>

                <button
                    onClick={generate}
                    disabled={loading}
                    className="bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-800 disabled:opacity-50"
                >
                    {loading ? 'Generating...' : 'Generate Token'}
                </button>

                {token && (
                    <div className="mt-6 bg-gray-100 p-4 rounded text-sm">
                        <p className="mb-2 font-medium text-red-600">
                            Copy this token now – you won't see it again (for security reasons):
                        </p>
                        <pre className="bg-white border p-2 rounded break-all">{token}</pre>
                    </div>
                )}
                
                <p className="mt-4 text-sm text-gray-500">
                    Tokens are used to authenticate your application with our API. Keep them secret!
                    <br />
                    If you lose a token, you can generate a new one and the old one will be invalidated.
                </p>
            </section>
        </main>
    )
}