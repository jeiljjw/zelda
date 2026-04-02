import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { weapons } from '../data/weapons'
import { useSearch } from '../hooks/useSearch'
import { useChecklist } from '../hooks/useChecklist'
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
  const { totalCount } = useChecklist('weapons')
  const navigate = useNavigate()

  const types = ['all', ...Object.keys(typeLabels)]
  const shown = typeFilter === 'all' ? filtered : filtered.filter((w) => w.type === typeFilter)

  const progressWidth = weapons.length > 0 ? (totalCount / weapons.length) * 100 : 0

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-text-primary">무기 도감</h1>
        <span className="text-xs text-text-secondary">{weapons.length}개 등록</span>
      </div>

      <ProgressBar
        found={totalCount}
        total={weapons.length}
        widthPercent={progressWidth}
      />

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
          <div key={weapon.id} onClick={() => navigate(`/weapons/${weapon.id}`)} className="cursor-pointer group">
            <ItemCard
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
              image={weapon.image}
            />
          </div>
        ))}
      </div>

      <p className="text-xs text-text-secondary">클릭하면 상세 정보를 볼 수 있습니다.</p>
    </div>
  )
}

function ProgressBar({ found, total, widthPercent }: { found: number; total: number; widthPercent: number }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-3 bg-card border border-border rounded-full overflow-hidden">
        <div
          className="h-full bg-accent rounded-full transition-all duration-300"
          style={{ width: `${widthPercent}%` }}
        />
      </div>
      <span className="text-xs text-text-secondary whitespace-nowrap">
        {found}/{total} 수집
      </span>
    </div>
  )
}
