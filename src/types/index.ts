export interface Monster {
  id: string
  name: string
  hp: number
  attack: number
  defense: number
  drops: string[]
  locations: string[]
  weaknesses: string[]
  description: string
  image: string
}

export interface Weapon {
  id: string
  name: string
  type: 'sword' | 'spear' | 'axe' | 'bow' | 'shield'
  attack: number
  durability: number
  description: string
  locations: string[]
  image?: string
}

export interface Armor {
  id: string
  name: string
  slot: 'head' | 'body' | 'legs'
  defense: number
  effect: string
  set: string
  locations: string[]
  image?: string
}

export interface Recipe {
  id: string
  name: string
  ingredients: string[]
  effect: string
  duration: number
  recovery: number
  image?: string
}

export interface Shrine {
  id: string
  name: string
  location: string
  type: 'blessing' | 'combat' | 'rune' | 'motion'
  reward: string
  walkthrough: string[]
}

export interface DivineBeast {
  id: string
  name: string
  element: string
  location: string
  boss: string
  walkthrough: string[]
}

export interface Trial {
  id: string
  name: string
  type: string
  reward: string
  walkthrough: string[]
}

export interface Korok {
  id: string
  region: string
  hint: string
  location: string
  puzzleType: string
}

export interface GuideSection {
  id: string
  title: string
  content: string
  steps: string[]
}

export interface Category {
  id: string
  label: string
  path: string
  icon: string
}
