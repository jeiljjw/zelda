import { useParams, Link } from 'react-router-dom'
import { weapons } from '../data/weapons'
import { ArrowLeft, MapPin, Swords, Shield, CheckCircle2, Circle } from 'lucide-react'
import { useChecklist } from '../hooks/useChecklist'

const typeLabel: Record<string, string> = {
  sword: '검',
  spear: '창',
  axe: '도끼',
  bow: '활',
  shield: '방패',
}

const typeColor: Record<string, string> = {
  sword: 'text-blue-400',
  spear: 'text-green-400',
  axe: 'text-orange-400',
  bow: 'text-purple-400',
  shield: 'text-yellow-400',
}

export default function WeaponDetail() {
  const { id } = useParams<{ id: string }>()
  const weapon = weapons.find((w) => w.id === id)
  const { items, toggle } = useChecklist('weapons')

  if (!weapon) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px]">
        <p className="text-text-secondary mb-4">무기를 찾을 수 없습니다.</p>
        <Link to="/weapons" className="text-accent text-sm hover:underline">
          ← 무기 도감으로 돌아가기
        </Link>
      </div>
    )
  }

  const found = items[weapon.id] || false
  const isStrong = weapon.attack >= 50

  return (
    <div className="space-y-6 max-w-2xl mx-auto px-1">
      <Link to="/weapons" className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-accent transition-colors">
        <ArrowLeft className="h-3.5 w-3.5" /> 무기 도감
      </Link>

      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex items-start gap-4 mb-4">
          {weapon.image && (
            <img src={weapon.image} alt={weapon.name} className="w-20 h-20 object-contain" />
          )}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className={`px-2 py-0.5 text-xs rounded bg-accent/10 ${typeColor[weapon.type]}`}>
                {typeLabel[weapon.type]}
              </span>
              {isStrong && (
                <span className="px-2 py-0.5 text-xs rounded bg-red-500/20 text-red-400">강력</span>
              )}
            </div>
            <h1 className="text-xl font-bold text-text-primary mb-2">{weapon.name}</h1>
          </div>
          <button
            onClick={() => toggle(weapon.id)}
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

        <p className="text-sm text-text-secondary mb-6">{weapon.description}</p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-background rounded-lg p-3 text-center">
            <Swords className="h-4 w-4 mx-auto mb-1 text-orange-400" />
            <p className="text-xs text-text-secondary">공격력</p>
            <p className="text-lg font-bold text-text-primary">{weapon.attack}</p>
          </div>
          <div className="bg-background rounded-lg p-3 text-center">
            <Shield className="h-4 w-4 mx-auto mb-1 text-blue-400" />
            <p className="text-xs text-text-secondary">내구도</p>
            <p className="text-lg font-bold text-text-primary">{weapon.durability}</p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-text-primary mb-2 flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-accent" /> 획득 위치
          </h3>
          <div className="flex flex-wrap gap-2">
            {weapon.locations.map((loc) => (
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