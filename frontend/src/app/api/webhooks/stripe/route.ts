import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { buffer } from 'node:stream/consumers'

import { getStripeClient } from '@/lib/stripe'

const secrets = {
    test: {
        secretKey: process.env.STRIPE_TEST_SECRET_KEY!,
        webhookSecret: process.env.STRIPE_WEBHOOK_SECRET_TEST!,
    },
    live: {
        secretKey: process.env.STRIPE_RESTRICTED_KEY_LIVE!,
        webhookSecret: process.env.STRIPE_WEBHOOK_SECRET_LIVE!,
    },
}

async function constructEvent(rawBody: Buffer, sig: string) {
    for (const env of ['test', 'live'] as const) {
        try {
            const stripe = new Stripe(secrets[env].secretKey, { apiVersion: '2022-11-15' })
            const evt = stripe.webhooks.constructEvent(rawBody, sig, secrets[env].webhookSecret)
            return { evt, stripe, env }
        } catch (err) {
            continue
        }
    }
    throw new Error('Unrecognized webhook signature')
}

export const POST = async (req: Request) => {
    const sig = req.headers.get('stripe-signature')!
    const body = await req.arrayBuffer()
    let evt: Stripe.Event, stripe: Stripe, environment: 'test' | 'live'
    try {
        ({ evt, stripe, env: environment } = await constructEvent(Buffer.from(body), sig))
    } catch (err: any) {
        console.error('Webhook signature verification failed:', err.message)
        return NextResponse.json({ error: 'Webhook Error' }, { status: 400 })
    }

    if (evt.type === 'account.updated') {
        const account = evt.data.object as Stripe.Account
        console.log(`Account updated: ${account.id} in ${environment} environment`)
    }

    return NextResponse.json({ received: true })
}

export const config = {
    api: {
        bodyParser: false,
    },
}