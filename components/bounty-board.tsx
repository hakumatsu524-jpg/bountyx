'use client'

import { useState } from 'react'
import {
  bounties as initialBounties,
  generateBounty,
  difficultyMeta,
  type Bounty,
} from '@/lib/bounties'

const filters = ['ALL', 'BUILD', 'HUNT', 'CREATE', 'ARENA'] as const
type Filter = (typeof filters)[number]

export function BountyBoard() {
  const [list, setList] = useState<Bounty[]>(initialBounties)
  const [accepted, setAccepted] = useState<Set<string>>(new Set())
  const [filter, setFilter] = useState<Filter>('ALL')
  const [generating, setGenerating] = useState(false)

  const visible =
    filter === 'ALL' ? list : list.filter((b) => b.category === filter)

  function requestBounty() {
    if (generating) return
    setGenerating(true)
    setTimeout(() => {
      const next = generateBounty()
      setList((prev) => [next, ...prev])
      setFilter('ALL')
      setGenerating(false)
    }, 1100)
  }

  function toggleAccept(id: string) {
    setAccepted((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <section id="bounties" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-xl tracking-tight text-balance md:text-3xl">
              THE <span className="text-primary">BOUNTY</span> BOARD
            </h2>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Live tasks posted by the AI. Accept what you can clear before the
              timer hits zero.
            </p>
          </div>

          <button
            type="button"
            onClick={requestBounty}
            disabled={generating}
            className="font-display text-[10px] tracking-wide bg-primary px-6 py-4 text-primary-foreground pixel-shadow transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 disabled:opacity-60"
          >
            {generating ? 'AI IS THINKING…' : '+ REQUEST AI BOUNTY'}
          </button>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`font-display text-[9px] tracking-wide px-4 py-3 transition-colors ${
                filter === f
                  ? 'bg-primary text-primary-foreground'
                  : 'pixel-border bg-card text-muted-foreground hover:border-primary hover:text-primary'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((b) => (
            <BountyCard
              key={b.id}
              bounty={b}
              accepted={accepted.has(b.id)}
              onAccept={() => toggleAccept(b.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function BountyCard({
  bounty,
  accepted,
  onAccept,
}: {
  bounty: Bounty
  accepted: boolean
  onAccept: () => void
}) {
  const meta = difficultyMeta[bounty.difficulty]
  const claimed = accepted ? bounty.claimed + 1 : bounty.claimed
  const pct = Math.min(100, Math.round((claimed / bounty.slots) * 100))

  return (
    <article className="flex flex-col bg-card pixel-border transition-colors hover:border-primary">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <span className="font-mono text-[11px] text-muted-foreground">
          {bounty.id.toUpperCase()}
        </span>
        <span
          className={`font-display text-[8px] tracking-wide border px-2 py-1 ${meta.className}`}
        >
          {meta.label}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-3">
          <span className="font-display text-[8px] tracking-wide text-muted-foreground">
            {bounty.category}
          </span>
          <span className="font-display text-lg text-primary">
            X {bounty.reward}
          </span>
        </div>

        <h3 className="mt-4 font-display text-[13px] leading-[1.6] text-balance">
          {bounty.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {bounty.description}
        </p>

        <div className="mt-5 space-y-2">
          <div className="flex items-center justify-between font-mono text-[11px] text-muted-foreground">
            <span>
              {claimed}/{bounty.slots} SLOTS
            </span>
            <span>+{bounty.xp} XP</span>
          </div>
          <div className="h-2 w-full border border-border bg-background">
            <div
              className="h-full bg-primary transition-all"
              style={{ width: `${pct}%` }}
            />
          </div>
          <div className="flex items-center justify-between font-mono text-[11px]">
            <span className="text-muted-foreground">TIME LEFT</span>
            <span className="text-primary">{bounty.deadline}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={onAccept}
          className={`mt-5 font-display text-[10px] tracking-wide px-4 py-3 transition-transform active:translate-y-0 ${
            accepted
              ? 'pixel-border border-primary bg-background text-primary'
              : 'bg-primary text-primary-foreground hover:-translate-y-0.5'
          }`}
        >
          {accepted ? '✓ ACCEPTED' : 'ACCEPT BOUNTY'}
        </button>
      </div>
    </article>
  )
}
