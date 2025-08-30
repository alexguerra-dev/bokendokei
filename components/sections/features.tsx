export default function Features() {
    const features = [
        {
            icon: '🗺️',
            title: 'Adventure Tracking',
            description:
                'Transform daily habits into epic quests with our intuitive tracking system.',
            color: 'from-blue-500 to-cyan-500',
        },
        {
            icon: '⚔️',
            title: 'Earn Loot',
            description:
                'Complete quests to earn rare loot and unlock powerful items.',
            color: 'from-yellow-500 to-orange-500',
        },
        {
            icon: '🛡️',
            title: 'Buy Gear',
            description:
                'Use your hard-earned loot to purchase legendary gear and equipment.',
            color: 'from-purple-500 to-pink-500',
        },
        {
            icon: '🏆',
            title: 'Achievements',
            description:
                'Unlock achievements and climb the leaderboards with your progress.',
            color: 'from-green-500 to-emerald-500',
        },
        {
            icon: '👥',
            title: 'Social Features',
            description:
                'Connect with fellow adventurers and share your epic victories.',
            color: 'from-red-500 to-pink-500',
        },
        {
            icon: '📊',
            title: 'Progress Analytics',
            description:
                'Track your journey with detailed analytics and insights.',
            color: 'from-indigo-500 to-purple-500',
        },
    ]

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Your Adventure Awaits
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover the features that make Bōkendokei the ultimate
                        adventure companion for building lasting habits.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            {/* Icon */}
                            <div
                                className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-3xl mb-6`}
                            >
                                {feature.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                        Begin Your Journey
                    </button>
                </div>
            </div>
        </section>
    )
}
