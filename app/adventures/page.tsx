'use client'

import { useState } from 'react'
import QuestCard from '@/components/ui/quest-card'
import ProgressBar from '@/components/ui/progress-bar'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

interface Quest {
    id: string
    title: string
    description: string
    difficulty: 'easy' | 'medium' | 'hard'
    category: 'health' | 'productivity' | 'learning' | 'social'
    experiencePoints: number
    streak: number
    isCompleted: boolean
}

export default function AdventuresPage() {
    const [quests, setQuests] = useState<Quest[]>([
        {
            id: '1',
            title: 'Morning Exercise',
            description:
                'Complete 30 minutes of physical activity to start your day with energy.',
            difficulty: 'easy',
            category: 'health',
            experiencePoints: 50,
            streak: 5,
            isCompleted: false,
        },
        {
            id: '2',
            title: 'Read 20 Pages',
            description:
                'Dive into a book and expand your knowledge with focused reading.',
            difficulty: 'medium',
            category: 'learning',
            experiencePoints: 75,
            streak: 3,
            isCompleted: false,
        },
        {
            id: '3',
            title: 'Complete Project Task',
            description:
                'Finish one major task from your current project to make progress.',
            difficulty: 'hard',
            category: 'productivity',
            experiencePoints: 100,
            streak: 1,
            isCompleted: false,
        },
        {
            id: '4',
            title: 'Call a Friend',
            description:
                "Reach out to someone you haven't talked to in a while.",
            difficulty: 'easy',
            category: 'social',
            experiencePoints: 30,
            streak: 2,
            isCompleted: false,
        },
        {
            id: '5',
            title: 'Meditation Session',
            description:
                'Practice mindfulness with a 15-minute meditation session.',
            difficulty: 'medium',
            category: 'health',
            experiencePoints: 60,
            streak: 7,
            isCompleted: false,
        },
        {
            id: '6',
            title: 'Learn New Skill',
            description:
                'Spend 1 hour practicing or learning a new technical skill.',
            difficulty: 'hard',
            category: 'learning',
            experiencePoints: 120,
            streak: 0,
            isCompleted: false,
        },
    ])

    const [totalXP, setTotalXP] = useState(0)
    const [completedQuests, setCompletedQuests] = useState(0)

    const handleQuestComplete = (questId: string) => {
        setQuests((prevQuests) =>
            prevQuests.map((quest) =>
                quest.id === questId ? { ...quest, isCompleted: true } : quest,
            ),
        )

        const quest = quests.find((q) => q.id === questId)
        if (quest) {
            setTotalXP((prev) => prev + quest.experiencePoints)
            setCompletedQuests((prev) => prev + 1)
        }
    }

    const totalQuests = quests.length
    const completionRate = (completedQuests / totalQuests) * 100

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Your Adventure Log
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Complete quests to earn experience points, build
                        streaks, and unlock new adventures.
                    </p>
                </div>

                {/* Progress Overview */}
                <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">
                                {totalXP}
                            </div>
                            <div className="text-gray-600">Total XP</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-green-600 mb-2">
                                {completedQuests}
                            </div>
                            <div className="text-gray-600">
                                Quests Completed
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">
                                {totalQuests}
                            </div>
                            <div className="text-gray-600">Total Quests</div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <ProgressBar
                            current={completedQuests}
                            total={totalQuests}
                            label="Overall Progress"
                            variant="success"
                            size="lg"
                        />
                    </div>
                </div>

                {/* Quests Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {quests.map((quest) => (
                        <QuestCard
                            key={quest.id}
                            {...quest}
                            onComplete={handleQuestComplete}
                        />
                    ))}
                </div>

                {/* Empty State */}
                {completedQuests === totalQuests && (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">🎉</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            All Quests Completed!
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Congratulations! You've completed all available
                            quests. Check back tomorrow for new adventures.
                        </p>
                        <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200">
                            Refresh Quests
                        </button>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    )
}
