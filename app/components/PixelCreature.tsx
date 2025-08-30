'use client'

import { useState, useEffect } from 'react'

interface CreatureState {
    mood: 'happy' | 'sad' | 'sleeping' | 'excited'
    health: number
    energy: number
    isBlinking: boolean
}

interface PixelGridProps {
    grid: number[][]
    className?: string
}

const PixelGrid: React.FC<PixelGridProps> = ({ grid, className = '' }) => {
    return (
        <div
            className={`inline-grid gap-0 ${className}`}
            style={{
                gridTemplateColumns: `repeat(${grid[0]?.length || 8}, 1fr)`,
            }}
        >
            {grid.flat().map((pixel, index) => (
                <div
                    key={index}
                    className={`w-2 h-2 ${
                        pixel === 1
                            ? 'bg-green-500'
                            : pixel === 2
                            ? 'bg-yellow-400'
                            : pixel === 3
                            ? 'bg-red-500'
                            : pixel === 4
                            ? 'bg-blue-500'
                            : 'bg-transparent'
                    }`}
                />
            ))}
        </div>
    )
}

export default function PixelCreature() {
    const [state, setState] = useState<CreatureState>({
        mood: 'happy',
        health: 100,
        energy: 80,
        isBlinking: false,
    })

    const [animationFrame, setAnimationFrame] = useState(0)

    // Animation loop
    useEffect(() => {
        const interval = setInterval(() => {
            setAnimationFrame((prev) => (prev + 1) % 3)
        }, 1500)

        return () => clearInterval(interval)
    }, [])

    // Blinking animation
    useEffect(() => {
        const blinkInterval = setInterval(() => {
            setState((prev) => ({ ...prev, isBlinking: true }))
            setTimeout(() => {
                setState((prev) => ({ ...prev, isBlinking: false }))
            }, 150)
        }, 3000)

        return () => clearInterval(blinkInterval)
    }, [])

    // Creature sprites (8x8 grid)
    const sprites = {
        happy: [
            [0, 0, 1, 1, 1, 1, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 0],
            [1, 1, 2, 1, 1, 2, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 3, 1, 1, 3, 1, 1],
            [1, 1, 1, 3, 3, 1, 1, 1],
            [0, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 1, 0, 0],
        ],
        happyBlink: [
            [0, 0, 1, 1, 1, 1, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 0],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 3, 1, 1, 3, 1, 1],
            [1, 1, 1, 3, 3, 1, 1, 1],
            [0, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 1, 0, 0],
        ],
        sleeping: [
            [0, 0, 1, 1, 1, 1, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 0],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [0, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 1, 0, 0],
        ],
        excited: [
            [0, 0, 1, 1, 1, 1, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 0],
            [1, 1, 4, 1, 1, 4, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 3, 3, 1, 1, 1],
            [1, 1, 3, 1, 1, 3, 1, 1],
            [0, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 1, 0, 0],
        ],
    }

    const getCurrentSprite = () => {
        if (state.mood === 'sleeping') return sprites.sleeping
        if (state.mood === 'excited') return sprites.excited
        if (state.isBlinking) return sprites.happyBlink
        return sprites.happy
    }

    const feedCreature = () => {
        setState((prev) => ({
            ...prev,
            mood: 'excited',
            health: Math.min(100, prev.health + 10),
            energy: Math.min(100, prev.energy + 15),
        }))

        setTimeout(() => {
            setState((prev) => ({ ...prev, mood: 'happy' }))
        }, 2000)
    }

    const putToSleep = () => {
        setState((prev) => ({
            ...prev,
            mood: 'sleeping',
            energy: Math.min(100, prev.energy + 30),
        }))

        setTimeout(() => {
            setState((prev) => ({ ...prev, mood: 'happy' }))
        }, 5000)
    }

    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
                Adventure Companion
            </h2>

            {/* Creature Display */}
            <div className="mb-4 p-4 bg-black rounded-lg">
                <PixelGrid
                    grid={getCurrentSprite()}
                    className={`transition-transform duration-300 ${
                        animationFrame === 1
                            ? 'scale-105'
                            : animationFrame === 2
                            ? 'scale-95'
                            : 'scale-100'
                    }`}
                />
            </div>

            {/* Stats */}
            <div className="mb-4 text-sm text-gray-600 space-y-1">
                <div>Health: {state.health}%</div>
                <div>Energy: {state.energy}%</div>
                <div>Mood: {state.mood}</div>
            </div>

            {/* Controls */}
            <div className="flex gap-2">
                <button
                    onClick={feedCreature}
                    className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                >
                    Feed
                </button>
                <button
                    onClick={putToSleep}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                    Sleep
                </button>
            </div>
        </div>
    )
}
