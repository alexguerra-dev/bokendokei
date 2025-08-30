import Header from '@/components/layout/header'
import Hero from '@/components/sections/hero'
import Features from '@/components/sections/features'
import Footer from '@/components/layout/footer'

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <Hero />
                <Features />
            </main>
            <Footer />
        </div>
    )
}
