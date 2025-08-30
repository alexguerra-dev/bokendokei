'use client'

import { useState } from 'react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

interface GearItem {
    id: string
    name: string
    type: 'weapon' | 'armor' | 'accessory' | 'consumable'
    rarity: 'common' | 'rare' | 'epic' | 'legendary'
    description: string
    icon: string
    stats: {
        attack?: number
        defense?: number
        magic?: number
        health?: number
    }
    equipped: boolean
    owned: boolean
}

export default function GearPage() {
    const [gearItems, setGearItems] = useState<GearItem[]>([
        {
            id: '1',
            name: 'Golden Sword',
            type: 'weapon',
            rarity: 'legendary',
            description: 'A mighty weapon forged from pure gold.',
            icon: '⚔️',
            stats: { attack: 50 },
            equipped: true,
            owned: true,
        },
        {
            id: '2',
            name: 'Dragon Scale Armor',
            type: 'armor',
            rarity: 'epic',
            description: 'Armor crafted from dragon scales.',
            icon: '🛡️',
            stats: { defense: 40, health: 20 },
            equipped: true,
            owned: true,
        },
        {
            id: '3',
            name: 'Magic Ring',
            type: 'accessory',
            rarity: 'rare',
            description: 'A ring with magical properties.',
            icon: '💍',
            stats: { magic: 25 },
            equipped: false,
            owned: true,
        },
        {
            id: '4',
            name: 'Health Potion',
            type: 'consumable',
            rarity: 'common',
            description: 'Restores health when consumed.',
            icon: '🧪',
            stats: { health: 50 },
            equipped: false,
            owned: true,
        },
        {
            id: '5',
            name: 'Steel Boots',
            type: 'armor',
            rarity: 'common',
            description: 'Basic boots for protection.',
            icon: '👢',
            stats: { defense: 15 },
            equipped: false,
            owned: true,
        },
        {
            id: '6',
            name: 'Crystal Staff',
            type: 'weapon',
            rarity: 'epic',
            description: 'A staff made of pure crystal.',
            icon: '🔮',
            stats: { magic: 35 },
            equipped: false,
            owned: false,
        },
    ])

    const [selectedItem, setSelectedItem] = useState<GearItem | null>(null)

    const handleEquip = (itemId: string) => {
        setGearItems((prevItems) =>
            prevItems.map((item) => {
                if (item.type === 'weapon' && item.equipped) {
                    return { ...item, equipped: false }
                }
                if (
                    item.type === 'armor' &&
                    item.equipped &&
                    item.type === 'armor'
                ) {
                    return { ...item, equipped: false }
                }
                if (item.id === itemId) {
                    return { ...item, equipped: true }
                }
                return item
            }),
        )
    }

    const handleUnequip = (itemId: string) => {
        setGearItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? { ...item, equipped: false } : item,
            ),
        )
    }

    const rarityColors = {
        common: 'bg-gray-100 text-gray-800',
        rare: 'bg-blue-100 text-blue-800',
        epic: 'bg-purple-100 text-purple-800',
        legendary: 'bg-yellow-100 text-yellow-800',
    }

    const typeColors = {
        weapon: 'bg-red-100 text-red-800',
        armor: 'bg-blue-100 text-blue-800',
        accessory: 'bg-purple-100 text-purple-800',
        consumable: 'bg-green-100 text-green-800',
    }

    const equippedItems = gearItems.filter((item) => item.equipped)
    const totalStats = equippedItems.reduce((acc, item) => {
        Object.entries(item.stats).forEach(([stat, value]) => {
            acc[stat] = (acc[stat] || 0) + value
        })
        return acc
    }, {} as Record<string, number>)

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Your Gear & Equipment
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Equip your best gear and prepare for epic adventures.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Character Stats */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl p-6 shadow-lg sticky top-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Character Stats
                            </h3>

                            {/* Character Avatar */}
                            <div className="text-center mb-6">
                                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                                    🧙‍♂️
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900">
                                    Adventurer
                                </h4>
                                <p className="text-gray-600">Level 15</p>
                            </div>

                            {/* Stats */}
                            <div className="space-y-3">
                                {Object.entries(totalStats).map(
                                    ([stat, value]) => (
                                        <div
                                            key={stat}
                                            className="flex justify-between items-center"
                                        >
                                            <span className="text-gray-600 capitalize">
                                                {stat}
                                            </span>
                                            <span className="font-semibold text-gray-900">
                                                {value}
                                            </span>
                                        </div>
                                    ),
                                )}
                            </div>

                            {/* Equipped Items */}
                            <div className="mt-6">
                                <h4 className="font-semibold text-gray-900 mb-3">
                                    Equipped
                                </h4>
                                <div className="space-y-2">
                                    {equippedItems.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex items-center space-x-2 text-sm"
                                        >
                                            <span>{item.icon}</span>
                                            <span className="text-gray-700">
                                                {item.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Gear Grid */}
                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {gearItems.map((item) => (
                                <div
                                    key={item.id}
                                    className={`bg-white rounded-xl p-6 shadow-lg border-2 transition-all duration-300 ${
                                        item.equipped
                                            ? 'border-green-500 bg-green-50'
                                            : 'border-gray-200 hover:border-gray-300'
                                    } ${!item.owned ? 'opacity-50' : ''}`}
                                >
                                    {/* Item Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="text-4xl">
                                            {item.icon}
                                        </div>
                                        <div className="flex space-x-2">
                                            <span
                                                className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                    typeColors[item.type]
                                                }`}
                                            >
                                                {item.type}
                                            </span>
                                            <span
                                                className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                    rarityColors[item.rarity]
                                                }`}
                                            >
                                                {item.rarity}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Item Info */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {item.name}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {item.description}
                                    </p>

                                    {/* Stats */}
                                    {Object.entries(item.stats).length > 0 && (
                                        <div className="mb-4">
                                            <h4 className="font-semibold text-gray-900 mb-2">
                                                Stats
                                            </h4>
                                            <div className="grid grid-cols-2 gap-2">
                                                {Object.entries(item.stats).map(
                                                    ([stat, value]) => (
                                                        <div
                                                            key={stat}
                                                            className="flex justify-between text-sm"
                                                        >
                                                            <span className="text-gray-600 capitalize">
                                                                {stat}
                                                            </span>
                                                            <span className="font-medium text-gray-900">
                                                                +{value}
                                                            </span>
                                                        </div>
                                                    ),
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {/* Actions */}
                                    {item.owned ? (
                                        <div className="flex space-x-2">
                                            {item.equipped ? (
                                                <button
                                                    onClick={() =>
                                                        handleUnequip(item.id)
                                                    }
                                                    className="flex-1 py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                                                >
                                                    Unequip
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={() =>
                                                        handleEquip(item.id)
                                                    }
                                                    className="flex-1 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                                                >
                                                    Equip
                                                </button>
                                            )}
                                        </div>
                                    ) : (
                                        <div className="text-center py-2 px-4 bg-gray-100 text-gray-600 rounded-lg">
                                            Not Owned
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
