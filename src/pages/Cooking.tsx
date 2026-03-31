import { recipes } from '../data/recipes'
import { useSearch } from '../hooks/useSearch'

const effectColors: Record<string, string> = {
  '하트 회복': 'text-red-400',
  '공격력 업': 'text-orange-400',
  '냉기 저항 업': 'text-cyan-400',
  '이속 업': 'text-yellow-400',
  'HP 회복': 'text-green-400',
}

export default function Cooking() {
  const { query, setQuery, filtered } = useSearch(recipes, ['name', 'ingredients', 'effect'])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-text-primary">요리 레시피</h1>
        <span className="text-xs text-text-secondary">{recipes.length}개 등록</span>
      </div>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="레시피, 재료, 효과 검색..."
        className="bg-card text-text-primary text-sm rounded-md px-3 py-1.5 border border-border placeholder:text-text-secondary focus:outline-none focus:border-accent max-w-xs"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((recipe) => (
          <div key={recipe.id} className="bg-card rounded-lg p-4 border border-border">
            <h3 className="font-semibold text-text-primary text-sm mb-2">{recipe.name}</h3>
            <div className="space-y-1.5 text-xs mb-3">
              <div className="flex justify-between">
                <span className="text-text-secondary">재료</span>
                <span className="text-text-primary">{recipe.ingredients.join(', ')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">효과</span>
                <span className={effectColors[recipe.effect.slice(0, 4)] || 'text-text-primary'}>
                  {recipe.effect}
                </span>
              </div>
              {recipe.duration > 0 && (
                <div className="flex justify-between">
                  <span className="text-text-secondary">지속 시간</span>
                  <span className="text-text-primary">{Math.floor(recipe.duration / 60)}분</span>
                </div>
              )}
              {recipe.recovery > 0 && (
                <div className="flex justify-between">
                  <span className="text-text-secondary">회복량</span>
                  <span className="text-text-primary">❤️ {recipe.recovery}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
