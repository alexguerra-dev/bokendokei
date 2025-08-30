'use client'

import React, { useState, useRef, useEffect } from 'react'
import { useApp } from '../context/AppContext'

export default function LoginPage() {
    const [passcode, setPasscode] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const { login } = useApp()
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        // Auto-focus the input when component mounts
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [])

    const handlePasscodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 4)
        setPasscode(value)
        setError('')
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await handleLogin()
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && passcode.length === 4) {
            // Call login directly when Enter is pressed
            handleLogin()
        }
    }

    const handleLogin = async () => {
        if (passcode.length !== 4) {
            setError('Please enter a 4-digit passcode')
            return
        }

        setIsLoading(true)
        setError('')

        // Simulate a small delay for better UX
        await new Promise((resolve) => setTimeout(resolve, 500))

        const success = login(passcode)
        if (!success) {
            setError('Invalid passcode. Please try again.')
            setPasscode('')
            if (inputRef.current) {
                inputRef.current.focus()
            }
        }

        setIsLoading(false)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="max-w-md w-full">
                {/* Logo/Title Section */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">
                        Bōkendokei
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Track Your Adventures
                    </p>
                </div>

                {/* Login Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                            Welcome, Adventurer!
                        </h2>
                        <p className="text-gray-600">
                            Enter your 4-digit passcode to begin your journey
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label
                                htmlFor="passcode"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Passcode
                            </label>
                            <input
                                ref={inputRef}
                                type="text"
                                id="passcode"
                                value={passcode}
                                onChange={handlePasscodeChange}
                                onKeyPress={handleKeyPress}
                                className="w-full px-4 py-3 text-center text-2xl font-mono tracking-widest border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                                placeholder="0000"
                                maxLength={4}
                                autoComplete="off"
                                disabled={isLoading}
                            />
                        </div>

                        {error && (
                            <div className="text-red-600 text-sm text-center bg-red-50 px-4 py-2 rounded-lg">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={passcode.length !== 4 || isLoading}
                            className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
                        >
                            {isLoading ? (
                                <div className="flex items-center justify-center">
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                    Entering...
                                </div>
                            ) : (
                                'Enter Adventure'
                            )}
                        </button>
                    </form>

                    {/* Family Members Info */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <h3 className="text-sm font-medium text-gray-700 mb-3 text-center">
                            Family Members
                        </h3>
                        <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                            <div className="text-center">
                                <div className="font-medium">Alex</div>
                                <div className="text-gray-500">1234</div>
                            </div>
                            <div className="text-center">
                                <div className="font-medium">Teresa</div>
                                <div className="text-gray-500">5678</div>
                            </div>
                            <div className="text-center">
                                <div className="font-medium">River</div>
                                <div className="text-gray-500">9012</div>
                            </div>
                            <div className="text-center">
                                <div className="font-medium">Finn</div>
                                <div className="text-gray-500">3456</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
