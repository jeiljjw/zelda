import { Link } from 'react-router-dom'
import { LucideIcon } from 'lucide-react'

interface CategoryCardProps {
  icon: LucideIcon
  label: string
  description: string
  path: string
}

export default function CategoryCard({ icon: Icon, label, description, path }: CategoryCardProps) {
  return (
    <Link
      to={path}
      className="bg-card rounded-lg p-5 border border-border hover:border-accent transition-all duration-200 group"
    >
      <Icon className="h-6 w-6 text-accent mb-3 group-hover:scale-110 transition-transform" />
      <h3 className="text-sm font-semibold text-text-primary mb-1">{label}</h3>
      <p className="text-xs text-text-secondary">{description}</p>
    </Link>
  )
}
