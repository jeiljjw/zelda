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
          className="bg-card text-text-primary text-sm rounded-md px-3 py-1.5 border border-border placeholder:text-text-secondary focus:outline-none focus:border-accent flex-1 max-w-xs"
        />
        <select value={region} onChange={(e) => setRegion(e.target.value)} className="bg-card text-text-primary text-sm rounded-md px-3 py-1.5 border border-border">
          {allRegions.map((r) => <option key={r} value={r}>{r}</option>)}
        </select>
        <select value={puzzle} onChange={(e) => setPuzzle(e.target.value)} className="bg-card text-text-primary text-sm rounded-md px-3 py-1.5 border border-border">
          {puzzleTypes.map((p) => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>

      <div className="space-y-2">
        {filtered.map((k) => (
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
