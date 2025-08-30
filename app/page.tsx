import PixelCreature from './components/PixelCreature'
import CanvasCreature from './components/CanvasCreature'

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-8">
            <div className="max-w-6xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Bōkendokei
                    </h1>
                    <p className="text-lg text-gray-600">
                        Keep track of your adventures. Get loot. Buy gear.
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                        Meet your adventure companions!
                    </p>
                </header>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div>
                        <h3 className="text-xl font-semibold text-center mb-4 text-gray-700">
                            Pixel Art Style
                        </h3>
                        <PixelCreature />
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-center mb-4 text-gray-700">
                            Canvas Animation
                        </h3>
                        <CanvasCreature />
                    </div>
                </div>

                <div className="mt-12 max-w-2xl mx-auto bg-white rounded-lg p-6 shadow-md">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Tamagotchi-like Features
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-2">
                                Pixel Art Version:
                            </h4>
                            <ul className="space-y-1">
                                <li>• 8x8 pixel grid sprites</li>
                                <li>• Multiple mood states</li>
                                <li>• Blinking animation</li>
                                <li>• Retro aesthetic</li>
                                <li>• Pure CSS + Tailwind</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-2">
                                Canvas Version:
                            </h4>
                            <ul className="space-y-1">
                                <li>• Smooth animations</li>
                                <li>• Click-to-move interaction</li>
                                <li>• Dynamic color changes</li>
                                <li>• Bouncing & floating effects</li>
                                <li>• Real-time rendering</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
