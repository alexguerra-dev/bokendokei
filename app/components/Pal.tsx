'use client'

import React from 'react'
import { Pal as PalType, MoodType } from '../types'

interface PalProps {
    pal: PalType
    backgroundColor: string
    size?: 'sm' | 'md' | 'lg'
}

const moodEmojis: Record<MoodType, string> = {
    excited: '🤩',
    happy: '😊',
    content: '😌',
    calm: '😐',
    neutral: '😐',
    tired: '😴',
    frustrated: '😤',
    sad: '😢',
    angry: '😠',
    sick: '🤒',
}

const moodColors: Record<MoodType, string> = {
    excited: 'from-yellow-400 to-orange-500',
    happy: 'from-green-400 to-blue-500',
    content: 'from-blue-400 to-purple-500',
    calm: 'from-blue-300 to-green-300',
    neutral: 'from-gray-300 to-gray-400',
    tired: 'from-gray-400 to-blue-400',
    frustrated: 'from-red-400 to-orange-400',
    sad: 'from-blue-400 to-gray-400',
    angry: 'from-red-500 to-orange-500',
    sick: 'from-green-300 to-yellow-300',
}

const sizeClasses = {
    sm: 'w-16 h-16 text-2xl',
    md: 'w-24 h-24 text-3xl',
    lg: 'w-32 h-32 text-4xl',
}

export default function Pal({ pal, backgroundColor, size = 'lg' }: PalProps) {
    const moodEmoji = moodEmojis[pal.mood]
    const moodColor = moodColors[pal.mood]
    const sizeClass = sizeClasses[size]

    return (
        <div className="flex flex-col items-center space-y-4">
            {/* Pal Sprite */}
            <div
                className={`${sizeClass} rounded-full flex items-center justify-center shadow-lg border-4 border-white relative overflow-hidden transition-all duration-300 hover:scale-110`}
                style={{ backgroundColor }}
            >
                {/* Mood-based background gradient */}
                <div
                    className={`absolute inset-0 bg-gradient-to-br ${moodColor} opacity-20`}
                />

                {/* Pal Emoji */}
                <div className="relative z-10 animate-pulse">{moodEmoji}</div>

                {/* Gear indicators (placeholder for future implementation) */}
                {pal.gear.length > 0 && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center text-xs text-white font-bold">
                        {pal.gear.length}
                    </div>
                )}
            </div>

            {/* Pal Info */}
            <div className="text-center">
                <h4 className="font-semibold text-gray-800 text-lg">
                    {pal.name}
                </h4>
                <p className="text-gray-600 capitalize">{pal.mood} mood</p>
            </div>

            {/* Mood Indicator Bar */}
            <div className="w-full max-w-xs">
                <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm text-gray-600">Mood:</span>
                    <span className="text-sm font-medium capitalize text-gray-800">
                        {pal.mood}
                    </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                        className={`h-2 rounded-full bg-gradient-to-r ${moodColor} transition-all duration-500`}
                        style={{
                            width: `${getMoodPercentage(pal.mood)}%`,
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

// Helper function to convert mood to percentage for visual bar
function getMoodPercentage(mood: MoodType): number {
    const moodValues: Record<MoodType, number> = {
        excited: 100,
        happy: 90,
        content: 80,
        calm: 70,
        neutral: 50,
        tired: 40,
        frustrated: 30,
        sad: 20,
        angry: 10,
        sick: 5,
    }
    return moodValues[mood] || 50
}
