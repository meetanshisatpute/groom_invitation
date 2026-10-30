import { useMemo } from 'react'

// Small deterministic random so flowers look the same every render
function rng(seed) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

export function Hydrangea({ seed = 1, size = 220, className = '', flip = false }) {
  const florets = useMemo(() => {
    const r = rng(seed * 97 + 13)
    const out = []
    for (let i = 0; i < 70; i++) {
      const a = r() * Math.PI * 2
      const d = Math.sqrt(r()) * 82
      out.push({
        x: 100 + Math.cos(a) * d,
        y: 100 + Math.sin(a) * d * 0.9,
        s: 7 + r() * 9,
        rot: r() * 90,
        tone: Math.floor(r() * 4),
      })
    }
    return out
  }, [seed])
  const tones = ['#8fb3e3', '#6f98d4', '#b5cdf0', '#4f7bbd']
  return (
    <svg
      className={`decor ${className}`}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
      aria-hidden="true"
    >
      <g opacity="0.85">
        {florets.map((f, i) => (
          <g key={i} transform={`translate(${f.x} ${f.y}) rotate(${f.rot})`} opacity={0.55 + (i % 4) * 0.1}>
            {[0, 90, 180, 270].map((r) => (
              <ellipse key={r} cx="0" cy={-f.s * 0.55} rx={f.s * 0.45} ry={f.s * 0.6} fill={tones[f.tone]} transform={`rotate(${r})`} />
            ))}
            <circle r={f.s * 0.14} fill="#eef4fc" />
          </g>
        ))}
      </g>
    </svg>
  )
}

export function Chandelier({ size = 120, className = '' }) {
  return (
    <svg className={`decor ${className}`} width={size} height={size * 1.25} viewBox="0 0 120 150" fill="none" stroke="#7d8da6" strokeWidth="1" aria-hidden="true">
      <path d="M60 0v34" />
      <circle cx="60" cy="38" r="5" />
      <path d="M60 43c-3 12-3 20 0 28" />
      <path d="M60 52C34 52 18 66 14 84M60 52c26 0 42 14 46 32" />
      <path d="M60 60C42 62 30 72 28 90M60 60c18 2 30 12 32 30" />
      <path d="M14 84c-2 6 0 12 6 12M106 84c2 6 0 12-6 12M28 90c-1 5 1 9 5 9M92 90c1 5-1 9-5 9" />
      {[14, 28, 60, 92, 106].map((x, i) => (
        <g key={i}>
          <path d={`M${x} ${x === 60 ? 71 : 96}v10`} />
          <ellipse cx={x} cy={x === 60 ? 111 : 110} rx="2" ry="4" fill="#cbd7ea" />
        </g>
      ))}
      <path d="M44 100h32l-4 14H48zM52 114l8 16 8-16" />
      <circle cx="60" cy="136" r="2.4" fill="#cbd7ea" />
    </svg>
  )
}

export function Heart({ size = 14, color = 'var(--navy)' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s-8-5.2-8-11a4.6 4.6 0 0 1 8-3 4.6 4.6 0 0 1 8 3c0 5.8-8 11-8 11z" fill={color} />
    </svg>
  )
}

export function Divider({ className = '' }) {
  return (
    <div className={`divider ${className}`} aria-hidden="true">
      <span />
      <Heart size={11} color="var(--blue)" />
      <span />
    </div>
  )
}

const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round' }

export function EventIcon({ name }) {
  const props = { width: 30, height: 30, viewBox: '0 0 32 32', 'aria-hidden': true }
  switch (name) {
    case 'diya':
      return (
        <svg {...props}>
          <path d="M16 4c3 4 3 7 0 9-3-2-3-5 0-9z" {...stroke} />
          <path d="M5 17h22c0 5-4.5 9-11 9S5 22 5 17z" {...stroke} />
          <path d="M11 29h10" {...stroke} />
        </svg>
      )
    case 'ring':
      return (
        <svg {...props}>
          <circle cx="16" cy="19" r="8" {...stroke} />
          <path d="M12 7l4-3 4 3-4 5z" {...stroke} />
        </svg>
      )
    case 'haldi':
      return (
        <svg {...props}>
          <circle cx="16" cy="16" r="3" {...stroke} />
          {[0, 72, 144, 216, 288].map((r) => (
            <ellipse key={r} cx="16" cy="8" rx="3.4" ry="5" transform={`rotate(${r} 16 16)`} {...stroke} />
          ))}
        </svg>
      )
    case 'barat':
      return (
        <svg {...props}>
          <path d="M4 22c3-1 5-4 6-8l3-6 5 2 2 5 6 3c1 1 2 3 2 5" {...stroke} />
          <path d="M10 22l-1 6M24 24l1 4M16 24l-1 4" {...stroke} />
          <circle cx="14" cy="5" r="1.2" {...stroke} />
        </svg>
      )
    case 'glass':
      return (
        <svg {...props}>
          <path d="M7 5h8l-1 8a3 3 0 0 1-6 0zM8 16v9M5 26h6" {...stroke} />
          <path d="M19 5h8l-1 8a3 3 0 0 1-6 0zM23 16v9M20 26h6" {...stroke} />
        </svg>
      )
    default:
      return null
  }
}

export function PinIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 29s-9-8.2-9-15a9 9 0 0 1 18 0c0 6.800-9 15-9 15z" {...stroke} />
      <circle cx="16" cy="14" r="3.5" {...stroke} />
    </svg>
  )
}

export function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3.5 10h17M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}
