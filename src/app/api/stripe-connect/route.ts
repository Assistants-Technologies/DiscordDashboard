import { NextResponse } from 'next/server'
import { auth } from '@/auth'
import { StripeService } from '@/services/stripeService'

export function GET(req: Request) {
    return auth().then(session => {
        console.log("Session:", session)
        if (!session?.user) {
            return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
        }
        
        if (!session.user.email) {
            return NextResponse.json({ error: 'Email not set in user profile' }, { status: 400 })
        }
        
        if(!session.user.country) {
            return NextResponse.json({ error: 'Country not set in user profile' }, { status: 400 })
        }

        const { id: ssoUserId, email } = session.user!

        const fetchFor = (env: 'TEST' | 'LIVE') => {
            return StripeService.getOrCreateAccount({ ssoUserId, email: email!, environment: env, country: session.user.country })
                .then(({ account, record }) =>
                    Promise.all([
                        StripeService.isActive(account.id, env),
                        StripeService.getAccountBlocks(account.id, env),
                        StripeService.createOnboardingLink({ stripeAccountId: record.stripeAccountId, environment: env }),
                    ]).then(([isReady, blockReasons, onboardUrl]) => {
                        const reasons = isReady ? blockReasons : [];
                        const base = {
                            stripeAccountId: record.stripeAccountId,
                            createdAt: record.createdAt.toISOString(),
                            isReady,
                            blocked: reasons.length > 0,
                            blockReasons: reasons,
                            onboardUrl,
                        } as const;

                        if (isReady) {
                            return StripeService.createLoginLink({ stripeAccountId: record.stripeAccountId, environment: env })
                                .then(loginUrl => ({ ...base, loginUrl }))
                        }

                        return Promise.resolve({ ...base, loginUrl: null })
                    })
                )
        }

        return Promise.all([fetchFor('TEST'), fetchFor('LIVE')])
            .then(([test, live]) => NextResponse.json({ test, live }))
    })
}
