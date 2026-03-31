import GuideSection from '../components/GuideSection'

const guideSteps: string[] = [
  '샤이네이 사원에서 깨어나, 슬레이트를 획득하세요',
  '첫 Shrine: 옴바-오 신전을 클리어하세요 (자석이동 학습)',
  '파라세일 글라이더를 받기 위해 올드 맨을 만나세요',
  '카카리코 마을로 가서 파야와 임파를 만나세요',
  '4대 신전 중 하나를 선택해 도전하세요',
  '중간에 Shrine를 돌며 하트/스태미나를 올리세요',
]

const combatTips: string[] = [
  '방어구 업그레이드를 우선하세요 (요정 샘)',
  '무기의 내구도를 관리하세요 — 강한 무기는 아껴두세요',
  '음식/비약을 미리 만들어 두세요',
  '헤드샷으로 적을 기절시킬 수 있습니다',
  '은신 + 기습 공격으로 데미지를 극대화하세요',
]

const explorationTips: string[] = [
  '언덕 위에서 글라이더로 이동하면 효율적입니다',
  '타워를 활성화하여 지도를 펼치세요',
  '비가 올 때는 등반이 미끄러우니 피하세요',
  '코로그 씨앗은 인벤토리 확장에 사용됩니다',
  '밤에는 몬스터가 강해지니 조심하세요',
]

export default function GettingStarted() {
  return (
    <div className="space-y-8 max-w-2xl">
      <h1 className="text-lg font-bold text-text-primary">초보 시작 가이드</h1>

      <div className="bg-card rounded-xl p-5 border border-border">
        <GuideSection title="게임 시작 순서" steps={guideSteps} />
      </div>

      <div className="bg-card rounded-xl p-5 border border-border">
        <GuideSection title="전투 팁" steps={combatTips} />
      </div>

      <div className="bg-card rounded-xl p-5 border border-border">
        <GuideSection title="탐험 팁" steps={explorationTips} />
      </div>
    </div>
  )
}
