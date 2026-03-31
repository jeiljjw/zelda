# Zelda: BotW Encyclopedia + Guide Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Zelda: Breath of the Wild encyclopedia + guide website with sidebar navigation, 8 categories, and a modern dark theme.

**Architecture:** Vite + React + TypeScript SPA with static JSON data. React Router for navigation, Tailwind CSS for styling. All encyclopedia data stored as TypeScript arrays in `src/data/`.

**Tech Stack:** Vite, React 18, TypeScript, Tailwind CSS, React Router v6, lucide-react (icons)

---

## File Map

### Root / Config
- `package.json` — dependencies and scripts
- `vite.config.ts` — Vite config
- `tsconfig.json` / `tsconfig.app.json` / `tsconfig.node.json` — TypeScript configs
- `tailwind.config.js` — Tailwind + color theme
- `postcss.config.js` — PostCSS
- `index.html` — HTML entry point

### Source Structure
- `src/main.tsx` — App entry
- `src/vite-env.d.ts` — Vite type defs
- `src/index.css` — Global + Tailwind styles
- `src/App.tsx` — Router + App shell
- `src/pages/Dashboard.tsx` — Home page
- `src/pages/GettingStarted.tsx` — 초보 가이드
- `src/pages/Monsters.tsx` — 몬스터 도감 리스트
- `src/pages/MonsterDetail.tsx` — 몬스터 상세
- `src/pages/Weapons.tsx` — 무기 도감 리스트
- `src/pages/Cooking.tsx` — 요리 레시피
- `src/pages/Shrines.tsx` — Shrine 리스트
- `src/pages/ShrineDetail.tsx` — Shrine 상세
- `src/pages/DivineBeasts.tsx` — 신수 공략
- `src/pages/Trials.tsx` — 오브의 시련
- `src/pages/Koroks.tsx` — 코로그 찾기
- `src/components/Sidebar.tsx` — 좌측 사이드바
- `src/components/Header.tsx` — 상단 헤더 + 빵 부스러기
- `src/components/CategoryCard.tsx` — 대시보드 카테고리 카드
- `src/components/DataTable.tsx` — 도감 테이블 (소트/필터)
- `src/components/ItemCard.tsx` — 도감 아이템 카드
- `src/components/GuideSection.tsx` — 공략 섹션
- `src/components/SearchBar.tsx` — 검색 컴포넌트
- `src/types/index.ts` — 공통 타입 정의
- `src/data/monsters.ts` — 몬스터 샘플 데이터
- `src/data/weapons.ts` — 무기 샘플 데이터
- `src/data/recipes.ts` — 요리 샘플 데이터
- `src/data/shrines.ts` — Shrine 샘플 데이터
- `src/data/divine-beasts.ts` — 신수 데이터
- `src/data/trials.ts` — 시련 데이터
- `src/data/koroks.ts` — 코로그 데이터
- `src/data/guides.ts` — 초보 가이드 데이터
- `src/hooks/useSearch.ts` — 검색 훅
- `src/hooks/useBreadcrumbs.ts` — 빵 부스러기 훅

---

### Task 1: Project Initialization

**Files:**
- Create: `package.json`, `vite.config.ts`, `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`, `tailwind.config.js`, `postcss.config.js`, `index.html`, `src/vite-env.d.ts`

- [ ] **Step 1: Install dependencies**

```bash
cd D:/Antigravity/zelda
pnpm init
pnpm add react react-dom react-router-dom lucide-react
pnpm add -D vite @vitejs/plugin-react @types/react @types/react-dom typescript tailwindcss postcss autoprefixer
```

- [ ] **Step 2: Create `package.json` with scripts**

```json
{
  "name": "zelda-botw-encyclopedia",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.0",
    "lucide-react": "^0.436.0"
  },
  "devDependencies": {
    "vite": "^5.4.0",
    "@vitejs/plugin-react": "^4.3.0",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "typescript": "~5.5.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0"
  }
}
```

- [ ] **Step 3: Create `vite.config.ts`**

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

- [ ] **Step 4: Create `tsconfig.app.json`**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
```

- [ ] **Step 5: Create `tsconfig.node.json`**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}
```

- [ ] **Step 6: Create `tsconfig.json`**

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

- [ ] **Step 7: Create `tailwind.config.js`**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0f172a',
        sidebar: '#111827',
        card: '#1e293b',
        'card-hover': '#334155',
        accent: '#10b981',
        'accent-secondary': '#8b5cf6',
        'text-primary': '#f1f5f9',
        'text-secondary': '#94a3b8',
        border: '#334155',
      },
    },
  },
  plugins: [],
}
```

- [ ] **Step 8: Create `postcss.config.js`**

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

- [ ] **Step 9: Create `index.html`**

```html
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Zelda: BotW Encyclopedia</title>
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🗡️</text></svg>" />
  </head>
  <body class="bg-background text-text-primary">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 10: Create `src/vite-env.d.ts`**

```ts
/// <reference types="vite/client" />
```

- [ ] **Step 11: Commit**

```bash
git add package.json vite.config.ts tsconfig.json tsconfig.app.json tsconfig.node.json tailwind.config.js postcss.config.js index.html src/vite-env.d.ts
git commit -m "feat: initialize Vite + React + TypeScript + Tailwind project"
```

---

### Task 2: Entry Point, Types, and Global Styles

**Files:**
- Create: `src/main.tsx`, `src/index.css`, `src/types/index.ts`

- [ ] **Step 1: Define types in `src/types/index.ts`**

```ts
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
}

export interface Recipe {
  id: string
  name: string
  ingredients: string[]
  effect: string
  duration: number
  recovery: number
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
```

- [ ] **Step 2: Create global styles in `src/index.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: dark;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans KR', sans-serif;
}

@layer utilities {
  .scrollbar-thin::-webkit-scrollbar {
    width: 6px;
  }
  .scrollbar-thin::-webkit-scrollbar-track {
    background: transparent;
  }
  .scrollbar-thin::-webkit-scrollbar-thumb {
    background-color: #334155;
    border-radius: 3px;
  }
}

@layer components {
  .link-hover {
    @apply transition-colors duration-150;
  }
  .link-hover:hover {
    color: #10b981;
  }
}
```

- [ ] **Step 3: Create entry point in `src/main.tsx`**

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
```

- [ ] **Step 4: Commit**

```bash
git add src/types/index.ts src/index.css src/main.tsx
git commit -m "feat: add types, global styles, and entry point"
```

---

### Task 3: Sidebar and Header Layout Shell

**Files:**
- Create: `src/components/Sidebar.tsx`, `src/components/Header.tsx`, `src/App.tsx`

- [ ] **Step 1: Create Sidebar component**

```tsx
import { NavLink } from 'react-router-dom'
import {
  Sword,
  Skull,
  ChefHat,
  MapPin,
  ShieldCheck,
  Sparkles,
  Search,
  BookOpen,
  LayoutDashboard,
} from 'lucide-react'

const categories = [
  { id: 'dashboard', label: '대시보드', path: '/', icon: LayoutDashboard },
  { id: 'monsters', label: '몬스터 도감', path: '/monsters', icon: Skull },
  { id: 'weapons', label: '무기 도감', path: '/weapons', icon: Sword },
  { id: 'cooking', label: '요리 레시피', path: '/cooking', icon: ChefHat },
  { id: 'shrines', label: 'Shrine 공략', path: '/shrines', icon: Sparkles },
  { id: 'divine-beasts', label: '신수 공략', path: '/divine-beasts', icon: ShieldCheck },
  { id: 'trials', label: '오브의 시련', path: '/trials', icon: Sparkles },
  { id: 'koroks', label: '코로그 찾기', path: '/koroks', icon: MapPin },
  { id: 'getting-started', label: '초보 가이드', path: '/getting-started', icon: BookOpen },
]

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-60 bg-sidebar border-r border-border flex flex-col scrollbar-thin z-10">
      <div className="p-4 border-b border-border">
        <h1 className="text-lg font-bold text-text-primary tracking-wide">
          🗡️ 히랄 대도감
        </h1>
        <p className="text-xs text-text-secondary mt-1">Breath of the Wild</p>
      </div>

      <div className="px-3 py-2">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-text-secondary" />
          <input
            type="text"
            placeholder="검색..."
            className="w-full bg-card text-text-primary text-sm rounded-md pl-8 pr-3 py-1.5 border border-border placeholder:text-text-secondary focus:outline-none focus:border-accent"
          />
        </div>
      </div>

      <nav className="flex-1 px-3 py-2 space-y-0.5 overflow-y-auto">
        {categories.map((cat) => (
          <NavLink
            key={cat.id}
            to={cat.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md text-sm link-hover ${
                isActive
                  ? 'bg-accent/10 text-accent font-medium'
                  : 'text-text-secondary hover:text-text-primary'
              }`
            }
          >
            <cat.icon className="h-4 w-4 flex-shrink-0" />
            <span>{cat.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-3 border-t border-border">
        <p className="text-xs text-text-secondary text-center">
          Zelda: BotW Fan Site
        </p>
      </div>
    </aside>
  )
}
```

- [ ] **Step 2: Create Header component**

```tsx
import { useLocation } from 'react-router-dom'
import { useMemo } from 'react'

const routeLabels: Record<string, string> = {
  '/': '대시보드',
  '/monsters': '몬스터 도감',
  '/weapons': '무기 도감',
  '/cooking': '요리 레시피',
  '/shrines': 'Shrine 공략',
  '/divine-beasts': '신수 공략',
  '/trials': '오브의 시련',
  '/koroks': '코로그 찾기',
  '/getting-started': '초보 가이드',
}

export default function Header() {
  const location = useLocation()

  const breadcrumbs = useMemo(() => {
    const parts = location.pathname.split('/').filter(Boolean)
    const crumbs = [{ label: '홈', path: '/' }]
    let path = ''
    for (const part of parts) {
      path += `/${part}`
      const label = routeLabels[path] || part
      crumbs.push({ label, path })
    }
    return crumbs
  }, [location])

  const title =
    routeLabels[location.pathname] ||
    (breadcrumbs[breadcrumbs.length - 1]?.label ?? '페이지')

  return (
    <header className="h-12 border-b border-border bg-sidebar/50 flex items-center px-6 gap-4 flex-shrink-0">
      <nav className="flex items-center gap-1 text-xs text-text-secondary">
        {breadcrumbs.map((crumb, i) => (
          <span key={crumb.path} className="flex items-center gap-1">
            {i > 0 && <span>/</span>}
            <span className={i === breadcrumbs.length - 1 ? 'text-text-primary' : 'link-hover'}>
              {crumb.label}
            </span>
          </span>
        ))}
      </nav>
      <h2 className="text-sm font-semibold text-text-primary ml-auto">
        {title}
      </h2>
    </header>
  )
}
```

- [ ] **Step 3: Create App shell in `src/App.tsx`**

```tsx
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Monsters from './pages/Monsters'
import Weapons from './pages/Weapons'
import Cooking from './pages/Cooking'
import Shrines from './pages/Shrines'
import DivineBeasts from './pages/DivineBeasts'
import Trials from './pages/Trials'
import Koroks from './pages/Koroks'
import GettingStarted from './pages/GettingStarted'

export default function App() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 ml-60 flex flex-col">
        <Header />
        <div className="flex-1 overflow-y-auto p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/monsters" element={<Monsters />} />
            <Route path="/weapons" element={<Weapons />} />
            <Route path="/cooking" element={<Cooking />} />
            <Route path="/shrines" element={<Shrines />} />
            <Route path="/divine-beasts" element={<DivineBeasts />} />
            <Route path="/trials" element={<Trials />} />
            <Route path="/koroks" element={<Koroks />} />
            <Route path="/getting-started" element={<GettingStarted />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}
```

- [ ] **Step 4: Verify build**

```bash
pnpm build
```

Expected: Success, no errors.

- [ ] **Step 5: Verify dev server**

```bash
pnpm dev
```

Open http://localhost:5173 — should show Sidebar + Header + empty content area.

- [ ] **Step 6: Commit**

```bash
git add src/components/Sidebar.tsx src/components/Header.tsx src/App.tsx
git commit -m "feat: add sidebar, header, and app shell with routing"
```

---

### Task 4: Dashboard (Home Page)

**Files:**
- Create: `src/pages/Dashboard.tsx`, `src/components/CategoryCard.tsx`

- [ ] **Step 1: Create CategoryCard component**

```tsx
import { Link } from 'react-router-dom'
import { LucideIcon } from 'lucide-react'

interface CategoryCardProps {
  icon: LucideIcon
  label: string
  description: string
  path: string
}

export default function CategoryCard({ icon: Icon, label, description, path }: CategoryCardProps) {
  return (
    <Link
      to={path}
      className="bg-card rounded-lg p-5 border border-border hover:border-accent transition-all duration-200 group"
    >
      <Icon className="h-6 w-6 text-accent mb-3 group-hover:scale-110 transition-transform" />
      <h3 className="text-sm font-semibold text-text-primary mb-1">{label}</h3>
      <p className="text-xs text-text-secondary">{description}</p>
    </Link>
  )
}
```

- [ ] **Step 2: Create Dashboard page**

```tsx
import {
  Skull,
  Sword,
  ChefHat,
  Sparkles,
  ShieldCheck,
  MapPin,
  BookOpen,
  TrendingUp,
  Clock,
} from 'lucide-react'
import CategoryCard from '../components/CategoryCard'

const categories = [
  { icon: Skull, label: '몬스터 도감', description: 'HP, 공격력, 약점, 드랍 아이템', path: '/monsters' },
  { icon: Sword, label: '무기 도감', description: '공격력, 내구도, 획득 위치', path: '/weapons' },
  { icon: ChefHat, label: '요리 레시피', description: '조합법, 효과, 회복량', path: '/cooking' },
  { icon: Sparkles, label: 'Shrine 공략', description: '120개 Shrine 위치와 해법', path: '/shrines' },
  { icon: ShieldCheck, label: '신수 공략', description: '4대 신수 공략', path: '/divine-beasts' },
  { icon: Sparkles, label: '오브의 시련', description: 'DLC 시련 공략', path: '/trials' },
  { icon: MapPin, label: '코로그 찾기', description: '900개 코로그 위치', path: '/koroks' },
  { icon: BookOpen, label: '초보 가이드', description: '게임 시작 필수 정보', path: '/getting-started' },
]

const popularGuides = [
  '바람신의 신수 공략 — 바람의 신전 베리아',
  '초보자를 위한 첫 Shrine 10선',
  '전설의 무기 획득 방법 정리',
]

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div className="bg-gradient-to-br from-accent/5 to-accent-secondary/5 rounded-xl p-6 border border-border">
        <h1 className="text-xl font-bold text-text-primary mb-1">
          하이랄 대도감
        </h1>
        <p className="text-sm text-text-secondary">
          젤다의 전설 브레스 오브 더 와일드 — 도감 & 공략 가이드
        </p>
      </div>

      {/* Categories */}
      <section>
        <h2 className="text-sm font-semibold text-text-primary mb-4 flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-accent" />
          카테고리 바로가기
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <CategoryCard key={cat.label} {...cat} />
          ))}
        </div>
      </section>

      {/* Popular Guides */}
      <section>
        <h2 className="text-sm font-semibold text-text-primary mb-4 flex items-center gap-2">
          <Clock className="h-4 w-4 text-accent-secondary" />
          인기 공략
        </h2>
        <div className="space-y-2">
          {popularGuides.map((guide) => (
            <div
              key={guide}
              className="bg-card rounded-md p-4 border border-border text-sm text-text-secondary"
            >
              {guide}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
```

- [ ] **Step 3: Verify dev server shows Dashboard at root**

```bash
pnpm dev
```

- [ ] **Step 4: Commit**

```bash
git add src/components/CategoryCard.tsx src/pages/Dashboard.tsx
git commit -m "feat: add dashboard with category cards and popular guides"
```

---

### Task 5: Monster Data & Monsters Page

**Files:**
- Create: `src/data/monsters.ts`, `src/pages/Monsters.tsx`, `src/hooks/useSearch.ts`

- [ ] **Step 1: Create search hook**

```ts
import { useMemo, useState } from 'react'

export function useSearch<T>(data: T[], keys: (keyof T)[]) {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    if (!query.trim()) return data
    const q = query.toLowerCase()
    return data.filter((item) =>
      keys.some((key) => {
        const value = item[key]
        if (typeof value === 'string') return value.toLowerCase().includes(q)
        if (Array.isArray(value)) return value.some((v) => typeof v === 'string' && v.toLowerCase().includes(q))
        return false
      }),
    )
  }, [data, query, keys])

  return { query, setQuery, filtered }
}
```

- [ ] **Step 2: Create monster data**

```ts
import { Monster } from '../types'

export const monsters: Monster[] = [
  {
    id: 'bokoblin-red',
    name: '붉은 보크블린',
    hp: 24,
    attack: 3,
    defense: 1,
    drops: ['보크블린의 뿔', '보크블린의 창', '고기'],
    locations: ['중앙 하이랄 평원', '동네브 평원'],
    weaknesses: ['원거리 공격', '불'],
    description: '하이랄 전역에 서식하는 가장 흔한 몬스터. 무리를 지어 행동한다.',
    image: '👹',
  },
  {
    id: 'bokoblin-blue',
    name: '푸른 보크블린',
    hp: 64,
    attack: 7,
    defense: 2,
    drops: ['보크블린의 뿔', '보크블린의 검', '고기'],
    locations: ['동네브 평원', '피할 지방'],
    weaknesses: ['원거리 공격'],
    description: '붉은 보크블린보다 강하고 지능이 높다. 무기를 다양하게 다룬다.',
    image: '👹',
  },
  {
    id: 'moblin-red',
    name: '붉은 모블린',
    hp: 128,
    attack: 12,
    defense: 3,
    drops: ['모블린의 뿔', '모블린의 창'],
    locations: ['중앙 하이랄', '아kkane 고원'],
    weaknesses: ['다리 공격'],
    description: '거대한 체구의 몬스터. 강한 공격력을 가지지만 움직임이 둔하다.',
    image: '👺',
  },
  {
    id: 'lizalfos',
    name: '도마뱀 리자폴스',
    hp: 64,
    attack: 8,
    defense: 2,
    drops: ['리자폴스 뿔', '리자폴스의 꼬리'],
    locations: ['네를 지방', '라네르 바다'],
    weaknesses: ['얼음 공격'],
    description: '민첩한 도마뱀 몬스터. 위장 능력이 뛰어나다.',
    image: '🦎',
  },
  {
    id: 'lynel-red',
    name: '붉은 라이넬',
    hp: 2000,
    attack: 54,
    defense: 5,
    drops: ['라이넬 뿔', '라이넬의 발굽', '전설의 무기'],
    locations: ['중앙 하이랄 평원 동쪽', '아kkane 산맥'],
    weaknesses: ['헤드샷 기절'],
    description: '하이랄 최강의 몬스터. 검, 활, 창을 모두 구사한다.',
    image: '🦁',
  },
]
```

- [ ] **Step 3: Create DataTable component**

```tsx
interface Column<T> {
  key: keyof T
  label: string
  render?: (value: unknown, item: T) => React.ReactNode
}

interface DataTableProps<T extends Record<string, unknown>> {
  columns: Column<T>[]
  data: T[]
  onRowClick?: (item: T) => void
}

export default function DataTable<T extends Record<string, unknown>>({
  columns,
  data,
  onRowClick,
}: DataTableProps<T>) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-card border-b border-border">
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className="text-left px-4 py-2.5 text-text-secondary font-medium"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr
              key={i}
              className={`border-b border-border bg-background hover:bg-card transition-colors ${
                onRowClick ? 'cursor-pointer' : ''
              }`}
              onClick={() => onRowClick?.(item)}
            >
              {columns.map((col) => (
                <td key={String(col.key)} className="px-4 py-2.5 text-text-primary">
                  {col.render
                    ? col.render(item[col.key] as unknown, item)
                    : String(item[col.key] ?? '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {data.length === 0 && (
        <div className="py-8 text-center text-text-secondary text-sm">
          데이터가 없습니다
        </div>
      )}
    </div>
  )
}
```

- [ ] **Step 4: Create Monsters page**

```tsx
import { useState, useMemo } from 'react'
import { monsters } from '../data/monsters'
import { Monster } from '../types'
import { useSearch } from '../hooks/useSearch'
import DataTable from '../components/DataTable'

const columns = [
  { key: 'image' as keyof Monster, label: '', render: (v: unknown) => <span className="text-xl">{v}</span> },
  { key: 'name' as keyof Monster, label: '이름' },
  { key: 'hp' as keyof Monster, label: 'HP' },
  { key: 'attack' as keyof Monster, label: '공격력' },
  { key: 'defense' as keyof Monster, label: '방어력' },
  {
    key: 'locations' as keyof Monster,
    label: '출현 지역',
    render: (v: unknown) => (
      <span className="text-xs text-text-secondary">{(v as string[]).join(', ')}</span>
    ),
  },
]

export default function Monsters() {
  const [filter, setFilter] = useState<string>('all')
  const { query, setQuery, filtered } = useSearch(monsters, ['name', 'locations', 'weaknesses'])

  const sorted = useMemo(() => {
    const arr = [...filtered]
    switch (filter) {
      case 'hp':
        return arr.sort((a, b) => b.hp - a.hp)
      case 'attack':
        return arr.sort((a, b) => b.attack - a.attack)
      case 'defense':
        return arr.sort((a, b) => b.defense - a.defense)
      default:
        return arr
    }
  }, [filtered, filter])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-text-primary">몬스터 도감</h1>
        <span className="text-xs text-text-secondary">{monsters.length}개 등록</span>
      </div>

      <div className="flex gap-3 flex-wrap">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="이름, 지역, 약점 검색..."
          className="bg-card text-text-primary text-sm rounded-md px-3 py-1.5 border border-border placeholder:text-text-secondary focus:outline-none focus:border-accent flex-1 max-w-xs"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-card text-text-primary text-sm rounded-md px-3 py-1.5 border border-border focus:outline-none focus:border-accent"
        >
          <option value="all">전체 보기</option>
          <option value="hp">HP 높은 순</option>
          <option value="attack">공격력 높은 순</option>
          <option value="defense">방어력 높은 순</option>
        </select>
      </div>

      <DataTable columns={columns} data={sorted} />
    </div>
  )
}
```

- [ ] **Step 5: Verify**

```bash
pnpm dev
```

Navigate to /monsters — should show table with 5 monsters, sortable and searchable.

- [ ] **Step 6: Commit**

```bash
git add src/data/monsters.ts src/pages/Monsters.tsx src/hooks/useSearch.ts src/components/DataTable.tsx
git commit -m "feat: add monster data, search hook, and monsters page with sortable table"
```

---

### Task 6: Weapons Data & Weapons Page

**Files:**
- Create: `src/data/weapons.ts`, `src/components/ItemCard.tsx`, `src/pages/Weapons.tsx`

- [ ] **Step 1: Create weapon data**

```ts
import { Weapon } from '../types'

export const weapons: Weapon[] = [
  { id: 'traveler-sword', name: '여행자의 검', type: 'sword', attack: 10, durability: 12, description: '하이랄 전역에서 발견되는 흔한 검', locations: ['몬스터 낙오처', '상점'] },
  { id: 'soldier-broadsword', name: '병사의 양날검', type: 'sword', attack: 14, durability: 20, description: '하이랄 병사들이 사용하던 검', locations: ['캠프', '상점'] },
  { id: 'knights-broadsword', name: '기사의 양날검', type: 'sword', attack: 24, durability: 30, description: '하이랄 기사단이 사용하던 검', locations: ['하이랄 성'] },
  { id: 'royal-broadsword', name: '왕실의 양날검', type: 'sword', attack: 36, durability: 24, description: '하이랄 왕실이 소장하던 검', locations: ['하이랄 성'] },
  { id: 'master-sword', name: '마스터 소드', type: 'sword', attack: 30, durability: 188, description: '악을 물리치는 전설의 검. 몬스터에게 추가 데미지.', locations: ['콜로니우스 유적'] },
  { id: 'traveler-spear', name: '여행자의 창', type: 'spear', attack: 8, durability: 15, description: '범용성의 창', locations: ['몬스터 낙오처'] },
  { id: 'drillshaft', name: '드릴창', type: 'spear', attack: 22, durability: 30, description: '광부가 사용하던 대형 창', locations: ['화산 지대'] },
  { id: 'traveler-bow', name: '여행자의 활', type: 'bow', attack: 10, durability: 18, description: '가장 일반적인 활', locations: ['몬스터 낙오처'] },
  { id: 'soldier-bow', name: '병사의 활', type: 'bow', attack: 14, durability: 20, description: '하이랄 병사의 활', locations: ['하이랄 성 주변'] },
  { id: 'lynel-bow', name: '라이넬의 활', type: 'bow', attack: 32, durability: 40, description: '라이넬이 사용하는 다연발 활', locations: ['라이넬 사냥'] },
  { id: 'travelers-shield', name: '여행자의 방패', type: 'shield', attack: 0, durability: 16, description: '가벼운 나무 방패', locations: ['몬스터 낙오처'] },
  { id: 'knights-shield', name: '기사의 방패', type: 'shield', attack: 0, durability: 36, description: '하이랄 기사 방패', locations: ['하이랄 성'] },
]
```

- [ ] **Step 2: Create ItemCard component**

```tsx
interface ItemCardProps {
  icon: string
  title: string
  stats: { label: string; value: string }[]
  description?: string
  badge?: string
}

export default function ItemCard({ icon, title, stats, description, badge }: ItemCardProps) {
  return (
    <div className="bg-card rounded-lg p-4 border border-border hover:border-accent transition-colors">
      <div className="flex items-start gap-3 mb-3">
        <span className="text-2xl">{icon}</span>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-text-primary text-sm truncate">{title}</h3>
          {badge && (
            <span className="inline-block mt-0.5 px-1.5 py-0.5 text-[10px] bg-accent/20 text-accent rounded">
              {badge}
            </span>
          )}
        </div>
      </div>
      <div className="space-y-1 mb-3">
        {stats.map((stat) => (
          <div key={stat.label} className="flex justify-between text-xs">
            <span className="text-text-secondary">{stat.label}</span>
            <span className="text-text-primary font-medium">{stat.value}</span>
          </div>
        ))}
      </div>
      {description && (
        <p className="text-xs text-text-secondary border-t border-border pt-2">
          {description}
        </p>
      )}
    </div>
  )
}
```

- [ ] **Step 3: Create Weapons page**

```tsx
import { useState } from 'react'
import { weapons } from '../data/weapons'
import { Weapon } from '../types'
import { useSearch } from '../hooks/useSearch'
import ItemCard from '../components/ItemCard'

const typeIcons: Record<string, string> = {
  sword: '⚔️',
  spear: '🗡️',
  axe: '🪓',
  bow: '🏹',
  shield: '🛡️',
}

const typeLabels: Record<string, string> = {
  sword: '검',
  spear: '창',
  axe: '도끼',
  bow: '활',
  shield: '방패',
}

export default function Weapons() {
  const [typeFilter, setTypeFilter] = useState<string>('all')
  const { query, setQuery, filtered } = useSearch(weapons, ['name', 'locations', 'description'])

  const types = ['all', ...Object.keys(typeLabels)]
  const shown = typeFilter === 'all' ? filtered : filtered.filter((w) => w.type === typeFilter)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-text-primary">무기 도감</h1>
        <span className="text-xs text-text-secondary">{weapons.length}개 등록</span>
      </div>

      <div className="flex gap-3 flex-wrap">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="무기 이름 검색..."
          className="bg-card text-text-primary text-sm rounded-md px-3 py-1.5 border border-border placeholder:text-text-secondary focus:outline-none focus:border-accent flex-1 max-w-xs"
        />
        <div className="flex gap-1 flex-wrap">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setTypeFilter(t)}
              className={`px-2.5 py-1 text-xs rounded-md transition-colors ${
                t === typeFilter
                  ? 'bg-accent/20 text-accent font-medium'
                  : 'bg-card text-text-secondary hover:text-text-primary border border-border'
              }`}
            >
              {t === 'all' ? '전체' : `${typeIcons[t]} ${typeLabels[t]}`}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {shown.map((weapon) => (
          <ItemCard
            key={weapon.id}
            icon={typeIcons[weapon.type] || '⚔️'}
            title={weapon.name}
            stats={[
              { label: '공격력', value: String(weapon.attack) },
              { label: '내구도', value: String(weapon.durability) },
              { label: '유형', value: typeLabels[weapon.type] },
              { label: '위치', value: weapon.locations.join(', ') || '알 수 없음' },
            ]}
            description={weapon.description}
            badge={weapon.attack >= 50 ? '★ 강력' : undefined}
          />
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 4: Verify**

Navigate to /weapons — should show weapon cards with type filter buttons.

- [ ] **Step 5: Commit**

```bash
git add src/data/weapons.ts src/components/ItemCard.tsx src/pages/Weapons.tsx
git commit -m "feat: add weapon data and weapons page with type filters"
```

---

### Task 7: Cooking, Shrines, and Remaining Pages

**Files:**
- Create: `src/data/recipes.ts`, `src/pages/Cooking.tsx`, `src/data/shrines.ts`, `src/pages/Shrines.tsx`
- Create: `src/data/divine-beasts.ts`, `src/pages/DivineBeasts.tsx`
- Create: `src/data/trials.ts`, `src/pages/Trials.tsx`
- Create: `src/data/koroks.ts`, `src/pages/Koroks.tsx`
- Create: `src/data/guides.ts`, `src/pages/GettingStarted.tsx`
- Create: `src/components/GuideSection.tsx`
- Create: `src/hooks/useBreadcrumbs.ts`

- [ ] **Step 1: Create recipe data and Cooking page**

```ts
// src/data/recipes.ts
import { Recipe } from '../types'

export const recipes: Recipe[] = [
  { id: 'hearty-saute', name: '포근포근 볶음', ingredients: ['포근포근 버섯', '포근포근 송로'], effect: '하트 회복 + 추가 하트', duration: 0, recovery: 10 },
  { id: 'mighty-elixir', name: '강장 비약', ingredients: ['강장 도마뱀', '마물parts'], effect: '공격력 업', duration: 1440, recovery: 0 },
  { id: 'fish-skewer', name: '구운 생선', ingredients: ['하이랄 송어'], effect: 'HP 회복', duration: 0, recovery: 4 },
  { id: 'spicy-saute', name: '매콤 볶음', ingredients: ['매운 버섯', '포근포근 송로'], effect: '냉기 저항 업', duration: 720, recovery: 0 },
  { id: 'hasty-elixer', name: '신속 비약', ingredients: ['신속 도마뱀', '마물parts'], effect: '이속 업', duration: 1080, recovery: 0 },
  { id: 'glazed-veggies', name: '야채 버터구이', ingredients: ['하이랄 토마토', '고원 버섯'], effect: 'HP 회복', duration: 0, recovery: 8 },
]
```

```tsx
// src/pages/Cooking.tsx
import { recipes } from '../data/recipes'
import { useSearch } from '../hooks/useSearch'

const effectColors: Record<string, string> = {
  '하트 회복': 'text-red-400',
  '공격력 업': 'text-orange-400',
  '냉기 저항 업': 'text-cyan-400',
  '이속 업': 'text-yellow-400',
  'HP 회복': 'text-green-400',
}

export default function Cooking() {
  const { query, setQuery, filtered } = useSearch(recipes, ['name', 'ingredients', 'effect'])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-text-primary">요리 레시피</h1>
        <span className="text-xs text-text-secondary">{recipes.length}개 등록</span>
      </div>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="레시피, 재료, 효과 검색..."
        className="bg-card text-text-primary text-sm rounded-md px-3 py-1.5 border border-border placeholder:text-text-secondary focus:outline-none focus:border-accent max-w-xs"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((recipe) => (
          <div key={recipe.id} className="bg-card rounded-lg p-4 border border-border">
            <h3 className="font-semibold text-text-primary text-sm mb-2">{recipe.name}</h3>
            <div className="space-y-1.5 text-xs mb-3">
              <div className="flex justify-between">
                <span className="text-text-secondary">재료</span>
                <span className="text-text-primary">{recipe.ingredients.join(', ')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">효과</span>
                <span className={effectColors[recipe.effect.slice(0, 4)] || 'text-text-primary'}>
                  {recipe.effect}
                </span>
              </div>
              {recipe.duration > 0 && (
                <div className="flex justify-between">
                  <span className="text-text-secondary">지속 시간</span>
                  <span className="text-text-primary">{Math.floor(recipe.duration / 60)}분</span>
                </div>
              )}
              {recipe.recovery > 0 && (
                <div className="flex justify-between">
                  <span className="text-text-secondary">회복량</span>
                  <span className="text-text-primary">❤️ {recipe.recovery}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Create shrine data and Shrines page**

```ts
// src/data/shrines.ts
import { Shrine } from '../types'

export const shrines: Shrine[] = [
  { id: 'omba', name: '옴바-오 신전', location: '아kkane 고원', type: 'rune', reward: '정령의 구슬', walkthrough: ['자석이동으로 문 열기', '구르기 바위 피하기', '보상 받기'] },
  { id: 'ja-baij', name: '자-바이지 신전', location: '아kkane 고원', type: 'combat', reward: '정령의 구슬', walkthrough: ['모블린 격파', '상자 이용', '보상 받기'] },
  { id: 'kea', name: '케아-후 신전', location: '중앙 하이랄', type: 'motion', reward: '정령의 구슬', walkthrough: ['블록 이동', '교각 맞추기', '보상 받기'] },
  { id: 'dah-kasoh', name: '다흐-카소 신전', location: '네를 지방', type: 'blessing', reward: '정령의 구슬', walkthrough: ['신전 내부 진입', '기대보 받기'] },
  { id: 'ta-tenoh', name: '타-테노 신전', location: '동네브 평원', type: 'rune', reward: '정령의 구슬', walkthrough: ['스태시스 활용', '바위 굴리기', '보상 받기'] },
]
```

```tsx
// src/pages/Shrines.tsx
import { Link } from 'react-router-dom'
import { shrines } from '../data/shrines'
import { Shrine } from '../types'
import { useSearch } from '../hooks/useSearch'

const typeLabels: Record<string, string> = {
  blessing: '축복',
  combat: '전투',
  rune: '룬',
  motion: '운동',
}

const typeColors: Record<string, string> = {
  blessing: 'bg-green-500/20 text-green-400',
  combat: 'bg-red-500/20 text-red-400',
  rune: 'bg-purple-500/20 text-purple-400',
  motion: 'bg-blue-500/20 text-blue-400',
}

export default function Shrines() {
  const { query, setQuery, filtered } = useSearch(shrines, ['name', 'location'])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-text-primary">Shrine 공략</h1>
        <span className="text-xs text-text-secondary">{shrines.length}개 등록</span>
      </div>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Shrine 이름, 위치 검색..."
        className="bg-card text-text-primary text-sm rounded-md px-3 py-1.5 border border-border placeholder:text-text-secondary focus:outline-none focus:border-accent max-w-xs"
      />

      <div className="space-y-2">
        {filtered.map((shrine) => (
          <div key={shrine.id} className="bg-card rounded-lg p-4 border border-border flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-text-primary text-sm">{shrine.name}</h3>
                <span className={`px-1.5 py-0.5 text-[10px] rounded ${typeColors[shrine.type]}`}>
                  {typeLabels[shrine.type]}
                </span>
              </div>
              <p className="text-xs text-text-secondary">{shrine.location}</p>
            </div>
            <Link
              to={`/shrines/${shrine.id}`}
              className="text-xs text-accent hover:underline"
            >
              공략 보기 →
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 3: Create divine-beast data and page**

```ts
// src/data/divine-beasts.ts
import { DivineBeast } from '../types'

export const divineBeasts: DivineBeast[] = [
  {
    id: 'vento',
    name: '바람의 신전 베리아',
    element: '바람',
    location: '헤브라 산맥',
    boss: '바람의 가논',
    walkthrough: ['사원의 입구에서 글라이더 사용', '1층: 터미널 3개 활성화', '2층: 미로 해결', '3층: 보스 전투', '미파의 능력 해금'],
  },
  {
    id: 'nabora',
    name: '번개의 신전 나보리스',
    element: '번개',
    location: '게르디 사막',
    boss: '번개의 가논',
    walkthrough: ['게르디 마을에서 의뢰 수주', '성역 진입', '회전하는 방 해결', '보스 전투', '우르보사의 능력 해금'],
  },
  {
    id: 'ruta',
    name: '물의 신전 루타',
    element: '물',
    location: '라네르 호수',
    boss: '물의 가논',
    walkthrough: ['조라 마을에서 의뢰', '얼음 생성으로 사다리 만들기', '터미널 조작', '보스 전투', '미파의 치유 해금'],
  },
  {
    id: 'rudania',
    name: '화염의 신전 루다니아',
    element: '불꽃',
    location: '데스 마운틴',
    boss: '화염의 가논',
    walkthrough: ['고론 마을에서 의뢰', '사신전 이동', '회전 제어', '보스 전투', '다르케르의 수호 해금'],
  },
]
```

```tsx
// src/pages/DivineBeasts.tsx
import { divineBeasts } from '../data/divine-beasts'
import GuideSection from '../components/GuideSection'

const elementIcons: Record<string, string> = {
  바람: '💨',
  번개: '⚡',
  물: '💧',
  불꽃: '🔥',
}

export default function DivineBeasts() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-text-primary">신수 공략</h1>
        <span className="text-xs text-text-secondary">{divineBeasts.length}개</span>
      </div>

      <div className="space-y-6">
        {divineBeasts.map((beast) => (
          <div key={beast.id} className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="p-4 border-b border-border flex items-center gap-3">
              <span className="text-2xl">{elementIcons[beast.element] || '🔷'}</span>
              <div>
                <h2 className="font-semibold text-text-primary">{beast.name}</h2>
                <p className="text-xs text-text-secondary">{beast.location} · 보스: {beast.boss}</p>
              </div>
            </div>
            <div className="p-4">
              <GuideSection
                title="공략 순서"
                steps={beast.walkthrough}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 4: Create GuideSection component and breadcrumbs hook**

```tsx
// src/components/GuideSection.tsx
interface GuideSectionProps {
  title: string
  steps: string[]
}

export default function GuideSection({ title, steps }: GuideSectionProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-text-primary mb-3">{title}</h3>
      <ol className="space-y-3">
        {steps.map((step, i) => (
          <li key={i} className="flex gap-3 text-sm">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent text-xs flex items-center justify-center font-medium">
              {i + 1}
            </span>
            <span className="text-text-secondary pt-0.5">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}
```

```ts
// src/hooks/useBreadcrumbs.ts
import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

const routeLabels: Record<string, string> = {
  '/': '홈',
  '/monsters': '몬스터 도감',
  '/weapons': '무기 도감',
  '/cooking': '요리 레시피',
  '/shrines': 'Shrine 공략',
  '/divine-beasts': '신수 공략',
  '/trials': '오브의 시련',
  '/koroks': '코로그 찾기',
  '/getting-started': '초보 가이드',
}

export function useBreadcrumbs() {
  const location = useLocation()
  return useMemo(() => {
    const parts = location.pathname.split('/').filter(Boolean)
    const crumbs = [{ label: '홈', path: '/' }]
    let path = ''
    for (const part of parts) {
      path += `/${part}`
      crumbs.push({ label: routeLabels[path] || part, path })
    }
    return crumbs
  }, [location])
}
```

- [ ] **Step 5: Create remaining pages**

```tsx
// src/pages/Trials.tsx
import { Trial } from '../types'
import GuideSection from '../components/GuideSection'

const trials: Trial[] = [
  { id: 'sword-trial-beginner', name: '검의 시련 (초급)', type: '초급', reward: '마스터 소드 강화 Lv1', walkthrough: ['방어구 없이 시작', '순서대로 적을 쓰러뜨리기', '타임 리미트 내 클리어'] },
  { id: 'sword-trial-medium', name: '검의 시련 (중급)', type: '중급', reward: '마스터 소드 강화 Lv2', walkthrough: ['초급보다 강력한 적', '자원 관리 중요', '최종 보스 집중'] },
  { id: 'sword-trial-master', name: '검의 시련 (상급)', type: '상급', reward: '마스터 소드 강화 Lv3', walkthrough: ['가장 강력한 적 배치', '자원 고갈', '완벽한 전투 스킬 필요'] },
  { id: 'star-trial-beginner', name: '별의 시련 (초급)', type: '초급', reward: '방어구 강화', walkthrough: ['별의 시련 시작', '퍼즐 해결', '보상 획득'] },
  { id: 'star-trial-master', name: '별의 시련 (상급)', type: '상급', reward: '방어구 최대 강화', walkthrough: ['최고 난이도 퍼즐', '보스 전투', '최종 보상'] },
]

export default function Trials() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-text-primary">오브의 시련</h1>
        <span className="text-xs text-text-secondary">{trials.length}개</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {trials.map((trial) => (
          <div key={trial.id} className="bg-card rounded-xl p-5 border border-border">
            <h2 className="font-semibold text-text-primary mb-1">{trial.name}</h2>
            <p className="text-xs text-accent mb-3">{trial.reward}</p>
            <GuideSection title="진행 순서" steps={trial.walkthrough} />
          </div>
        ))}
      </div>
    </div>
  )
}
```

```tsx
// src/pages/Koroks.tsx
import { useState } from 'react'
import { Korok } from '../types'
import { useSearch } from '../hooks/useSearch'

const korokSample: Korok[] = [
  { id: 'k1', region: '아kkane 고원', hint: '바위 세 개가 원을 그리고 있다', location: '고원 북쪽', puzzleType: '바위 퍼즐' },
  { id: 'k2', region: '중앙 하이랄', hint: '작은 연못 위의 꽃', location: '연못 중앙', puzzleType: '꽃 퍼즐' },
  { id: 'k3', region: '동네브 평원', hint: '표적이 3개, 활로 맞추자', location: '평원 동쪽 나무 근처', puzzleType: '표적 퍼즐' },
  { id: 'k4', region: '헤브라 산맥', hint: '눈 속에 숨어있다', location: '산맥 남쪽', puzzleType: '숨은 코로그' },
  { id: 'k5', region: '게르디 사막', hint: '모래에 파묻힌 동상', location: '사막 중앙', puzzleType: '동상 퍼즐' },
]

const allRegions = ['전체', ...new Set(korokSample.map((k) => k.region))]

export default function Koroks() {
  const [region, setRegion] = useState('전체')
  const [puzzle, setPuzzle] = useState('전체')
  const { query, setQuery, filtered } = useSearch(korokSample, ['hint', 'region', 'location'])

  const shown = filtered.filter((k) =>
    region !== '전체' ? k.region === region : true
  ).filter((k) =>
    puzzle !== '전체' ? k.puzzleType === puzzle : true
  )

  const puzzleTypes = ['전체', ...new Set(korokSample.map((k) => k.puzzleType))]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-text-primary">코로그 찾기</h1>
        <span className="text-xs text-text-secondary">{korokSample.length}개 등록</span>
      </div>

      <div className="flex gap-3 flex-wrap">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="힌트, 지역 검색..."
          className="bg-card text-text-primary text-sm rounded-md px-3 py-1.5 border border-border placeholder:text-text-secondary focus:outline-none focus:border-accent max-w-xs"
        />
        <select value={region} onChange={(e) => setRegion(e.target.value)} className="bg-card text-text-primary text-sm rounded-md px-3 py-1.5 border border-border">
          {allRegions.map((r) => <option key={r} value={r}>{r}</option>)}
        </select>
        <select value={puzzle} onChange={(e) => setPuzzle(e.target.value)} className="bg-card text-text-primary text-sm rounded-md px-3 py-1.5 border border-border">
          {puzzleTypes.map((p) => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>

      <div className="space-y-2">
        {shown.map((k) => (
          <div key={k.id} className="bg-card rounded-lg p-4 border border-border">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">🌿</span>
                  <h3 className="font-semibold text-text-primary text-sm">{k.region}</h3>
                </div>
                <p className="text-xs text-text-secondary mb-1">{k.hint}</p>
                <p className="text-xs text-accent">📍 {k.location}</p>
              </div>
              <span className="px-2 py-0.5 text-[10px] bg-accent-secondary/20 text-accent-secondary rounded">
                {k.puzzleType}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
```

```tsx
// src/pages/GettingStarted.tsx
import GuideSection from '../components/GuideSection'

const guideSteps: string[] = [
  '샤이네이 사원에서 깨어나, 슬레이트를 획득하세요',
  '첫 Shrine: 옴바-오 신전을 클리어하세요 (자석이동 학습)',
  '파라세일 글라이더를 받기 위해 올드 맨을 만나세요',
  '카카리코 마을로 가서 파야와 임파를 만나세요',
  '4대 신전 중 하나를 선택해 도전하세요',
  '중간에 Shrine를 돌며 하트/스태미나를 올리세요',
]

const combatTips: string[] = [
  '방어구 업그레이드를 우선하세요 (요정 샘)',
  '무기의 내구도를 관리하세요 — 강한 무기는 아껴두세요',
  '음식/비약을 미리 만들어 두세요',
  '헤드샷으로 적을 기절시킬 수 있습니다',
  '은신 + 기습 공격으로 데미지를 극대화하세요',
]

const explorationTips: string[] = [
  '언덕 위에서 글라이더로 이동하면 효율적입니다',
  '타워를 활성화하여 지도를 펼치세요',
  '비가 올 때는 등반이 미끄러우니 피하세요',
  '코로그 씨앗은 인벤토리 확장에 사용됩니다',
  '밤에는 몬스터가 강해지니 조심하세요',
]

export default function GettingStarted() {
  return (
    <div className="space-y-8 max-w-2xl">
      <h1 className="text-lg font-bold text-text-primary">초보 시작 가이드</h1>

      <div className="bg-card rounded-xl p-5 border border-border">
        <GuideSection title="게임 시작 순서" steps={guideSteps} />
      </div>

      <div className="bg-card rounded-xl p-5 border border-border">
        <GuideSection title="전투 팁" steps={combatTips} />
      </div>

      <div className="bg-card rounded-xl p-5 border border-border">
        <GuideSection title="탐험 팁" steps={explorationTips} />
      </div>
    </div>
  )
}
```

- [ ] **Step 6: Update App.tsx imports (already done in Task 3)**

All imports already exist in App.tsx from Task 3.

- [ ] **Step 7: Full build test**

```bash
pnpm build
```

Expected: Success with all pages and components.

- [ ] **Step 8: Quick dev server test**

```bash
pnpm dev
```

Verify all 8 routes work in the sidebar.

- [ ] **Step 9: Commit**

```bash
git add src/data/recipes.ts src/data/shrines.ts src/data/divine-beasts.ts src/data/trials.ts src/data/koroks.ts src/data/guides.ts src/pages/Cooking.tsx src/pages/Shrines.tsx src/pages/DivineBeasts.tsx src/pages/Trials.tsx src/pages/Koroks.tsx src/pages/GettingStarted.tsx src/components/GuideSection.tsx src/hooks/useBreadcrumbs.ts
git commit -m "feat: add cooking, shrines, divine-beasts, trials, koroks, and getting-started pages with all data"
```

---
