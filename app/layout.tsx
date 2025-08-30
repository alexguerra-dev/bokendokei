import type { Metadata } from 'next'
import './globals.css'
import { AppProvider } from './context/AppContext'

export const metadata: Metadata = {
    title: 'Bōkendokei - Track Your Adventures',
    description:
        'Bōkendokei helps you keep track of your adventures, earn loot, and buy gear. Built with Next.js, React, and Tailwind CSS.',
    keywords: [
        'Bōkendokei',
        'adventure tracker',
        'habit app',
        'loot',
        'gear',
        'Next.js',
        'React',
        'Tailwind CSS',
    ],
    authors: [{ name: 'Bōkendokei Team' }],
    openGraph: {
        title: 'Bōkendokei - Track Your Adventures',
        description:
            'Keep track of your adventures. Get loot. Buy gear. Make habits fun!',
        url: 'https://bokendokei.lovelyvector.com',
        siteName: 'Bōkendokei',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Bōkendokei App Preview',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    themeColor: '#38bdf8',
    manifest: '/site.webmanifest',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>
                <AppProvider>{children}</AppProvider>
            </body>
        </html>
    )
}
