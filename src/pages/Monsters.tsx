import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { monsters } from '../data/monsters'
import { Monster } from '../types'
import { useSearch } from '../hooks/useSearch'
import { useChecklist } from '../hooks/useChecklist'
import DataTable, { Column } from '../components/DataTable'

const columns: Column<Monster>[] = [
  { key: 'image' as keyof Monster, label: '', render: (v: unknown) => <img src={v as string} alt="" className="w-10 h-10 object-contain" /> },
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
  const { totalCount } = useChecklist('monsters')
  const navigate = useNavigate()

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

  const progressWidth = monsters.length > 0 ? (totalCount / monsters.length) * 100 : 0

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-text-primary">몬스터 도감</h1>
        <span className="text-xs text-text-secondary">{monsters.length}개 등록</span>
      </div>

      <ProgressBar
        found={totalCount}
        total={monsters.length}
        widthPercent={progressWidth}
      />

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

      <DataTable<Monster> columns={columns} data={sorted} onRowClick={(m) => navigate(`/monsters/${m.id}`)} />
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
        {found}/{total} 발견
      </span>
    </div>
  )
}
