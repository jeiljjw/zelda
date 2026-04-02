import { useParams, Link } from 'react-router-dom'
import { armor as armorData } from '../data/armor'
import { ArrowLeft, MapPin, Shield, CheckCircle2, Circle } from 'lucide-react'
import { useChecklist } from '../hooks/useChecklist'

const slotLabel: Record<string, string> = { head: '머리', body: '상체', legs: '하체' }
const slotIcon: Record<string, string> = { head: '🪖', body: '👕', legs: '👖' }

export default function ArmorDetail() {
  const { id } = useParams<{ id: string }>()
  const item = armorData.find((a) => a.id === id)
  const { items, toggle } = useChecklist('armor')

  if (!item) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px]">
        <p className="text-text-secondary mb-4">방어구를 찾을 수 없습니다.</p>
        <Link to="/armor" className="text-accent text-sm hover:underline">
          ← 방어구 도감으로 돌아가기
        </Link>
      </div>
    )
  }

  const found = items[item.id] || false
  const setItems = armorData.filter((a) => a.set === item.set)
  const totalDefense = setItems.reduce((sum, a) => sum + a.defense, 0)
  const setCollected = setItems.filter((s) => items[s.id]).length

  return (
    <div className="space-y-6 max-w-2xl mx-auto px-1">
      <Link to="/armor" className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-accent transition-colors">
        <ArrowLeft className="h-3.5 w-3.5" /> 방어구 도감
      </Link>

      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-start gap-3">
            {item.image ? (
              <img src={item.image} alt={item.name} className="w-16 h-16 object-contain" />
            ) : (
              <span className="text-3xl">{slotIcon[item.slot]}</span>
            )}
            <div>
              <span className="px-2 py-0.5 text-xs rounded bg-accent/10 text-accent">{slotLabel[item.slot]}</span>
              <h1 className="text-xl font-bold text-text-primary mt-1">{item.name}</h1>
            </div>
          </div>
          <button
            onClick={() => toggle(item.id)}
            className="flex-shrink-0 p-2 rounded-full hover:bg-background transition-colors"
            title={found ? '수집 취소' : '수집 표시'}
          >
            {found ? (
              <CheckCircle2 className="h-7 w-7 text-accent" />
            ) : (
              <Circle className="h-7 w-7 text-text-secondary" />
            )}
          </button>
        </div>

        <p className="text-sm text-text-secondary mb-6">
          {item.effect === '없음' ? '특별한 효과 없음' : `효과: ${item.effect}`}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-background rounded-lg p-3 text-center">
            <Shield className="h-4 w-4 mx-auto mb-1 text-blue-400" />
            <p className="text-xs text-text-secondary">방어력</p>
            <p className="text-lg font-bold text-text-primary">{item.defense}</p>
          </div>
          <div className="bg-background rounded-lg p-3 text-center">
            <p className="text-xs text-text-secondary">세트 합계 방어력</p>
            <p className="text-lg font-bold text-accent">{totalDefense}</p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-text-primary mb-2 flex items-center gap-2">
            <Shield className="h-3.5 w-3.5 text-yellow-400" /> {item.set} 세트 ({setCollected}/{setItems.length})
          </h3>
          <div className="flex flex-wrap gap-2">
            {setItems.map((s) => (
              <span
                key={s.id}
                className={`px-3 py-1.5 text-xs rounded-full ${
                  s.id === item.id
                    ? 'bg-accent/20 text-accent ring-1 ring-accent'
                    : items[s.id]
                    ? 'bg-accent/10 text-accent'
                    : 'bg-card border border-border text-text-secondary'
                }`}
              >
                {slotIcon[s.slot]} {s.name} ({s.defense})
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-sm font-semibold text-text-primary mb-2 flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-accent" /> 획득 위치
          </h3>
          <div className="flex flex-wrap gap-2">
            {item.locations.map((loc) => (
              <span key={loc} className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full">
                {loc}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
