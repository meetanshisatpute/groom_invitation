import { useEffect, useState } from 'react'
import { Divider } from './Decor.jsx'

const pad = (n) => String(n).padStart(2, '0')

function diff(target) {
  const ms = Math.max(0, new Date(target).getTime() - Date.now())
  const s = Math.floor(ms / 1000)
  return { d: Math.floor(s / 86400), h: Math.floor((s % 86400) / 3600), m: Math.floor((s % 3600) / 60), s: s % 60 }
}

export default function Countdown({ w, tx }) {
  const [left, setLeft] = useState(() => diff(w.countdownTarget))
  useEffect(() => {
    const id = setInterval(() => setLeft(diff(w.countdownTarget)), 1000)
    return () => clearInterval(id)
  }, [w.countdownTarget])

  const cells = [
    [left.d, tx.days],
    [left.h, tx.hours],
    [left.m, tx.minutes],
    [left.s, tx.seconds],
  ]
  return (
    <section className="section wc-soft center">
      <h2 className="script-h">{tx.countdown}</h2>
      <Divider />
      <div className="count" role="timer">
        {cells.map(([v, label]) => (
          <div className="count-cell" key={label}>
            <strong>{pad(v)}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
