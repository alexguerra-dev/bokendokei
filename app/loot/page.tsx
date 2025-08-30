import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

export default function LootPage() {
    const lootItems = [
        {
            id: '1',
            name: 'Golden Sword',
            rarity: 'legendary',
            description:
                'A mighty weapon forged from pure gold. Increases attack power by 50%.',
            icon: '⚔️',
            unlocked: true,
        },
        {
            id: '2',
            name: 'Dragon Scale Armor',
            rarity: 'epic',
            description:
                'Armor crafted from the scales of ancient dragons. Provides excellent protection.',
            icon: '🛡️',
            unlocked: true,
        },
        {
            id: '3',
            name: 'Magic Ring',
            rarity: 'rare',
            description:
                'A ring imbued with magical properties. Enhances magical abilities.',
            icon: '💍',
            unlocked: true,
        },
        {
            id: '4',
            name: 'Phoenix Feather',
            rarity: 'legendary',
            description:
                'A feather from the mythical phoenix. Grants the power of rebirth.',
            icon: '🔥',
            unlocked: false,
        },
        {
            id: '5',
            name: 'Steel Boots',
            rarity: 'common',
            description:
                'Sturdy boots that provide basic protection and mobility.',
            icon: '👢',
            unlocked: true,
        },
        {
            id: '6',
            name: 'Crystal Staff',
            rarity: 'epic',
            description:
                'A staff made of pure crystal. Amplifies magical spells.',
            icon: '🔮',
            unlocked: false,
        },
    ]

    const rarityColors = {
        common: 'bg-gray-100 text-gray-800',
        rare: 'bg-blue-100 text-blue-800',
        epic: 'bg-purple-100 text-purple-800',
        legendary: 'bg-yellow-100 text-yellow-800',
    }

    const rarityLabels = {
        common: 'Common',
        rare: 'Rare',
        epic: 'Epic',
        legendary: 'Legendary',
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Your Loot Collection
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Discover the treasures you've earned through your
                        adventures and quests.
                    </p>
                </div>

                {/* Stats */}
                <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-gray-900 mb-2">
                                {
                                    lootItems.filter((item) => item.unlocked)
                                        .length
                                }
                            </div>
                            <div className="text-gray-600">Items Unlocked</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-gray-900 mb-2">
                                {lootItems.length}
                            </div>
                            <div className="text-gray-600">Total Items</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-gray-900 mb-2">
                                {
                                    lootItems.filter(
                                        (item) =>
                                            item.rarity === 'legendary' &&
                                            item.unlocked,
                                    ).length
                                }
                            </div>
                            <div className="text-gray-600">Legendary Items</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-gray-900 mb-2">
                                {Math.round(
                                    (lootItems.filter((item) => item.unlocked)
                                        .length /
                                        lootItems.length) *
                                        100,
                                )}
                                %
                            </div>
                            <div className="text-gray-600">
                                Collection Complete
                            </div>
                        </div>
                    </div>
                </div>

                {/* Loot Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {lootItems.map((item) => (
                        <div
                            key={item.id}
                            className={`bg-white rounded-xl p-6 shadow-lg border-2 transition-all duration-300 ${
                                item.unlocked
                                    ? 'border-green-500 hover:border-green-600'
                                    : 'border-gray-200 opacity-50'
                            }`}
                        >
                            {/* Item Icon */}
                            <div className="text-6xl text-center mb-4">
                                {item.icon}
                            </div>

                            {/* Rarity Badge */}
                            <div
                                className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                                    rarityColors[item.rarity]
                                } mb-4`}
                            >
                                {rarityLabels[item.rarity]}
                            </div>

                            {/* Item Name */}
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {item.name}
                            </h3>

                            {/* Item Description */}
                            <p className="text-gray-600 mb-4">
                                {item.description}
                            </p>

                            {/* Status */}
                            <div
                                className={`text-center py-2 px-4 rounded-lg font-semibold ${
                                    item.unlocked
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-gray-100 text-gray-600'
                                }`}
                            >
                                {item.unlocked ? '✓ Unlocked' : '🔒 Locked'}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-8 shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">
                            Ready for More Loot?
                        </h3>
                        <p className="text-lg mb-6 opacity-90">
                            Complete more quests and adventures to unlock
                            legendary items and rare treasures.
                        </p>
                        <button className="px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-200">
                            Go on Adventures
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
