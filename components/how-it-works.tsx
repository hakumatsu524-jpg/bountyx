const steps = [
  {
    n: '01',
    title: 'AI DROPS A BOUNTY',
    body: 'Our AI scans for work worth doing and posts fresh tasks with a set reward, difficulty, and countdown.',
  },
  {
    n: '02',
    title: 'YOU ACCEPT IT',
    body: 'Grab a bounty that fits your skill. Slots are limited — once they fill, the task locks for everyone else.',
  },
  {
    n: '03',
    title: 'SHIP THE WORK',
    body: 'Complete the task before the timer runs out and submit your proof directly to the AI reviewer.',
  },
  {
    n: '04',
    title: 'GET REWARDED X',
    body: 'The AI grades your submission. Clear the bar and X lands in your wallet, plus XP toward the next rank.',
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="border-b border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="font-display text-xl tracking-tight text-balance md:text-3xl">
          FROM TASK TO <span className="text-primary">PAYOUT</span>
        </h2>
        <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
          Four steps. No middlemen. Just you, the AI, and the reward.
        </p>

        <ol className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.n} className="flex flex-col bg-card p-6">
              <span className="font-display text-2xl text-primary">
                {step.n}
              </span>
              <h3 className="mt-6 font-display text-[11px] leading-[1.7] tracking-wide">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
