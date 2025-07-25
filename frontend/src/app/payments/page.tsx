import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CTA } from '@/components/CTA'

import { PaymentsOverview } from '@/components/payments/PaymentsOverview'

export default function Page() {
    return (
        <main>
            <Header />
            <PaymentsOverview />
            <CTA />
            <Footer />
        </main>
    )
}