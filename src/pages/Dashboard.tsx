import {
  Skull,
  Sword,
  ChefHat,
  Sparkles,
  ShieldCheck,
  MapPin,
  BookOpen,
  TrendingUp,
  Clock,
} from 'lucide-react'
import CategoryCard from '../components/CategoryCard'

const categories = [
  { icon: Skull, label: '몬스터 도감', description: 'HP, 공격력, 약점, 드랍 아이템', path: '/monsters' },
  { icon: Sword, label: '무기 도감', description: '공격력, 내구도, 획득 위치', path: '/weapons' },
  { icon: ChefHat, label: '요리 레시피', description: '조합법, 효과, 회복량', path: '/cooking' },
  { icon: Sparkles, label: 'Shrine 공략', description: '120개 Shrine 위치와 해법', path: '/shrines' },
  { icon: ShieldCheck, label: '신수 공략', description: '4대 신수 공략', path: '/divine-beasts' },
  { icon: Sparkles, label: '오브의 시련', description: 'DLC 시련 공략', path: '/trials' },
  { icon: MapPin, label: '코로그 찾기', description: '900개 코로그 위치', path: '/koroks' },
  { icon: BookOpen, label: '초보 가이드', description: '게임 시작 필수 정보', path: '/getting-started' },
]

const popularGuides = [
  '바람신의 신수 공략 — 바람의 신전 베리아',
  '초보자를 위한 첫 Shrine 10선',
  '전설의 무기 획득 방법 정리',
]

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div className="bg-gradient-to-br from-accent/5 to-accent-secondary/5 rounded-xl p-6 border border-border">
        <h1 className="text-xl font-bold text-text-primary mb-1">
          하이랄 대도감
        </h1>
        <p className="text-sm text-text-secondary">
          젤다의 전설 브레스 오브 더 와일드 — 도감 & 공략 가이드
        </p>
      </div>

      {/* Categories */}
      <section>
        <h2 className="text-sm font-semibold text-text-primary mb-4 flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-accent" />
          카테고리 바로가기
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <CategoryCard key={cat.label} {...cat} />
          ))}
        </div>
      </section>

      {/* Popular Guides */}
      <section>
        <h2 className="text-sm font-semibold text-text-primary mb-4 flex items-center gap-2">
          <Clock className="h-4 w-4 text-accent-secondary" />
          인기 공략
        </h2>
        <div className="space-y-2">
          {popularGuides.map((guide) => (
            <div
              key={guide}
              className="bg-card rounded-md p-4 border border-border text-sm text-text-secondary"
            >
              {guide}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
