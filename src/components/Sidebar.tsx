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
  Shield,
  X,
  Menu,
  Map,
} from 'lucide-react'

const categories = [
  { id: 'dashboard', label: '대시보드', path: '/', icon: LayoutDashboard },
  { id: 'map', label: '하이랄 맵', path: '/map', icon: Map },
  { id: 'monsters', label: '몬스터 도감', path: '/monsters', icon: Skull },
  { id: 'weapons', label: '무기 도감', path: '/weapons', icon: Sword },
  { id: 'armor', label: '방어구 도감', path: '/armor', icon: Shield },
  { id: 'cooking', label: '요리 레시피', path: '/cooking', icon: ChefHat },
  { id: 'shrines', label: '신전 공략', path: '/shrines', icon: Sparkles },
  { id: 'divine-beasts', label: '신수 공략', path: '/divine-beasts', icon: ShieldCheck },
  { id: 'trials', label: '오브의 시련', path: '/trials', icon: Sparkles },
  { id: 'koroks', label: '코로그 찾기', path: '/koroks', icon: MapPin },
  { id: 'getting-started', label: '초보 가이드', path: '/getting-started', icon: BookOpen },
]

interface SidebarProps {
  mobileOpen: boolean
  onToggle: () => void
  onLink: () => void
  onSearch: () => void
}

function SidebarContent({ onClose, onSearch }: { onClose?: () => void; onSearch?: () => void }) {
  return (
    <>
      <div className="p-4 border-b border-border">
        <h1 className="text-lg font-bold text-text-primary tracking-wide">
          🗡️ 하이랄 대도감
        </h1>
        <p className="text-xs text-text-secondary mt-1">Breath of the Wild</p>
      </div>

      <div className="px-3 py-2">
        <button
          onClick={onSearch}
          className="w-full flex items-center gap-2 bg-card text-text-secondary text-sm rounded-md px-3 py-1.5 border border-border hover:border-accent transition-colors text-left"
        >
          <Search className="h-3.5 w-3.5" />
          <span>검색...</span>
          <kbd className="ml-auto text-[10px] bg-background px-1.5 py-0.5 rounded">⌘K</kbd>
        </button>
      </div>

      <nav className="flex-1 px-3 py-2 space-y-0.5 overflow-y-auto">
        {categories.map((cat) => (
          <NavLink
            key={cat.id}
            to={cat.path}
            onClick={onClose}
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
    </>
  )
}

export default function Sidebar({ mobileOpen, onToggle, onLink, onSearch }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-screen w-60 bg-sidebar border-r border-border flex flex-col z-50
        transition-transform duration-300
        lg:translate-x-0
        ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Mobile close button */}
        <button
          onClick={onToggle}
          className="lg:hidden absolute top-3 right-3 p-1 text-text-secondary hover:text-text-primary"
        >
          <X className="h-5 w-5" />
        </button>

        <SidebarContent onClose={onLink} onSearch={onSearch} />
      </aside>

      {/* Mobile hamburger */}
      <button
        onClick={onToggle}
        className="lg:hidden fixed top-2 left-2 z-30 p-2 rounded-md bg-sidebar text-text-primary border border-border hover:border-accent transition-colors"
      >
        <Menu className="h-5 w-5" />
      </button>
    </>
  )
}
