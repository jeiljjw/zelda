import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSearch } from '../hooks/useSearch'
import { useChecklist } from '../hooks/useChecklist'
import { armor as armorData } from '../data/armor'

const slotLabel: Record<string, string> = { head: '머리', body: '상체', legs: '하체' }
const slotIcon: Record<string, string> = { head: '🪖', body: '👕', legs: '👖' }

export default function Armor() {
  const [slotFilter, setSlotFilter] = useState('all')
  const [setFilter, setSetFilter] = useState('all')
  const { query, setQuery, filtered } = useSearch(armorData, ['name', 'effect', 'set', 'locations'])
  const { totalCount } = useChecklist('armor')
  const navigate = useNavigate()

  const bySlot = slotFilter === 'all' ? filtered : filtered.filter((a) => a.slot === slotFilter)
  const bySet = setFilter === 'all' ? bySlot : bySlot.filter((a) => a.set === setFilter)

  const progressWidth = armorData.length > 0 ? (totalCount / armorData.length) * 100 : 0

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-text-primary">방어구 도감</h1>
        <span className="text-xs text-text-secondary">{armorData.length}개 등록</span>
      </div>

      <ProgressBar
        found={totalCount}
        total={armorData.length}
        widthPercent={progressWidth}
      />

      <div className="flex gap-3 flex-wrap">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="이름, 효과, 세트 검색..."
          className="bg-card text-text-primary text-sm rounded-md px-3 py-1.5 border border-border placeholder:text-text-secondary focus:outline-none focus:border-accent flex-1 max-w-xs"
        />
        <select value={slotFilter} onChange={(e) => setSlotFilter(e.target.value)} className="bg-card text-text-primary text-sm rounded-md px-3 py-1.5 border border-border">
          <option value="all">전체 부위</option>
          <option value="head">머리</option>
          <option value="body">상체</option>
          <option value="legs">하체</option>
        </select>
        <select value={setFilter} onChange={(e) => setSetFilter(e.target.value)} className="bg-card text-text-primary text-sm rounded-md px-3 py-1.5 border border-border">
          <option value="all">전체 세트</option>
          {[...new Set(armorData.map((a) => a.set))].filter(s => s !== 'all').map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bySet.map((a) => (
          <div
            key={a.id}
            onClick={() => navigate(`/armor/${a.id}`)}
            className="bg-card rounded-lg p-4 border border-border cursor-pointer hover:border-accent transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              {a.image ? (
                <img src={a.image} alt={a.name} className="w-10 h-10 object-contain" />
              ) : (
                <span className="text-xl">{slotIcon[a.slot]}</span>
              )}
              <div>
                <h3 className="font-semibold text-text-primary text-sm">{a.name}</h3>
                <p className="text-xs text-text-secondary">{a.set} 세트</p>
              </div>
            </div>
            <div className="space-y-1 text-xs">
              <p className="text-text-secondary">📍 <span className="text-text-primary">{slotLabel[a.slot]}</span></p>
              <p className="text-text-secondary">🛡️ 방어력: <span className="text-accent">{a.defense}</span></p>
              <p className="text-text-secondary">✨ 효과: <span className={a.effect === '없음' ? 'text-text-secondary' : 'text-accent-secondary'}>{a.effect}</span></p>
            </div>
          </div>
        ))}
        {bySet.length === 0 && <p className="text-gray-400 col-span-full text-sm">검색 결과가 없습니다.</p>}
      </div>

      <p className="text-xs text-text-secondary">클릭하면 상세 정보와 세트 구성을 볼 수 있습니다.</p>
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
