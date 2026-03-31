import { useState } from 'react'
import { weapons } from '../data/weapons'
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
