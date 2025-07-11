import { Space_Grotesk } from 'next/font/google'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { StripeIntegration } from '@/components/StripeIntegration'
import { CTA } from '@/components/CTA'
import { Footer } from '@/components/Footer'
import { Marketplace } from '@/components/Marketplace'
import { Testimonials } from '@/components/Testimonials'
import { Support } from '@/components/Support'

export default function Page() {
    return (
        <main>
            <Header />
            <Hero />
            <Features />
            <StripeIntegration />
            <Testimonials />
            <Marketplace />
            <Support />
            <CTA />
            <Footer />
        </main>
    )
}