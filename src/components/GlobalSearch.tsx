import { useState, useEffect, useRef, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import { monsters } from '../data/monsters'
import { weapons } from '../data/weapons'
import { armor } from '../data/armor'
import { recipes } from '../data/recipes'
import { shrines } from '../data/shrines'
import { koroks } from '../data/koroks'
import { divineBeasts } from '../data/divine-beasts'
import { trials } from '../data/trials'

interface SearchResult {
  id: string
  name: string
  type: 'monster' | 'weapon' | 'armor' | 'recipe' | 'shrine' | 'korok' | 'divine-beast' | 'trial'
  path: string
  icon: string
  subtitle?: string
}

const typeIcons: Record<string, string> = {
  monster: '👹',
  weapon: '⚔️',
  armor: '🛡️',
  recipe: '🍳',
  shrine: '🏛️',
  korok: '🌿',
  'divine-beast': '🐘',
  trial: '⚔️',
}

const typeLabels: Record<string, string> = {
  monster: '몬스터',
  weapon: '무기',
  armor: '방어구',
  recipe: '요리',
  shrine: '신전',
  korok: '코로그',
  'divine-beast': '신수',
  trial: '시련',
}

interface GlobalSearchProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function GlobalSearch({ open, onOpenChange }: GlobalSearchProps) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  // Ctrl+K 단축키
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        onOpenChange(true)
      }
      if (e.key === 'Escape') {
        onOpenChange(false)
        setQuery('')
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onOpenChange])

  // 모달 열릴 때 포커스
  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open])

  // 검색 데이터 통합
  const allItems = useMemo<SearchResult[]>(() => {
    const items: SearchResult[] = []

    monsters.forEach((m) =>
      items.push({ id: m.id, name: m.name, type: 'monster', path: `/monsters/${m.id}`, icon: typeIcons.monster, subtitle: m.locations[0] })
    )
    weapons.forEach((w) =>
      items.push({ id: w.id, name: w.name, type: 'weapon', path: `/weapons/${w.id}`, icon: typeIcons.weapon, subtitle: `공격력 ${w.attack}` })
    )
    armor.forEach((a) =>
      items.push({ id: a.id, name: a.name, type: 'armor', path: `/armor/${a.id}`, icon: typeIcons.armor, subtitle: `방어력 ${a.defense}` })
    )
    recipes.forEach((r) =>
      items.push({ id: r.id, name: r.name, type: 'recipe', path: '/cooking', icon: typeIcons.recipe, subtitle: r.effect })
    )
    shrines.forEach((s) =>
      items.push({ id: s.id, name: s.name, type: 'shrine', path: `/shrines/${s.id}`, icon: typeIcons.shrine, subtitle: s.location })
    )
    koroks.forEach((k) =>
      items.push({ id: k.id, name: `코로그 #${k.id.slice(1)}`, type: 'korok', path: `/koroks/${k.id}`, icon: typeIcons.korok, subtitle: k.region })
    )
    divineBeasts.forEach((d) =>
      items.push({ id: d.id, name: d.name, type: 'divine-beast', path: `/divine-beasts/${d.id}`, icon: typeIcons['divine-beast'], subtitle: d.location })
    )
    trials.forEach((t) =>
      items.push({ id: t.id, name: t.name, type: 'trial', path: `/trials/${t.id}`, icon: typeIcons.trial, subtitle: t.type })
    )

    return items
  }, [])

  // 검색 필터링
  const results = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase().trim()
    return allItems
      .filter((item) => item.name.toLowerCase().includes(q) || item.subtitle?.toLowerCase().includes(q))
      .slice(0, 20) // 최대 20개
  }, [query, allItems])

  const handleSelect = (item: SearchResult) => {
    navigate(item.path)
    onOpenChange(false)
    setQuery('')
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]">
      {/* 배경 오버레이 */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => { onOpenChange(false); setQuery('') }}
      />

      {/* 검색 모달 */}
      <div className="relative w-full max-w-lg mx-4 bg-card rounded-xl border border-border shadow-2xl overflow-hidden">
        {/* 검색 입력 */}
        <div className="flex items-center gap-3 p-4 border-b border-border">
          <Search className="h-5 w-5 text-text-secondary flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="몬스터, 무기, 방어구, 신전 검색..."
            className="flex-1 bg-transparent text-text-primary placeholder-text-secondary outline-none text-sm"
          />
          <button
            onClick={() => { onOpenChange(false); setQuery('') }}
            className="p-1 rounded hover:bg-background transition-colors"
          >
            <X className="h-4 w-4 text-text-secondary" />
          </button>
        </div>

        {/* 검색 결과 */}
        <div className="max-h-[300px] overflow-y-auto">
          {query.trim() === '' ? (
            <div className="p-6 text-center text-text-secondary text-sm">
              <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p>검색어를 입력하세요</p>
              <p className="text-xs mt-1 opacity-70">Ctrl+K로 언제든지 열기</p>
            </div>
          ) : results.length === 0 ? (
            <div className="p-6 text-center text-text-secondary text-sm">
              <p>"{query}" 검색 결과가 없습니다</p>
            </div>
          ) : (
            <div className="py-2">
              {results.map((item) => (
                <button
                  key={`${item.type}-${item.id}`}
                  onClick={() => handleSelect(item)}
                  className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-accent/10 transition-colors text-left"
                >
                  <span className="text-lg flex-shrink-0">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-text-primary truncate">{item.name}</p>
                    {item.subtitle && (
                      <p className="text-xs text-text-secondary truncate">{item.subtitle}</p>
                    )}
                  </div>
                  <span className="text-[10px] text-text-secondary bg-background px-1.5 py-0.5 rounded">
                    {typeLabels[item.type]}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 푸터 */}
        {results.length > 0 && (
          <div className="px-4 py-2 border-t border-border flex items-center justify-between text-[10px] text-text-secondary">
            <span>{results.length}개 결과</span>
            <span>ESC로 닫기</span>
          </div>
        )}
      </div>
    </div>
  )
}
