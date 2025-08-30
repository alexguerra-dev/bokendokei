'use client'

import { useRef, useEffect, useState, useCallback } from 'react'

interface CreatureStats {
    happiness: number
    energy: number
    hunger: number
    level: number
}

interface Position {
    x: number
    y: number
}

export default function CanvasCreature() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const animationRef = useRef<number>()

    const [stats, setStats] = useState<CreatureStats>({
        happiness: 75,
        energy: 60,
        hunger: 40,
        level: 1,
    })

    const [position, setPosition] = useState<Position>({ x: 50, y: 50 })
    const [targetPosition, setTargetPosition] = useState<Position>({
        x: 50,
        y: 50,
    })
    const [isMoving, setIsMoving] = useState(false)
    const [animationPhase, setAnimationPhase] = useState(0)

    // Animation loop
    const animate = useCallback(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Move creature towards target
        if (isMoving) {
            const dx = targetPosition.x - position.x
            const dy = targetPosition.y - position.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance > 2) {
                const moveSpeed = 1
                setPosition((prev) => ({
                    x: prev.x + (dx / distance) * moveSpeed,
                    y: prev.y + (dy / distance) * moveSpeed,
                }))
            } else {
                setIsMoving(false)
                setPosition(targetPosition)
            }
        }

        // Draw creature
        drawCreature(ctx, position.x, position.y, stats, animationPhase)

        animationRef.current = requestAnimationFrame(animate)
    }, [position, targetPosition, isMoving, stats, animationPhase])

    // Start animation
    useEffect(() => {
        animationRef.current = requestAnimationFrame(animate)
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [animate])

    // Animation phase cycling
    useEffect(() => {
        const interval = setInterval(() => {
            setAnimationPhase((prev) => (prev + 1) % 8)
        }, 200)

        return () => clearInterval(interval)
    }, [])

    // Random movement
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isMoving && Math.random() > 0.7) {
                const newX = Math.random() * 180 + 10
                const newY = Math.random() * 180 + 10
                setTargetPosition({ x: newX, y: newY })
                setIsMoving(true)
            }
        }, 2000)

        return () => clearInterval(interval)
    }, [isMoving])

    const drawCreature = (
        ctx: CanvasRenderingContext2D,
        x: number,
        y: number,
        stats: CreatureStats,
        phase: number,
    ) => {
        const size = 20 + stats.level * 2
        const bounce = Math.sin(phase * 0.5) * 2

        // Body color based on happiness
        const bodyHue = Math.max(0, Math.min(120, stats.happiness * 1.2))
        ctx.fillStyle = `hsl(${bodyHue}, 70%, 60%)`

        // Draw body (circle)
        ctx.beginPath()
        ctx.arc(x, y + bounce, size, 0, Math.PI * 2)
        ctx.fill()

        // Draw eyes
        ctx.fillStyle = 'white'
        const eyeOffset = size * 0.3
        const eyeSize = size * 0.2

        // Left eye
        ctx.beginPath()
        ctx.arc(x - eyeOffset, y - eyeOffset + bounce, eyeSize, 0, Math.PI * 2)
        ctx.fill()

        // Right eye
        ctx.beginPath()
        ctx.arc(x + eyeOffset, y - eyeOffset + bounce, eyeSize, 0, Math.PI * 2)
        ctx.fill()

        // Draw pupils
        ctx.fillStyle = 'black'
        const pupilSize = eyeSize * 0.5

        // Left pupil
        ctx.beginPath()
        ctx.arc(
            x - eyeOffset,
            y - eyeOffset + bounce,
            pupilSize,
            0,
            Math.PI * 2,
        )
        ctx.fill()

        // Right pupil
        ctx.beginPath()
        ctx.arc(
            x + eyeOffset,
            y - eyeOffset + bounce,
            pupilSize,
            0,
            Math.PI * 2,
        )
        ctx.fill()

        // Draw mouth based on happiness
        ctx.strokeStyle = 'black'
        ctx.lineWidth = 2
        ctx.beginPath()

        if (stats.happiness > 60) {
            // Happy smile
            ctx.arc(x, y + bounce, size * 0.5, 0.2 * Math.PI, 0.8 * Math.PI)
        } else if (stats.happiness > 30) {
            // Neutral
            ctx.moveTo(x - size * 0.3, y + size * 0.2 + bounce)
            ctx.lineTo(x + size * 0.3, y + size * 0.2 + bounce)
        } else {
            // Sad frown
            ctx.arc(
                x,
                y + size * 0.8 + bounce,
                size * 0.5,
                1.2 * Math.PI,
                1.8 * Math.PI,
            )
        }
        ctx.stroke()

        // Draw level indicator
        if (stats.level > 1) {
            ctx.fillStyle = 'gold'
            ctx.font = '12px Arial'
            ctx.fillText(`Lv.${stats.level}`, x - 10, y - size - 10)
        }
    }

    const handleCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
        const canvas = canvasRef.current
        if (!canvas) return

        const rect = canvas.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top

        setTargetPosition({ x, y })
        setIsMoving(true)
    }

    const feedCreature = () => {
        setStats((prev) => ({
            ...prev,
            happiness: Math.min(100, prev.happiness + 15),
            hunger: Math.max(0, prev.hunger - 20),
            energy: Math.min(100, prev.energy + 10),
        }))
    }

    const playWithCreature = () => {
        setStats((prev) => ({
            ...prev,
            happiness: Math.min(100, prev.happiness + 20),
            energy: Math.max(0, prev.energy - 10),
        }))
    }

    const restCreature = () => {
        setStats((prev) => ({
            ...prev,
            energy: Math.min(100, prev.energy + 30),
            happiness: Math.max(0, prev.happiness - 5),
        }))
    }

    return (
        <div className="flex flex-col items-center p-6 bg-gradient-to-b from-sky-200 to-green-200 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
                Adventure Buddy
            </h2>

            {/* Canvas Display */}
            <div className="mb-4 bg-white rounded-lg shadow-inner">
                <canvas
                    ref={canvasRef}
                    width={200}
                    height={200}
                    onClick={handleCanvasClick}
                    className="cursor-pointer rounded-lg"
                    style={{ imageRendering: 'pixelated' }}
                />
            </div>

            {/* Stats Bars */}
            <div className="w-full mb-4 space-y-2">
                <div className="flex items-center gap-2">
                    <span className="text-sm font-medium w-20">Happiness:</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-yellow-400 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${stats.happiness}%` }}
                        />
                    </div>
                    <span className="text-sm w-8">{stats.happiness}</span>
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-sm font-medium w-20">Energy:</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-blue-400 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${stats.energy}%` }}
                        />
                    </div>
                    <span className="text-sm w-8">{stats.energy}</span>
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-sm font-medium w-20">Hunger:</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-red-400 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${stats.hunger}%` }}
                        />
                    </div>
                    <span className="text-sm w-8">{stats.hunger}</span>
                </div>
            </div>

            {/* Controls */}
            <div className="flex gap-2 flex-wrap justify-center">
                <button
                    onClick={feedCreature}
                    className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors text-sm"
                >
                    🍎 Feed
                </button>
                <button
                    onClick={playWithCreature}
                    className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors text-sm"
                >
                    🎮 Play
                </button>
                <button
                    onClick={restCreature}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm"
                >
                    😴 Rest
                </button>
            </div>

            <p className="text-xs text-gray-600 mt-2 text-center">
                Click anywhere to make your buddy move!
            </p>
        </div>
    )
}
