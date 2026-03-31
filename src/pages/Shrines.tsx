import { Link } from 'react-router-dom'
import { shrines } from '../data/shrines'
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
