export type Difficulty = 'ROOKIE' | 'PRO' | 'ELITE' | 'LEGEND'

export type Bounty = {
  id: string
  title: string
  description: string
  reward: number
  difficulty: Difficulty
  category: string
  xp: number
  slots: number
  claimed: number
  deadline: string
}

export const difficultyMeta: Record<
  Difficulty,
  { label: string; className: string }
> = {
  ROOKIE: { label: 'ROOKIE', className: 'text-muted-foreground border-border' },
  PRO: { label: 'PRO', className: 'text-primary border-primary' },
  ELITE: { label: 'ELITE', className: 'text-primary border-primary' },
  LEGEND: { label: 'LEGEND', className: 'text-destructive border-destructive' },
}

export const bounties: Bounty[] = [
  {
    id: 'bx-2048',
    title: 'Ship a landing page in 24h',
    description:
      'The AI needs a single-screen product page for a fake energy drink. Deliver clean markup, one bold hero, and a working signup field.',
    reward: 420,
    difficulty: 'PRO',
    category: 'BUILD',
    xp: 850,
    slots: 12,
    claimed: 7,
    deadline: '23:41:12',
  },
  {
    id: 'bx-1337',
    title: 'Find the broken pixel',
    description:
      'One tile in a 64x64 sprite sheet is the wrong shade of green. Locate it, log the coordinates, and submit a screenshot.',
    reward: 90,
    difficulty: 'ROOKIE',
    category: 'HUNT',
    xp: 200,
    slots: 40,
    claimed: 31,
    deadline: '04:12:55',
  },
  {
    id: 'bx-9001',
    title: 'Beat the AI at chess (3 games)',
    description:
      'Win a best-of-three against BountyBot on hard difficulty. Draws do not count. Upload the final board states.',
    reward: 1500,
    difficulty: 'LEGEND',
    category: 'ARENA',
    xp: 3200,
    slots: 3,
    claimed: 2,
    deadline: '71:59:00',
  },
  {
    id: 'bx-3141',
    title: 'Write 5 taglines for a robot cafe',
    description:
      'Give the AI five punchy, under-8-word taglines. It will grade them on originality. Only the top two get paid.',
    reward: 160,
    difficulty: 'ROOKIE',
    category: 'CREATE',
    xp: 300,
    slots: 25,
    claimed: 9,
    deadline: '11:30:00',
  },
  {
    id: 'bx-5150',
    title: 'Optimize a slow database query',
    description:
      'A query is taking 8 seconds. Bring it under 200ms without changing the output. Explain your indexing strategy.',
    reward: 780,
    difficulty: 'ELITE',
    category: 'BUILD',
    xp: 1600,
    slots: 6,
    claimed: 4,
    deadline: '47:20:18',
  },
  {
    id: 'bx-7777',
    title: 'Translate a menu into pixel poetry',
    description:
      'Rewrite a diner menu as retro arcade flavor text. Keep it readable, keep it weird, keep it under 200 words.',
    reward: 240,
    difficulty: 'PRO',
    category: 'CREATE',
    xp: 500,
    slots: 15,
    claimed: 5,
    deadline: '29:05:44',
  },
]

const bountyPool: Omit<Bounty, 'id' | 'claimed'>[] = [
  {
    title: 'Debug a haunted checkout flow',
    description:
      'Users can add items but never reach payment. Trace the bug, patch it, and record a clean run-through.',
    reward: 610,
    difficulty: 'ELITE',
    category: 'HUNT',
    xp: 1300,
    slots: 8,
    deadline: '33:12:09',
  },
  {
    title: 'Name 10 fictional space colonies',
    description:
      'The AI is generating a galaxy map and needs colony names with a one-line lore each. Bonus reward for a theme.',
    reward: 130,
    difficulty: 'ROOKIE',
    category: 'CREATE',
    xp: 260,
    slots: 30,
    deadline: '08:44:31',
  },
  {
    title: 'Speedrun a to-do app build',
    description:
      'Build a working to-do app with add, complete, and delete. First 3 submissions under 45 minutes get bonus X.',
    reward: 950,
    difficulty: 'ELITE',
    category: 'BUILD',
    xp: 2000,
    slots: 5,
    deadline: '00:44:59',
  },
  {
    title: 'Out-riddle the AI',
    description:
      'BountyBot will pose 5 riddles. Solve at least 4 to clear the bounty. You get one hint, use it wisely.',
    reward: 300,
    difficulty: 'PRO',
    category: 'ARENA',
    xp: 640,
    slots: 20,
    deadline: '15:00:00',
  },
  {
    title: 'Design a boss-battle health bar',
    description:
      'The AI wants a chunky pixel health bar with a damage-flash state. Deliver the component and a short demo clip.',
    reward: 520,
    difficulty: 'PRO',
    category: 'BUILD',
    xp: 1100,
    slots: 10,
    deadline: '52:18:07',
  },
  {
    title: 'Compress a 500-word doc to a tweet',
    description:
      'Summarize a dense product spec into one 280-character message with zero jargon. The AI scores for clarity.',
    reward: 110,
    difficulty: 'ROOKIE',
    category: 'CREATE',
    xp: 240,
    slots: 35,
    deadline: '06:22:40',
  },
  {
    title: 'Survive the infinite maze',
    description:
      'Navigate a procedurally generated maze to the exit within 500 moves. The AI regenerates walls every 60 seconds.',
    reward: 1800,
    difficulty: 'LEGEND',
    category: 'ARENA',
    xp: 3600,
    slots: 2,
    deadline: '99:59:59',
  },
]

let counter = 100

export function generateBounty(): Bounty {
  const template = bountyPool[Math.floor(Math.random() * bountyPool.length)]
  counter += 7
  return {
    ...template,
    id: `bx-${counter}${Math.floor(Math.random() * 90 + 10)}`,
    claimed: Math.floor(Math.random() * (template.slots - 1)),
  }
}
