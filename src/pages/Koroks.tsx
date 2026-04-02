import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useChecklist } from '../hooks/useChecklist'
import { koroks as korokData } from '../data/koroks'
import { useSearch } from '../hooks/useSearch'

const allRegions = ['전체', ...new Set(korokData.map((k) => k.region))]

export default function Koroks() {
  const [region, setRegion] = useState('전체')
  const [puzzle, setPuzzle] = useState('전체')
  const { query, setQuery, filtered } = useSearch(korokData, ['hint', 'region', 'location', 'puzzleType'])
  const { toggle, totalCount, items } = useChecklist('koroks')

  const puzzleTypes = ['전체', ...new Set(korokData.map((k) => k.puzzleType))]

  const byRegion = region === '전체' ? filtered : filtered.filter((k) => k.region === region)
  const byPuzzle = puzzle === '전체' ? byRegion : byRegion.filter((k) => k.puzzleType === puzzle)

  const progressWidth = korokData.length > 0 ? (totalCount / korokData.length) * 100 : 0

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-text-primary">코로그 찾기</h1>
        <span className="text-xs text-text-secondary">{korokData.length}개 등록</span>
      </div>

      <ProgressBar
        found={totalCount}
        total={korokData.length}
        widthPercent={progressWidth}
      />

      <div className="flex gap-3 flex-wrap">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="힌트, 지역 검색..."
          className="bg-card text-text-primary text-sm rounded-md px-3 py-1.5 border border-border placeholder:text-text-secondary focus:outline-none focus:border-accent flex-1 max-w-xs"
        />
        <select value={region} onChange={(e) => setRegion(e.target.value)} className="bg-card text-text-primary text-sm rounded-md px-3 py-1.5 border border-border">
          {allRegions.map(r => <option key={r} value={r}>{r}</option>)}
        </select>
        <select value={puzzle} onChange={(e) => setPuzzle(e.target.value)} className="bg-card text-text-primary text-sm rounded-md px-3 py-1.5 border border-border">
          {puzzleTypes.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>

      <div className="space-y-2">
        {byPuzzle.map((k) => (
          <div
            key={k.id}
            className={`bg-card rounded-lg p-4 border cursor-pointer transition-colors ${
              items[k.id]
                ? 'border-accent'
                : 'border-border hover:border-accent/50'
            }`}
          >
            <div className="flex items-start justify-between">
              <div onClick={() => toggle(k.id)} className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">🌿</span>
                  <h3 className={`font-semibold text-sm ${
                    items[k.id] ? 'text-accent' : 'text-text-primary'
                  }`}>{k.region}</h3>
                </div>
                <p className="text-xs text-text-secondary mb-1">{k.hint}</p>
                <p className="text-xs text-accent">📍 {k.location}</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="px-2 py-0.5 text-[10px] bg-accent-secondary/20 text-accent-secondary rounded">
                  {k.puzzleType}
                </span>
                <Link
                  to={`/koroks/${k.id}`}
                  className="text-[10px] text-accent hover:underline"
                >
                  상세
                </Link>
              </div>
            </div>
          </div>
        ))}
        {byPuzzle.length === 0 && <p className="text-gray-400 text-sm">검색 결과가 없습니다.</p>}
      </div>
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
