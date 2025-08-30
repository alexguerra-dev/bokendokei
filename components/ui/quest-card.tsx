'use client'

import { useState } from 'react'

interface QuestCardProps {
    id: string
    title: string
    description: string
    difficulty: 'easy' | 'medium' | 'hard'
    category: 'health' | 'productivity' | 'learning' | 'social'
    experiencePoints: number
    streak: number
    isCompleted: boolean
    onComplete: (id: string) => void
}

export default function QuestCard({
    id,
    title,
    description,
    difficulty,
    category,
    experiencePoints,
    streak,
    isCompleted,
    onComplete,
}: QuestCardProps) {
    const [isHovered, setIsHovered] = useState(false)

    const difficultyColors = {
        easy: 'from-green-500 to-emerald-500',
        medium: 'from-yellow-500 to-orange-500',
        hard: 'from-red-500 to-pink-500',
    }

    const categoryIcons = {
        health: '💪',
        productivity: '⚡',
        learning: '📚',
        social: '👥',
    }

    const categoryColors = {
        health: 'bg-green-100 text-green-800',
        productivity: 'bg-blue-100 text-blue-800',
        learning: 'bg-purple-100 text-purple-800',
        social: 'bg-pink-100 text-pink-800',
    }

    return (
        <div
            className={`
                relative bg-white rounded-xl p-6 shadow-lg border-2 transition-all duration-300
                ${
                    isCompleted
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-purple-300'
                }
                ${isHovered ? 'transform -translate-y-2 shadow-xl' : ''}
            `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Difficulty Badge */}
            <div
                className={`absolute -top-3 -right-3 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${difficultyColors[difficulty]}`}
            >
                {difficulty.toUpperCase()}
            </div>

            {/* Category Badge */}
            <div
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${categoryColors[category]} mb-4`}
            >
                <span className="mr-2">{categoryIcons[category]}</span>
                {category}
            </div>

            {/* Quest Title */}
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>

            {/* Quest Description */}
            <p className="text-gray-600 mb-4">{description}</p>

            {/* Stats Row */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                    <div className="text-center">
                        <div className="text-sm text-gray-500">XP</div>
                        <div className="text-lg font-bold text-yellow-600">
                            {experiencePoints}
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-sm text-gray-500">Streak</div>
                        <div className="text-lg font-bold text-orange-600">
                            {streak}
                        </div>
                    </div>
                </div>
            </div>

            {/* Complete Button */}
            <button
                onClick={() => onComplete(id)}
                disabled={isCompleted}
                className={`
                    w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200
                    ${
                        isCompleted
                            ? 'bg-green-500 text-white cursor-not-allowed'
                            : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transform hover:scale-105'
                    }
                `}
            >
                {isCompleted ? '✓ Completed' : 'Complete Quest'}
            </button>

            {/* Completion Animation */}
            {isCompleted && (
                <div className="absolute inset-0 bg-green-500/10 rounded-xl flex items-center justify-center">
                    <div className="text-6xl animate-bounce">🎉</div>
                </div>
            )}
        </div>
    )
}
