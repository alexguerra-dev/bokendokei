'use client'

import { useState } from 'react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import ProgressBar from '@/components/ui/progress-bar'

interface Achievement {
    id: string
    name: string
    description: string
    icon: string
    unlockedAt: Date | null
    rarity: 'common' | 'rare' | 'epic' | 'legendary'
}

export default function ProfilePage() {
    const [achievements] = useState<Achievement[]>([
        {
            id: '1',
            name: 'First Steps',
            description: 'Complete your first quest',
            icon: '👣',
            unlockedAt: new Date('2024-01-15'),
            rarity: 'common',
        },
        {
            id: '2',
            name: 'Streak Master',
            description: 'Maintain a 7-day streak',
            icon: '🔥',
            unlockedAt: new Date('2024-01-20'),
            rarity: 'rare',
        },
        {
            id: '3',
            name: 'Quest Champion',
            description: 'Complete 50 quests',
            icon: '🏆',
            unlockedAt: new Date('2024-01-25'),
            rarity: 'epic',
        },
        {
            id: '4',
            name: 'Legendary Hero',
            description: 'Reach level 20',
            icon: '⭐',
            unlockedAt: null,
            rarity: 'legendary',
        },
        {
            id: '5',
            name: 'Social Butterfly',
            description: 'Connect with 10 friends',
            icon: '🦋',
            unlockedAt: null,
            rarity: 'rare',
        },
        {
            id: '6',
            name: 'Treasure Hunter',
            description: 'Collect 100 pieces of loot',
            icon: '💎',
            unlockedAt: null,
            rarity: 'epic',
        },
    ])

    const userStats = {
        level: 15,
        experience: 1250,
        experienceToNext: 2000,
        totalQuests: 67,
        completedQuests: 58,
        currentStreak: 12,
        longestStreak: 25,
        totalXP: 8750,
        achievements: achievements.filter((a) => a.unlockedAt).length,
        totalAchievements: achievements.length,
    }

    const rarityColors = {
        common: 'bg-gray-100 text-gray-800',
        rare: 'bg-blue-100 text-blue-800',
        epic: 'bg-purple-100 text-purple-800',
        legendary: 'bg-yellow-100 text-yellow-800',
    }

    const unlockedAchievements = achievements.filter((a) => a.unlockedAt)
    const lockedAchievements = achievements.filter((a) => !a.unlockedAt)

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Profile Header */}
                <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
                    <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                        {/* Avatar */}
                        <div className="text-center md:text-left">
                            <div className="w-32 h-32 bg-gradient-to-br from-purple-500 via-blue-500 to-indigo-500 rounded-full mx-auto md:mx-0 mb-4 flex items-center justify-center text-6xl">
                                🧙‍♂️
                            </div>
                            <h1 className="text-3xl font-bold text-gray-900">
                                Adventurer
                            </h1>
                            <p className="text-gray-600">
                                Level {userStats.level} Hero
                            </p>
                        </div>

                        {/* Stats Overview */}
                        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-600">
                                    {userStats.totalXP}
                                </div>
                                <div className="text-sm text-gray-600">
                                    Total XP
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-600">
                                    {userStats.completedQuests}
                                </div>
                                <div className="text-sm text-gray-600">
                                    Quests Done
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-orange-600">
                                    {userStats.currentStreak}
                                </div>
                                <div className="text-sm text-gray-600">
                                    Day Streak
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-purple-600">
                                    {userStats.achievements}
                                </div>
                                <div className="text-sm text-gray-600">
                                    Achievements
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Level Progress */}
                    <div className="mt-8">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-700">
                                Level {userStats.level} Progress
                            </span>
                            <span className="text-sm text-gray-500">
                                {userStats.experience} /{' '}
                                {userStats.experienceToNext} XP
                            </span>
                        </div>
                        <ProgressBar
                            current={userStats.experience}
                            total={userStats.experienceToNext}
                            variant="success"
                            size="lg"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Achievements */}
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            Achievements
                        </h2>

                        <div className="space-y-4">
                            {unlockedAchievements.map((achievement) => (
                                <div
                                    key={achievement.id}
                                    className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg border border-green-200"
                                >
                                    <div className="text-3xl">
                                        {achievement.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900">
                                            {achievement.name}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {achievement.description}
                                        </p>
                                        <p className="text-xs text-green-600 mt-1">
                                            Unlocked{' '}
                                            {achievement.unlockedAt?.toLocaleDateString()}
                                        </p>
                                    </div>
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                                            rarityColors[achievement.rarity]
                                        }`}
                                    >
                                        {achievement.rarity}
                                    </span>
                                </div>
                            ))}

                            {lockedAchievements.map((achievement) => (
                                <div
                                    key={achievement.id}
                                    className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg border border-gray-200 opacity-60"
                                >
                                    <div className="text-3xl filter grayscale">
                                        {achievement.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-600">
                                            {achievement.name}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            {achievement.description}
                                        </p>
                                    </div>
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                                            rarityColors[achievement.rarity]
                                        }`}
                                    >
                                        {achievement.rarity}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Detailed Stats */}
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            Detailed Statistics
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-3">
                                    Quest Performance
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">
                                            Completion Rate
                                        </span>
                                        <span className="font-medium">
                                            {Math.round(
                                                (userStats.completedQuests /
                                                    userStats.totalQuests) *
                                                    100,
                                            )}
                                            %
                                        </span>
                                    </div>
                                    <ProgressBar
                                        current={userStats.completedQuests}
                                        total={userStats.totalQuests}
                                        variant="success"
                                        size="sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-900 mb-3">
                                    Streak Information
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">
                                            Current Streak
                                        </span>
                                        <span className="font-medium text-orange-600">
                                            {userStats.currentStreak} days
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">
                                            Longest Streak
                                        </span>
                                        <span className="font-medium text-purple-600">
                                            {userStats.longestStreak} days
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-900 mb-3">
                                    Experience
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">
                                            Current Level
                                        </span>
                                        <span className="font-medium text-blue-600">
                                            {userStats.level}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">
                                            XP to Next Level
                                        </span>
                                        <span className="font-medium text-green-600">
                                            {userStats.experienceToNext -
                                                userStats.experience}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-8 shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">
                            Ready for Your Next Adventure?
                        </h3>
                        <p className="text-lg mb-6 opacity-90">
                            Keep building your streak and unlock more
                            achievements on your journey.
                        </p>
                        <button className="px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-200">
                            Continue Questing
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
