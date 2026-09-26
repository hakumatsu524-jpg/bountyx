import Link from 'next/link'
import { Logo } from '@/components/logo'

const nav = [
  { label: 'BOUNTIES', href: '#bounties' },
  { label: 'HOW IT WORKS', href: '#how' },
  { label: 'LEADERBOARD', href: '#leaderboard' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" aria-label="BountyX home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-display text-[10px] tracking-wide text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#bounties"
          className="font-display text-[10px] tracking-wide bg-primary px-4 py-3 text-primary-foreground pixel-shadow-sm transition-transform hover:-translate-y-0.5 active:translate-y-0"
        >
          PLAY NOW
        </a>
      </div>
    </header>
  )
}
