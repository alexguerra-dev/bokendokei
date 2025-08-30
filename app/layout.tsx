import type { Metadata } from 'next'
import './globals.css'

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

    manifest: '/site.webmanifest',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
