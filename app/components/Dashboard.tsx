'use client'

import React from 'react'
import { useApp } from '../context/AppContext'
import Pal from './Pal'
import Navigation from './Navigation'

export default function Dashboard() {
    const { currentAdventurer, currentPal, logout } = useApp()

    if (!currentAdventurer || !currentPal) {
        return null
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* Header */}
            <header className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center space-x-3">
                            <h1 className="text-2xl font-bold text-gray-800">
                                Bōkendokei
                            </h1>
                            <span className="text-sm text-gray-500">
                                Adventure Tracker
                            </span>
                        </div>
                        <button
                            onClick={logout}
                            className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Welcome Section */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                        Welcome back, {currentAdventurer.name}!
                    </h2>
                    <p className="text-gray-600 text-lg">
                        {currentAdventurer.battleCry}
                    </p>
                </div>

                {/* Stats and Pal Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    {/* Stats Card */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                Your Stats
                            </h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Gold</span>
                                    <span className="text-2xl font-bold text-yellow-600">
                                        {currentAdventurer.gold} 🪙
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Pal</span>
                                    <span className="text-lg font-medium text-blue-600">
                                        {currentPal.name}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Mood</span>
                                    <span className="text-lg font-medium capitalize text-green-600">
                                        {currentPal.mood}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pal Display */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                                Your Pal: {currentPal.name}
                            </h3>
                            <div className="flex justify-center">
                                <Pal
                                    pal={currentPal}
                                    backgroundColor={
                                        currentAdventurer.backgroundColor
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Quick Actions
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95">
                            Log Challenge
                        </button>
                        <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95">
                            Update Mood
                        </button>
                        <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95">
                            Adventure Journal
                        </button>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95">
                            Settings
                        </button>
                    </div>
                </div>

                {/* Navigation */}
                <Navigation />
            </main>
        </div>
    )
}
