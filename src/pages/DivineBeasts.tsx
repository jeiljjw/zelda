import { Link } from 'react-router-dom'
import { divineBeasts } from '../data/divine-beasts'
import GuideSection from '../components/GuideSection'

const elementIcons: Record<string, string> = {
  바람: '💨',
  번개: '⚡',
  물: '💧',
  불꽃: '🔥',
}

export default function DivineBeasts() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-text-primary">신수 공략</h1>
        <span className="text-xs text-text-secondary">{divineBeasts.length}개</span>
      </div>

      <div className="space-y-6">
        {divineBeasts.map((beast) => (
            <div key={beast.id} className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="p-4 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{elementIcons[beast.element] || '🔷'}</span>
                  <div>
                    <h2 className="font-semibold text-text-primary">{beast.name}</h2>
                    <p className="text-xs text-text-secondary">{beast.location} · 보스: {beast.boss}</p>
                  </div>
                </div>
                <Link
                  to={`/divine-beasts/${beast.id}`}
                  className="text-xs text-accent hover:underline"
                >
                  상세 보기 →
                </Link>
              </div>
              <div className="p-4">
                <GuideSection
                  title="공략 순서"
                  steps={beast.walkthrough}
                />
              </div>
            </div>
        ))}
      </div>
    </div>
  )
}
