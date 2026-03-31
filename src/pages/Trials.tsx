import { trials } from '../data/trials'
import GuideSection from '../components/GuideSection'

export default function Trials() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-text-primary">오브의 시련</h1>
        <span className="text-xs text-text-secondary">{trials.length}개</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {trials.map((trial) => (
          <div key={trial.id} className="bg-card rounded-xl p-5 border border-border">
            <h2 className="font-semibold text-text-primary mb-1">{trial.name}</h2>
            <p className="text-xs text-accent mb-3">{trial.reward}</p>
            <GuideSection title="진행 순서" steps={trial.walkthrough} />
          </div>
        ))}
      </div>
    </div>
  )
}
