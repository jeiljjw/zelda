interface ItemCardProps {
  icon: string
  title: string
  stats: { label: string; value: string }[]
  description?: string
  badge?: string
  image?: string
}

export default function ItemCard({ icon, title, stats, description, badge, image }: ItemCardProps) {
  return (
    <div className="bg-card rounded-lg p-4 border border-border hover:border-accent transition-colors">
      <div className="flex items-start gap-3 mb-3">
        {image ? (
          <img src={image} alt={title} className="w-12 h-12 object-contain flex-shrink-0" />
        ) : (
          <span className="text-2xl">{icon}</span>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-text-primary text-sm truncate">{title}</h3>
          {badge && (
            <span className="inline-block mt-0.5 px-1.5 py-0.5 text-[10px] bg-accent/20 text-accent rounded">
              {badge}
            </span>
          )}
        </div>
      </div>
      <div className="space-y-1 mb-3">
        {stats.map((stat) => (
          <div key={stat.label} className="flex justify-between text-xs">
            <span className="text-text-secondary">{stat.label}</span>
            <span className="text-text-primary font-medium">{stat.value}</span>
          </div>
        ))}
      </div>
      {description && (
        <p className="text-xs text-text-secondary border-t border-border pt-2">
          {description}
        </p>
      )}
    </div>
  )
}
