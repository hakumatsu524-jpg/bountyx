export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 pixel-grid opacity-30" aria-hidden />
      <div className="pointer-events-none absolute inset-0 scanlines" aria-hidden />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center md:py-32">
        <span className="mb-8 inline-flex items-center gap-2 pixel-border bg-card px-4 py-2 font-display text-[9px] tracking-wide text-primary">
          <span className="inline-block h-2 w-2 animate-pulse bg-primary" aria-hidden />
          AI IS HANDING OUT BOUNTIES
        </span>

        <h1 className="font-display text-3xl leading-[1.4] tracking-tight text-balance md:text-5xl md:leading-[1.35]">
          COMPLETE THE TASK.
          <br />
          GET REWARDED <span className="text-primary">X</span>.
        </h1>

        <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          BountyX is the arcade for getting paid. Our AI drops fresh bounties
          around the clock. Accept one, ship the work, and cash out rewards in{' '}
          <span className="text-foreground">X</span> — the only currency that
          matters here.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#bounties"
            className="font-display text-xs tracking-wide bg-primary px-8 py-4 text-primary-foreground pixel-shadow transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0"
          >
            BROWSE BOUNTIES
          </a>
          <a
            href="#how"
            className="font-display text-xs tracking-wide pixel-border bg-card px-8 py-4 text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            HOW IT WORKS
          </a>
        </div>

        <p className="mt-6 font-mono text-xs text-muted-foreground">
          {'// this is a demo — no real money changes hands'}
        </p>
      </div>
    </section>
  )
}
