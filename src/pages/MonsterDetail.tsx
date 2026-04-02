import { useParams, Link } from 'react-router-dom'
import { monsters } from '../data/monsters'
import { ArrowLeft, MapPin, Droplets, Swords, Heart, Shield, CheckCircle2, Circle } from 'lucide-react'
import { useChecklist } from '../hooks/useChecklist'

export default function MonsterDetail() {
  const { id } = useParams<{ id: string }>()
  const monster = monsters.find((m) => m.id === id)
  const { items, toggle } = useChecklist('monsters')

  if (!monster) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] px-1">
        <p className="text-text-secondary mb-4">몬스터를 찾을 수 없습니다.</p>
        <Link to="/monsters" className="text-accent text-sm hover:underline">
          ← 몬스터 도감으로 돌아가기
        </Link>
      </div>
    )
  }

  const found = items[monster.id] || false
  const threatLevel = monster.attack > 50 ? '치명' : monster.attack > 20 ? '위험' : monster.attack > 10 ? '보통' : '하급'
  const threatColor = monster.attack > 50 ? 'text-red-400' : monster.attack > 20 ? 'text-orange-400' : monster.attack > 10 ? 'text-yellow-400' : 'text-green-400'

  return (
    <div className="space-y-6 max-w-2xl mx-auto px-1">
      <Link to="/monsters" className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-accent transition-colors">
        <ArrowLeft className="h-3.5 w-3.5" /> 몬스터 도감
      </Link>

      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-start gap-4">
            <img src={monster.image} alt={monster.name} className="w-20 h-20 object-contain" />
            <div>
              <h1 className="text-xl font-bold text-text-primary">{monster.name}</h1>
              <p className={`text-sm font-semibold ${threatColor} mt-1`}>{threatLevel}</p>
            </div>
          </div>
          <button
            onClick={() => toggle(monster.id)}
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

        <p className="text-sm text-text-secondary mb-6">{monster.description}</p>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-background rounded-lg p-3 text-center">
            <Heart className="h-4 w-4 mx-auto mb-1 text-red-400" />
            <p className="text-xs text-text-secondary">HP</p>
            <p className="text-lg font-bold text-text-primary">{monster.hp}</p>
          </div>
          <div className="bg-background rounded-lg p-3 text-center">
            <Swords className="h-4 w-4 mx-auto mb-1 text-orange-400" />
            <p className="text-xs text-text-secondary">공격력</p>
            <p className="text-lg font-bold text-text-primary">{monster.attack}</p>
          </div>
          <div className="bg-background rounded-lg p-3 text-center">
            <Shield className="h-4 w-4 mx-auto mb-1 text-blue-400" />
            <p className="text-xs text-text-secondary">방어력</p>
            <p className="text-lg font-bold text-text-primary">{monster.defense}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-2 flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-accent" /> 출현 지역
            </h3>
            <div className="flex flex-wrap gap-2">
              {monster.locations.map((loc) => (
                <span key={loc} className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full">
                  {loc}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-2 flex items-center gap-2">
              <Droplets className="h-3.5 w-3.5 text-accent-secondary" /> 약점
            </h3>
            <div className="flex flex-wrap gap-2">
              {monster.weaknesses.map((w) => (
                <span key={w} className="px-3 py-1 text-xs bg-accent-secondary/10 text-accent-secondary rounded-full">
                  {w}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-2">드롭 아이템</h3>
            <div className="flex flex-wrap gap-2">
              {monster.drops.map((d) => (
                <span key={d} className="px-3 py-1 text-xs bg-card border border-border text-text-secondary rounded-full">
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}