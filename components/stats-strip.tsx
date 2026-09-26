const stats = [
  { value: '2,481', label: 'BOUNTIES CLEARED' },
  { value: 'X 1.2M', label: 'REWARDS PAID' },
  { value: '9,340', label: 'ACTIVE HUNTERS' },
  { value: '24/7', label: 'AI DROPPING TASKS' },
]

export function StatsStrip() {
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`px-4 py-8 text-center ${
              i % 2 === 0 ? 'border-r border-border' : ''
            } ${i < 2 ? 'border-b border-border md:border-b-0' : ''} ${
              i === 2 ? 'md:border-r' : ''
            }`}
          >
            <div className="font-display text-lg text-primary md:text-2xl">
              {stat.value}
            </div>
            <div className="mt-3 font-mono text-[11px] tracking-wide text-muted-foreground">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
