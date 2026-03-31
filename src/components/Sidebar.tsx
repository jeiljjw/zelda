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
