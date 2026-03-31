interface GuideSectionProps {
  title: string
  steps: string[]
}

export default function GuideSection({ title, steps }: GuideSectionProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-text-primary mb-3">{title}</h3>
      <ol className="space-y-3">
        {steps.map((step, i) => (
          <li key={i} className="flex gap-3 text-sm">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent text-xs flex items-center justify-center font-medium">
              {i + 1}
            </span>
            <span className="text-text-secondary pt-0.5">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}
