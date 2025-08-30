export interface Adventurer {
    id: string
    passcode: string
    backgroundColor: string
    name: string
    battleCry: string
    gold: number
    palId: string
}

export interface Pal {
    id: string
    name: string
    adventurerId: string
    mood: MoodType
    gear: Gear[]
}

export interface Gear {
    id: string
    name: string
    type: GearType
    imageUrl?: string
    equipped: boolean
}

export interface Challenge {
    id: string
    adventurerId: string
    description: string
    completedAt: Date
    goldReward: number
}

export interface MoodEntry {
    id: string
    adventurerId: string
    mood: MoodType
    notes?: string
    timestamp: Date
}

export type MoodType =
    | 'excited'
    | 'happy'
    | 'content'
    | 'calm'
    | 'neutral'
    | 'tired'
    | 'frustrated'
    | 'sad'
    | 'angry'
    | 'sick'

export type GearType = 'weapon' | 'armor' | 'accessory' | 'pet' | 'background'
