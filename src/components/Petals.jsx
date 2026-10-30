import { useMemo } from 'react'

// Falling petals + hearts, pure CSS animation, cheap to run
export default function Petals({ count = 16 }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: Math.random() * 100,
        size: 10 + Math.random() * 16,
        dur: 9 + Math.random() * 9,
        delay: -Math.random() * 16,
        drift: (Math.random() - 0.5) * 120,
        heart: i % 4 === 0,
        tone: i % 3,
      })),
    [count]
  )
  return (
    <div className="petals" aria-hidden="true">
      {items.map((p, i) => (
        <span
          key={i}
          className={`petal tone-${p.tone} ${p.heart ? 'is-heart' : ''}`}
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDuration: `${p.dur}s`,
            animationDelay: `${p.delay}s`,
            '--drift': `${p.drift}px`,
          }}
        />
      ))}
    </div>
  )
}
