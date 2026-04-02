import { useParams, Link } from 'react-router-dom'
import { koroks } from '../data/koroks'
import { ArrowLeft, MapPin, Lightbulb, CheckCircle2, Circle } from 'lucide-react'
import { useChecklist } from '../hooks/useChecklist'

const puzzleTypeDescriptions: Record<string, string> = {
  '돌 옮기기': '특정 위치에 있는 돌을 들어서 옮기거나, 돌 아래에 숨어있는 코로그를 찾으세요.',
  '꽃 퍼즐': '꽃이 있는 곳으로 이동하세요. 물 위의 수련잎이나 바위 위의 꽃을 따라가면 됩니다.',
  '풍선': '공중에 떠 있는 풍선을 모두 터뜨리세요. 활이나 원거리 무기를 사용하세요.',
  '과녁': '표적을 맞추세요. 활로 정확하게 사격해야 합니다.',
  '나무 위': '나무 위에 올라가거나 매달려 있는 코로그를 찾으세요.',
  '숨은 코로그': '주변 환경에서 특이한 점을 찾아 숨어있는 코로그를 발견하세요.',
  '땅 파기': '땅에 동그라미가 그려진 곳에서 파기를 시도하세요.',
  '동상 퍼즐': '동상 주위에 돌을 올바른 위치에 배치하세요.',
  '물고기': '물속에서 물고기떼가 있는 곳을 찾아가세요.',
  '서클 퍼즐': '땅에 그려진 원 안에 서서 조사하세요.',
  '바위 퍼즐': '특정 모양으로 바위를 배열하거나 세우세요.',
  '비행': '높은 곳에서 글라이더로 특정 위치까지 날아가세요.',
  '눈 파기': '눈 속에 파묻힌 코로그를 파내세요.',
  '얼음 깨기': '얼음 블록을 깨면 코로그가 나옵니다.',
  '얼음 퍼즐': '얼어붙은 물 위의 퍼즐을 해결하세요.',
  '전기 퍼즐': '전기를 연결하거나 차단하여 퍼즐을 해결하세요.',
  '나무 자르기': '스태시스로 나무를 쳐서 코로그를 얻으세요.',
  '불 타는 나무': '불타는 나무 주변에서 코로그를 찾으세요.',
  '바구니 옮기기': '바구니를 들어 올리면 코로그가 숨어있습니다.',
  '땅 속': '땅에 숨겨진 코로그를 파내세요.',
}

const puzzleTypeIcons: Record<string, string> = {
  '돌 옮기기': '🪨',
  '꽃 퍼즐': '🌸',
  '풍선': '🎈',
  '과녁': '🎯',
  '나무 위': '🌲',
  '숨은 코로그': '🔍',
  '땅 파기': '⛏️',
  '동상 퍼즐': '🗿',
  '물고기': '🐟',
  '서클 퍼즐': '⭕',
  '바위 퍼즐': '🏗️',
  '비행': '🪂',
  '눈 파기': '❄️',
  '얼음 깨기': '🧊',
  '얼음 퍼즐': '🌨️',
  '전기 퍼즐': '⚡',
  '나무 자르기': '🪵',
  '불 타는 나무': '🔥',
  '바구니 옮기기': '🧺',
  '땅 속': '🕳️',
}

export default function KorokDetail() {
  const { id } = useParams<{ id: string }>()
  const korok = koroks.find((k) => k.id === id)
  const { items, toggle } = useChecklist('koroks')

  if (!korok) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] px-1">
        <p className="text-text-secondary mb-4">코로그를 찾을 수 없습니다.</p>
        <Link to="/koroks" className="text-accent text-sm hover:underline">
          ← 코로그 목록으로 돌아가기
        </Link>
      </div>
    )
  }

  const found = items[korok.id] || false
  const sameRegionKoroks = koroks.filter((k) => k.region === korok.region && k.id !== korok.id)
  const samePuzzleKoroks = koroks.filter((k) => k.puzzleType === korok.puzzleType && k.id !== korok.id)
  const puzzleIcon = puzzleTypeIcons[korok.puzzleType] || '🌿'

  return (
    <div className="space-y-6 max-w-2xl mx-auto px-1">
      <Link to="/koroks" className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-accent transition-colors">
        <ArrowLeft className="h-3.5 w-3.5" /> 코로그 찾기
      </Link>

      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start gap-4">
            <span className="text-5xl">🌿</span>
            <div>
              <h1 className="text-xl font-bold text-text-primary">코로그 #{korok.id.slice(1)}</h1>
              <span className="inline-block mt-1 px-2 py-0.5 text-xs rounded bg-accent-secondary/20 text-accent-secondary">
                {puzzleIcon} {korok.puzzleType}
              </span>
            </div>
          </div>
          <button
            onClick={() => toggle(korok.id)}
            className="flex-shrink-0 p-2 rounded-full hover:bg-background transition-colors"
            title={found ? '발견 취소' : '발견 표시'}
          >
            {found ? (
              <CheckCircle2 className="h-7 w-7 text-accent" />
            ) : (
              <Circle className="h-7 w-7 text-text-secondary" />
            )}
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-background rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <MapPin className="h-4 w-4 text-accent" />
              <p className="text-xs text-text-secondary">지역</p>
            </div>
            <p className="text-sm font-medium text-text-primary">{korok.region}</p>
          </div>
          <div className="bg-background rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <MapPin className="h-4 w-4 text-accent-secondary" />
              <p className="text-xs text-text-secondary">위치</p>
            </div>
            <p className="text-sm font-medium text-text-primary">{korok.location}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="h-4 w-4 text-yellow-400" />
              <h3 className="text-sm font-semibold text-text-primary">힌트</h3>
            </div>
            <p className="text-sm text-text-secondary">{korok.hint}</p>
          </div>

          <div className="bg-background rounded-lg p-4">
            <h4 className="text-xs font-semibold text-accent mb-2">퍼즐 유형 설명</h4>
            <p className="text-xs text-text-secondary">
              {puzzleTypeDescriptions[korok.puzzleType] || '이 유형의 퍼즐을 해결하세요.'}
            </p>
          </div>

          {korok.puzzleType === '숨은 코로그' && (
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <p className="text-xs text-green-400">
                🔍 <strong>숨은 코로그:</strong> 주변 환경에서 특이한 점을 찾아보세요. 
                일반적으로 빛나는 물체나 특이한 배치가 있습니다.
              </p>
            </div>
          )}

          {korok.puzzleType === '풍선' && (
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <p className="text-xs text-blue-400">
                🎈 <strong>풍선:</strong> 모든 풍선을 빠르게 터뜨려야 합니다. 
                활이 가장 효과적이며, 시간 제한이 있을 수 있습니다.
              </p>
            </div>
          )}

          {korok.puzzleType === '땅 파기' && (
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
              <p className="text-xs text-yellow-400">
                ⛏️ <strong>땅 파기:</strong> 동그라미가 그려진 곳에서 A 버튼을 눌러 파기를 시도하세요.
              </p>
            </div>
          )}
        </div>
      </div>

      {sameRegionKoroks.length > 0 && (
        <div className="bg-card rounded-xl p-5 border border-border">
          <h3 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent" /> 같은 지역의 다른 코로그
          </h3>
          <div className="flex flex-wrap gap-2">
            {sameRegionKoroks.slice(0, 6).map((k) => (
              <Link
                key={k.id}
                to={`/koroks/${k.id}`}
                className={`px-3 py-1.5 text-xs rounded-full transition-colors ${
                  items[k.id]
                    ? 'bg-accent/20 text-accent'
                    : 'bg-accent/10 text-accent hover:bg-accent/20'
                }`}
              >
                #{k.id.slice(1)} {k.puzzleType}
              </Link>
            ))}
            {sameRegionKoroks.length > 6 && (
              <span className="px-3 py-1.5 text-xs bg-card border border-border text-text-secondary rounded-full">
                +{sameRegionKoroks.length - 6}개 더
              </span>
            )}
          </div>
        </div>
      )}

      {samePuzzleKoroks.length > 0 && (
        <div className="bg-card rounded-xl p-5 border border-border">
          <h3 className="text-sm font-semibold text-text-primary mb-3">
            같은 퍼즐 유형 ({korok.puzzleType})
          </h3>
          <div className="flex flex-wrap gap-2">
            {samePuzzleKoroks.slice(0, 5).map((k) => (
              <Link
                key={k.id}
                to={`/koroks/${k.id}`}
                className="px-3 py-1.5 text-xs bg-accent-secondary/10 text-accent-secondary rounded-full hover:bg-accent-secondary/20 transition-colors"
              >
                {k.region} #{k.id.slice(1)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
