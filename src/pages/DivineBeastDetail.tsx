import { useParams, Link } from 'react-router-dom'
import { divineBeasts } from '../data/divine-beasts'
import { ArrowLeft, MapPin, Skull, ListChecks, ShieldCheck } from 'lucide-react'

const elementIcons: Record<string, string> = {
  바람: '💨',
  번개: '⚡',
  물: '💧',
  불꽃: '🔥',
}

const elementColors: Record<string, string> = {
  바람: 'bg-sky-500/20 text-sky-400',
  번개: 'bg-yellow-500/20 text-yellow-400',
  물: 'bg-blue-500/20 text-blue-400',
  불꽃: 'bg-orange-500/20 text-orange-400',
}

const elementDescriptions: Record<string, string> = {
  바람: '헤브라 산맥에 위치한 바람의 신수입니다. 미파의 능력(미파의 수호)을 해금할 수 있습니다.',
  번개: '게르디 사막에 위치한 번개의 신수입니다. 우르보사의 능력(우르보사의 분노)을 해금할 수 있습니다.',
  물: '라네르 호수에 위치한 물의 신수입니다. 시드의 능력(시드의 물기둥)을 해금할 수 있습니다.',
  불꽃: '데스 마운틴에 위치한 불의 신수입니다. 다르케르의 능력(다르케르의 수호)을 해금할 수 있습니다.',
}

const elementTips: Record<string, string[]> = {
  바람: [
    '글라이더를 적극 활용하세요',
    '높은 곳에서 신수를 조망하면 구조를 이해하기 쉽습니다',
    '회전 팬을 조작하여 이동 경로를 만드세요',
  ],
  번개: [
    '전기 저항 방어구(고무 세트)를 착용하세요',
    '금속 무기는 피하세요',
    '우르보사의 분노로 적에게 큰 데미지를 줄 수 있습니다',
  ],
  물: [
    '조라 마을의 의뢰를 먼저 완료하세요',
    '얼음 블록 생성으로 이동 경로를 만드세요',
    '시드의 물기둥은 전투에서도 유용합니다',
  ],
  불꽃: [
    '화염 저항 방어구(화염 세트)를 착용하세요',
    '화염 저항 음식/비약을 준비하세요',
    '다르케르의 수호는 가디언 레이저도 막을 수 있습니다',
  ],
}

export default function DivineBeastDetail() {
  const { id } = useParams<{ id: string }>()
  const beast = divineBeasts.find((b) => b.id === id)

  if (!beast) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] px-1">
        <p className="text-text-secondary mb-4">신수를 찾을 수 없습니다.</p>
        <Link to="/divine-beasts" className="text-accent text-sm hover:underline">
          ← 신수 공략으로 돌아가기
        </Link>
      </div>
    )
  }

  const tips = elementTips[beast.element] || []

  return (
    <div className="space-y-6 max-w-2xl mx-auto px-1">
      <Link to="/divine-beasts" className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-accent transition-colors">
        <ArrowLeft className="h-3.5 w-3.5" /> 신수 공략
      </Link>

      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex items-start gap-4 mb-6">
          <span className="text-5xl">{elementIcons[beast.element] || '🔷'}</span>
          <div>
            <h1 className="text-xl font-bold text-text-primary">{beast.name}</h1>
            <span className={`inline-block mt-1 px-2 py-0.5 text-xs rounded ${elementColors[beast.element] || ''}`}>
              {beast.element} 속성
            </span>
          </div>
        </div>

        <p className="text-sm text-text-secondary mb-6">{elementDescriptions[beast.element]}</p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-background rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <MapPin className="h-4 w-4 text-accent" />
              <p className="text-xs text-text-secondary">위치</p>
            </div>
            <p className="text-sm font-medium text-text-primary">{beast.location}</p>
          </div>
          <div className="bg-background rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <Skull className="h-4 w-4 text-red-400" />
              <p className="text-xs text-text-secondary">보스</p>
            </div>
            <p className="text-sm font-medium text-text-primary">{beast.boss}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
              <ListChecks className="h-4 w-4 text-accent-secondary" /> 공략 순서
            </h3>
            <ol className="space-y-3">
              {beast.walkthrough.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent text-xs flex items-center justify-center font-semibold">
                    {i + 1}
                  </span>
                  <span className="text-sm text-text-primary pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {tips.length > 0 && (
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
              <h4 className="text-xs font-semibold text-accent mb-2 flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5" /> 공략 팁
              </h4>
              <ul className="space-y-1.5">
                {tips.map((tip, i) => (
                  <li key={i} className="text-xs text-text-secondary flex items-start gap-2">
                    <span className="text-accent">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="bg-card rounded-xl p-5 border border-border">
        <h3 className="text-sm font-semibold text-text-primary mb-3">다른 신수 보기</h3>
        <div className="flex flex-wrap gap-2">
          {divineBeasts.filter((b) => b.id !== beast.id).map((b) => (
            <Link
              key={b.id}
              to={`/divine-beasts/${b.id}`}
              className="px-3 py-1.5 text-xs bg-accent/10 text-accent rounded-full hover:bg-accent/20 transition-colors"
            >
              {elementIcons[b.element]} {b.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
