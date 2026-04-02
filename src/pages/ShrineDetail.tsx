import { useParams, Link } from 'react-router-dom'
import { shrines } from '../data/shrines'
import { ArrowLeft, MapPin, Sparkles, Gift, ListChecks, CheckCircle2, Circle } from 'lucide-react'
import { useChecklist } from '../hooks/useChecklist'

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

const typeIcons: Record<string, string> = {
  blessing: '🙏',
  combat: '⚔️',
  rune: '🔮',
  motion: '🏃',
}

const typeDescriptions: Record<string, string> = {
  blessing: '특별한 퍼즐 없이 보상을 받을 수 있는 축복의 신전입니다. 외부 퀘스트를 먼저 완료하세요.',
  combat: '전투 능력을 시험하는 신전입니다. 적과의 전투에서 승리해야 합니다.',
  rune: '시커 슬레이트의 룬 능력을 활용하는 퍼즐 신전입니다. 자석, 폭탄, 시계 등을 활용하세요.',
  motion: '물리 기반 퍼즐을 풀어야 하는 신전입니다. 물체를 이동시키거나 관성을 활용하세요.',
}

export default function ShrineDetail() {
  const { id } = useParams<{ id: string }>()
  const shrine = shrines.find((s) => s.id === id)
  const { items, toggle } = useChecklist('shrines')

  if (!shrine) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] px-1">
        <p className="text-text-secondary mb-4">신전을 찾을 수 없습니다.</p>
        <Link to="/shrines" className="text-accent text-sm hover:underline">
          ← 신전 공략으로 돌아가기
        </Link>
      </div>
    )
  }

  const found = items[shrine.id] || false
  const sameLocationShrines = shrines.filter((s) => s.location === shrine.location && s.id !== shrine.id)

  return (
    <div className="space-y-6 max-w-2xl mx-auto px-1">
      <Link to="/shrines" className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-accent transition-colors">
        <ArrowLeft className="h-3.5 w-3.5" /> 신전 공략
      </Link>

      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start gap-4">
            <span className="text-5xl">{typeIcons[shrine.type]}</span>
            <div>
              <h1 className="text-xl font-bold text-text-primary">{shrine.name}</h1>
              <span className={`inline-block mt-1 px-2 py-0.5 text-xs rounded ${typeColors[shrine.type]}`}>
                {typeLabels[shrine.type]} 신전
              </span>
            </div>
          </div>
          <button
            onClick={() => toggle(shrine.id)}
            className="flex-shrink-0 p-2 rounded-full hover:bg-background transition-colors"
            title={found ? '완료 취소' : '완료 표시'}
          >
            {found ? (
              <CheckCircle2 className="h-7 w-7 text-accent" />
            ) : (
              <Circle className="h-7 w-7 text-text-secondary" />
            )}
          </button>
        </div>

        <p className="text-sm text-text-secondary mb-6">{typeDescriptions[shrine.type]}</p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-background rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <MapPin className="h-4 w-4 text-accent" />
              <p className="text-xs text-text-secondary">위치</p>
            </div>
            <p className="text-sm font-medium text-text-primary">{shrine.location}</p>
          </div>
          <div className="bg-background rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <Gift className="h-4 w-4 text-yellow-400" />
              <p className="text-xs text-text-secondary">보상</p>
            </div>
            <p className="text-sm font-medium text-text-primary">{shrine.reward}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
              <ListChecks className="h-4 w-4 text-accent-secondary" /> 공략 순서
            </h3>
            <ol className="space-y-3">
              {shrine.walkthrough.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent text-xs flex items-center justify-center font-semibold">
                    {i + 1}
                  </span>
                  <span className="text-sm text-text-primary pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {shrine.type === 'blessing' && (
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <p className="text-xs text-green-400">
                💡 <strong>축복의 신전:</strong> 이 신전 내부에는 퍼즐이나 전투가 없습니다. 
                신전 입구에 도달하기 위한 외부 퀘스트가 있을 수 있으니 주변을 잘 살펴보세요.
              </p>
            </div>
          )}

          {shrine.type === 'combat' && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <p className="text-xs text-red-400">
                ⚔️ <strong>전투 신전:</strong> 충분한 무기와 방어구를 준비하세요. 
                수호자 무기를 가져가면 효과적일 수 있습니다.
              </p>
            </div>
          )}

          {shrine.type === 'rune' && (
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
              <p className="text-xs text-purple-400">
                🔮 <strong>룬 신전:</strong> 시커 슬레이트의 능력(자석, 크라이오시스, 스태시스, 폭탄)을 
                적극 활용하세요.
              </p>
            </div>
          )}

          {shrine.type === 'motion' && (
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <p className="text-xs text-blue-400">
                🏃 <strong>운동 신전:</strong> 물리 법칙을 이용한 퍼즐입니다. 
                구슬 굴리기, 구조물 배치 등을 시도해보세요.
              </p>
            </div>
          )}
        </div>
      </div>

      {sameLocationShrines.length > 0 && (
        <div className="bg-card rounded-xl p-5 border border-border">
          <h3 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-accent" /> 같은 지역의 다른 신전
          </h3>
          <div className="flex flex-wrap gap-2">
            {sameLocationShrines.map((s) => (
              <Link
                key={s.id}
                to={`/shrines/${s.id}`}
                className="px-3 py-1.5 text-xs bg-accent/10 text-accent rounded-full hover:bg-accent/20 transition-colors"
              >
                {typeIcons[s.type]} {s.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
