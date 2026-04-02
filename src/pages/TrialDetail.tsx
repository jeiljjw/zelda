import { useParams, Link } from 'react-router-dom'
import { trials } from '../data/trials'
import { ArrowLeft, Gift, ListChecks, AlertTriangle } from 'lucide-react'

const difficultyColors: Record<string, string> = {
  초급: 'bg-green-500/20 text-green-400',
  중급: 'bg-yellow-500/20 text-yellow-400',
  상급: 'bg-red-500/20 text-red-400',
}

const difficultyDescriptions: Record<string, string> = {
  초급: '기본적인 전투 능력만 있으면 클리어할 수 있습니다. 첫 도전을 권장합니다.',
  중급: '적절한 전략과 자원 관리가 필요합니다. 준비된 무기를 가져가세요.',
  상급: '최고 난이도의 시련입니다. 완벽한 전투 스킬과 충분한 준비가 필요합니다.',
}

const difficultyTips: Record<string, string[]> = {
  초급: [
    '기본적인 근접 전투에 익숙해지세요',
    '방어구 없이 시작하므로 회피에 능숙해야 합니다',
    '떨어뜨린 무기를 빠르게 주워 사용하세요',
  ],
  중급: [
    '초급보다 강력한 적들이 등장합니다',
    '자원 관리가 중요합니다 - 무기를 아껴두세요',
    '폭탄을 활용한 전략을 시도해보세요',
  ],
  상급: [
    '가장 강력한 적들이 배치됩니다',
    '완벽한 회피와 패리가 필요합니다',
    '무기 내구도를 최적화하세요',
    '여러 번 시도할 각오를 하세요',
  ],
}

export default function TrialDetail() {
  const { id } = useParams<{ id: string }>()
  const trial = trials.find((t) => t.id === id)

  if (!trial) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] px-1">
        <p className="text-text-secondary mb-4">시련을 찾을 수 없습니다.</p>
        <Link to="/trials" className="text-accent text-sm hover:underline">
          ← 시련 목록으로 돌아가기
        </Link>
      </div>
    )
  }

  const tips = difficultyTips[trial.type] || []
  const isHighDifficulty = trial.type === '상급'

  return (
    <div className="space-y-6 max-w-2xl mx-auto px-1">
      <Link to="/trials" className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-accent transition-colors">
        <ArrowLeft className="h-3.5 w-3.5" /> 오브의 시련
      </Link>

      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex items-start gap-4 mb-6">
          <span className="text-5xl">⚔️</span>
          <div>
            <h1 className="text-xl font-bold text-text-primary">{trial.name}</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className={`px-2 py-0.5 text-xs rounded ${difficultyColors[trial.type]}`}>
                {trial.type}
              </span>
              {isHighDifficulty && (
                <span className="px-2 py-0.5 text-xs rounded bg-red-500/20 text-red-400">
                  최고 난이도
                </span>
              )}
            </div>
          </div>
        </div>

        <p className="text-sm text-text-secondary mb-6">{difficultyDescriptions[trial.type]}</p>

        <div className="bg-background rounded-lg p-4 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Gift className="h-4 w-4 text-yellow-400" />
            <p className="text-sm font-semibold text-text-primary">보상</p>
          </div>
          <p className="text-sm text-accent">{trial.reward}</p>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
              <ListChecks className="h-4 w-4 text-accent-secondary" /> 진행 순서
            </h3>
            <ol className="space-y-3">
              {trial.walkthrough.map((step, i) => (
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
            <div className={`${isHighDifficulty ? 'bg-red-500/10 border-red-500/20' : 'bg-accent/10 border-accent/20'} border rounded-lg p-4`}>
              <h4 className={`text-xs font-semibold ${isHighDifficulty ? 'text-red-400' : 'text-accent'} mb-2 flex items-center gap-1`}>
                <AlertTriangle className="h-3.5 w-3.5" /> 공략 팁
              </h4>
              <ul className="space-y-1.5">
                {tips.map((tip, i) => (
                  <li key={i} className="text-xs text-text-secondary flex items-start gap-2">
                    <span className={isHighDifficulty ? 'text-red-400' : 'text-accent'}>•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {isHighDifficulty && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <p className="text-xs text-red-400">
                ⚠️ <strong>주의:</strong> 상급 시련은 매우 어렵습니다. 
                여러 번 실패할 수 있으니 인내심을 가지세요. 
                마스터 소드 강화 Lv3을 얻을 수 있는 가치가 있습니다.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="bg-card rounded-xl p-5 border border-border">
        <h3 className="text-sm font-semibold text-text-primary mb-3">다른 시련 보기</h3>
        <div className="flex flex-wrap gap-2">
          {trials.filter((t) => t.id !== trial.id).map((t) => (
            <Link
              key={t.id}
              to={`/trials/${t.id}`}
              className="px-3 py-1.5 text-xs bg-accent/10 text-accent rounded-full hover:bg-accent/20 transition-colors"
            >
              {t.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
