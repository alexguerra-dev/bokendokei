'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'
import { Adventurer, Pal, MoodType } from '../types'

interface AppContextType {
    currentAdventurer: Adventurer | null
    currentPal: Pal | null
    isAuthenticated: boolean
    login: (passcode: string) => boolean
    logout: () => void
    updateMood: (mood: string) => void
    completeChallenge: (description: string, goldReward: number) => void
    addMoodEntry: (mood: string, notes?: string) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

// Mock data for MVP - will be replaced with Supabase later
const mockAdventurers: Adventurer[] = [
    {
        id: '1',
        passcode: '1234',
        backgroundColor: '#87CEEB',
        name: 'Alex',
        battleCry: 'For the Code!',
        gold: 150,
        palId: '1',
    },
    {
        id: '2',
        passcode: '5678',
        backgroundColor: '#FFB6C1',
        name: 'Teresa',
        battleCry: 'Adventure Awaits!',
        gold: 200,
        palId: '2',
    },
    {
        id: '3',
        passcode: '9012',
        backgroundColor: '#98FB98',
        name: 'River',
        battleCry: "Let's Explore!",
        gold: 100,
        palId: '3',
    },
    {
        id: '4',
        passcode: '3456',
        backgroundColor: '#DDA0DD',
        name: 'Finn',
        battleCry: 'Ready for Battle!',
        gold: 75,
        palId: '4',
    },
]

const mockPals: Pal[] = [
    {
        id: '1',
        name: 'Pixel',
        adventurerId: '1',
        mood: 'happy',
        gear: [],
    },
    {
        id: '2',
        name: 'Sparkle',
        adventurerId: '2',
        mood: 'excited',
        gear: [],
    },
    {
        id: '3',
        name: 'Leaf',
        adventurerId: '3',
        mood: 'content',
        gear: [],
    },
    {
        id: '4',
        name: 'Storm',
        adventurerId: '4',
        mood: 'neutral',
        gear: [],
    },
]

export function AppProvider({ children }: { children: ReactNode }) {
    const [currentAdventurer, setCurrentAdventurer] =
        useState<Adventurer | null>(null)
    const [currentPal, setCurrentPal] = useState<Pal | null>(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const login = (passcode: string): boolean => {
        const adventurer = mockAdventurers.find((a) => a.passcode === passcode)
        if (adventurer) {
            const pal = mockPals.find((p) => p.adventurerId === adventurer.id)
            setCurrentAdventurer(adventurer)
            setCurrentPal(pal || null)
            setIsAuthenticated(true)
            return true
        }
        return false
    }

    const logout = () => {
        setCurrentAdventurer(null)
        setCurrentPal(null)
        setIsAuthenticated(false)
    }

    const updateMood = (mood: string) => {
        if (currentPal) {
            const updatedPal = { ...currentPal, mood: mood as MoodType }
            setCurrentPal(updatedPal)
        }
    }

    const completeChallenge = (description: string, goldReward: number) => {
        if (currentAdventurer) {
            const updatedAdventurer = {
                ...currentAdventurer,
                gold: currentAdventurer.gold + goldReward,
            }
            setCurrentAdventurer(updatedAdventurer)
        }
    }

    const addMoodEntry = (mood: string, notes?: string) => {
        // This will be implemented when we add the journal feature
        console.log('Mood entry added:', { mood, notes, timestamp: new Date() })
    }

    const value: AppContextType = {
        currentAdventurer,
        currentPal,
        isAuthenticated,
        login,
        logout,
        updateMood,
        completeChallenge,
        addMoodEntry,
    }

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
    const context = useContext(AppContext)
    if (context === undefined) {
        throw new Error('useApp must be used within an AppProvider')
    }
    return context
}
