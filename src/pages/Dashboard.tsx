import { useChecklist } from '../hooks/useChecklist'
import {
  Skull,
  Sword,
  ChefHat,
  Sparkles,
  ShieldCheck,
  Shield,
  MapPin,
  BookOpen,
  TrendingUp,
  Map,
} from 'lucide-react'
import CategoryCard from '../components/CategoryCard'
import { monsters } from '../data/monsters'
import { weapons } from '../data/weapons'
import { armor } from '../data/armor'
import { recipes } from '../data/recipes'
import { shrines } from '../data/shrines'
import { koroks } from '../data/koroks'

const categories = [
  { icon: Map, label: '하이랄 맵', description: '인터랙티브 지도', path: '/map' },
  { icon: Skull, label: '몬스터 도감', description: `${monsters.length}종 몬스터 데이터`, path: '/monsters' },
  { icon: Sword, label: '무기 도감', description: `${weapons.length}종 무기 데이터`, path: '/weapons' },
  { icon: Shield, label: '방어구 도감', description: `${armor.length}종 방어구 세트`, path: '/armor' },
  { icon: ChefHat, label: '요리 레시피', description: `${recipes.length}종 요리 방법`, path: '/cooking' },
  { icon: Sparkles, label: '신전 공략', description: `${shrines.length}개 신전 위치`, path: '/shrines' },
  { icon: ShieldCheck, label: '신수 공략', description: '4대 신수 공략', path: '/divine-beasts' },
  { icon: Sparkles, label: '오브의 시련', description: '5개 시련 도전', path: '/trials' },
  { icon: MapPin, label: '코로그 찾기', description: `${koroks.length}개 코로그 위치`, path: '/koroks' },
  { icon: BookOpen, label: '초보 가이드', description: '게임 시작 필수 정보', path: '/getting-started' },
]

export default function Dashboard() {
  const { totalCount: monsterCount } = useChecklist('monsters')
  const { totalCount: weaponCount } = useChecklist('weapons')
  const { totalCount: armorCount } = useChecklist('armor')
  const { totalCount: cookingCount } = useChecklist('cooking')
  const { totalCount: korokCount } = useChecklist('koroks')

  const totalCollected = monsterCount + weaponCount + armorCount + cookingCount + korokCount
  const totalItems = monsters.length + weapons.length + armor.length + recipes.length + koroks.length

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div className="bg-gradient-to-br from-accent/5 to-accent-secondary/5 rounded-xl p-6 border border-border">
        <h1 className="text-xl font-bold text-text-primary mb-1">
          하이랄 대도감
        </h1>
        <p className="text-sm text-text-secondary mb-3">
          젤다의 전설 브레스 오브 더 와일드 — 도감 & 공략 가이드
        </p>
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xs bg-accent/10 text-accent px-2.5 py-1 rounded-full">
            수집 {totalCollected}/{totalItems}개
          </span>
          <div className="h-2 flex-1 min-w-32 bg-card border border-border rounded-full overflow-hidden">
            <div
              className="h-full bg-accent rounded-full transition-all"
              style={{ width: `${Math.min((totalCollected / totalItems) * 100, 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Categories */}
      <section>
        <h2 className="text-sm font-semibold text-text-primary mb-4 flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-accent" />
          카테고리 바로가기
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {categories.map((cat) => (
            <CategoryCard key={cat.label} {...cat} />
          ))}
        </div>
      </section>
    </div>
  )
}