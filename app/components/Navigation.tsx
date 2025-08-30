'use client'

import React from 'react'

export default function Navigation() {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                Adventure Menu
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Challenge Logger */}
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white hover:scale-105 transition-all duration-200 cursor-pointer">
                    <div className="text-center">
                        <div className="text-2xl mb-2">⚔️</div>
                        <h4 className="font-semibold mb-1">Challenge Logger</h4>
                        <p className="text-blue-100 text-sm">
                            Complete tasks and earn gold
                        </p>
                    </div>
                </div>

                {/* Mood Tracker */}
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 text-white hover:scale-105 transition-all duration-200 cursor-pointer">
                    <div className="text-center">
                        <div className="text-2xl mb-2">😊</div>
                        <h4 className="font-semibold mb-1">Mood Tracker</h4>
                        <p className="text-green-100 text-sm">
                            Update your Pal&apos;s mood
                        </p>
                    </div>
                </div>

                {/* Adventure Journal */}
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 text-white hover:scale-105 transition-all duration-200 cursor-pointer">
                    <div className="text-center">
                        <div className="text-2xl mb-2">📖</div>
                        <h4 className="font-semibold mb-1">
                            Adventure Journal
                        </h4>
                        <p className="text-purple-100 text-sm">
                            Record your journey
                        </p>
                    </div>
                </div>

                {/* Pal Customization */}
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-4 text-white hover:scale-105 transition-all duration-200 cursor-pointer">
                    <div className="text-center">
                        <div className="text-2xl mb-2">🎨</div>
                        <h4 className="font-semibold mb-1">
                            Pal Customization
                        </h4>
                        <p className="text-orange-100 text-sm">
                            Customize your companion
                        </p>
                    </div>
                </div>

                {/* Settings */}
                <div className="bg-gradient-to-br from-gray-500 to-gray-600 rounded-xl p-4 text-white hover:scale-105 transition-all duration-200 cursor-pointer">
                    <div className="text-center">
                        <div className="text-2xl mb-2">⚙️</div>
                        <h4 className="font-semibold mb-1">Settings</h4>
                        <p className="text-gray-100 text-sm">
                            Manage your adventure
                        </p>
                    </div>
                </div>

                {/* Stats & Progress */}
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl p-4 text-white hover:scale-105 transition-all duration-200 cursor-pointer">
                    <div className="text-center">
                        <div className="text-2xl mb-2">📊</div>
                        <h4 className="font-semibold mb-1">Stats & Progress</h4>
                        <p className="text-indigo-100 text-sm">
                            View your achievements
                        </p>
                    </div>
                </div>
            </div>

            {/* Quick Tips */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-medium text-blue-800 mb-2">
                    💡 Quick Tips
                </h4>
                <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Complete challenges daily to earn gold</li>
                    <li>• Keep your Pal&apos;s mood updated</li>
                    <li>• Use your gold to buy gear and customize</li>
                    <li>• Check your adventure journal regularly</li>
                </ul>
            </div>
        </div>
    )
}
