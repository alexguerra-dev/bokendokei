'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-2xl font-bold text-gray-900">
                                ⚔️
                            </span>
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                            Bōkendokei
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link
                            href="/adventures"
                            className="hover:text-yellow-400 transition-colors"
                        >
                            Adventures
                        </Link>
                        <Link
                            href="/loot"
                            className="hover:text-yellow-400 transition-colors"
                        >
                            Loot
                        </Link>
                        <Link
                            href="/gear"
                            className="hover:text-yellow-400 transition-colors"
                        >
                            Gear
                        </Link>
                        <Link
                            href="/profile"
                            className="hover:text-yellow-400 transition-colors"
                        >
                            Profile
                        </Link>
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden py-4 border-t border-white/20">
                        <div className="flex flex-col space-y-4">
                            <Link
                                href="/adventures"
                                className="hover:text-yellow-400 transition-colors"
                            >
                                Adventures
                            </Link>
                            <Link
                                href="/loot"
                                className="hover:text-yellow-400 transition-colors"
                            >
                                Loot
                            </Link>
                            <Link
                                href="/gear"
                                className="hover:text-yellow-400 transition-colors"
                            >
                                Gear
                            </Link>
                            <Link
                                href="/profile"
                                className="hover:text-yellow-400 transition-colors"
                            >
                                Profile
                            </Link>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    )
}
