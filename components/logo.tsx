import Image from 'next/image'

export function Logo({
  showWordmark = true,
  size = 40,
}: {
  showWordmark?: boolean
  size?: number
}) {
  return (
    <span className="flex items-center gap-3">
      <span
        className="flex items-center justify-center bg-[oklch(0.98_0_0)] pixel-border border-primary"
        style={{ width: size, height: size, padding: Math.round(size * 0.12) }}
      >
        <Image
          src="/bountyx-logo.png"
          alt="BountyX logo"
          width={size}
          height={size}
          className="h-full w-full"
          style={{ objectFit: 'contain' }}
          priority
        />
      </span>
      {showWordmark && (
        <span className="font-display text-sm leading-none tracking-tight">
          <span className="text-foreground">BOUNTY</span>
          <span className="text-primary">X</span>
        </span>
      )}
    </span>
  )
}
