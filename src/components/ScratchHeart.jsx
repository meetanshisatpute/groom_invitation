import { useEffect, useRef, useState, useCallback } from 'react'
import { Divider, CalendarIcon } from './Decor.jsx'

const W = 300
const H = 276

function heartPath(ctx, w, h) {
  const x = w / 2
  const top = h * 0.28
  ctx.beginPath()
  ctx.moveTo(x, h * 0.94)
  ctx.bezierCurveTo(w * 0.02, h * 0.62, w * 0.02, h * 0.06, w * 0.28, top * 0.62)
  ctx.bezierCurveTo(w * 0.42, h * 0.02, x, h * 0.1, x, top)
  ctx.bezierCurveTo(x, h * 0.1, w * 0.58, h * 0.02, w * 0.72, top * 0.62)
  ctx.bezierCurveTo(w * 0.98, h * 0.06, w * 0.98, h * 0.62, x, h * 0.94)
  ctx.closePath()
}

export default function ScratchHeart({ w, tx, lang }) {
  const canvasRef = useRef(null)
  const drawing = useRef(false)
  const moves = useRef(0)
  const [revealed, setRevealed] = useState(false)

  // Paint the frosted blue coating
  useEffect(() => {
    const c = canvasRef.current
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    c.width = W * dpr
    c.height = H * dpr
    const ctx = c.getContext('2d')
    ctx.scale(dpr, dpr)
    ctx.save()
    heartPath(ctx, W, H)
    ctx.clip()
    const g = ctx.createLinearGradient(0, 0, W, H)
    g.addColorStop(0, '#2f5fa8')
    g.addColorStop(0.5, '#4d82c9')
    g.addColorStop(1, '#27508f')
    ctx.fillStyle = g
    ctx.fillRect(0, 0, W, H)
    for (let i = 0; i < 1400; i++) {
      ctx.fillStyle = Math.random() > 0.5 ? 'rgba(255,255,255,0.35)' : 'rgba(10,30,70,0.35)'
      ctx.fillRect(Math.random() * W, Math.random() * H, 1.4, 1.4)
    }
    ctx.restore()
    ctx.strokeStyle = 'rgba(255,255,255,0.55)'
    ctx.lineWidth = 1.5
    heartPath(ctx, W, H)
    ctx.stroke()
  }, [])

  const finish = useCallback(() => {
    setRevealed(true)
    const c = canvasRef.current
    if (c) c.style.opacity = '0'
  }, [])

  const checkProgress = () => {
    const c = canvasRef.current
    const ctx = c.getContext('2d')
    const { width, height } = c
    const data = ctx.getImageData(0, 0, width, height).data
    let clear = 0
    let total = 0
    const step = 8
    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        const i = (y * width + x) * 4
        // only count pixels that were part of the heart (coating or scratched)
        total++
        if (data[i + 3] < 20) clear++
      }
    }
    // heart covers roughly 55% of the box; the empty corners count as clear already
    const heartShare = 0.55
    const cleared = (clear / total - (1 - heartShare)) / heartShare
    if (cleared > 0.5) finish()
  }

  const scratch = (e) => {
    if (!drawing.current || revealed) return
    const c = canvasRef.current
    const rect = c.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * W
    const y = ((e.clientY - rect.top) / rect.height) * H
    const ctx = c.getContext('2d')
    ctx.save()
    ctx.setTransform(Math.min(window.devicePixelRatio || 1, 2), 0, 0, Math.min(window.devicePixelRatio || 1, 2), 0, 0)
    ctx.globalCompositeOperation = 'destination-out'
    ctx.beginPath()
    ctx.arc(x, y, 20, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
    moves.current++
    if (moves.current % 12 === 0) checkProgress()
  }

  const down = (e) => {
    drawing.current = true
    e.currentTarget.setPointerCapture?.(e.pointerId)
    scratch(e)
  }
  const up = () => {
    drawing.current = false
    if (!revealed) checkProgress()
  }

  const saveDate = () => {
    const ics = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//grrominvitation//EN',
      'BEGIN:VEVENT',
      `UID:wedding-${w.calendar.start}@grrominvitation`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
      `DTSTART:${w.calendar.start}`,
      `DTEND:${w.calendar.end}`,
      `SUMMARY:${w.groom} & ${w.bride} Wedding`,
      `LOCATION:${w.venue.name.en}\\, ${w.venue.address.en}`,
      'DESCRIPTION:Mata Pujan 8 AM\\, Ring Ceremony 10 AM\\, Haldi 12 PM\\, Baraat 4 PM\\, Reception 7 PM onwards',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n')
    const url = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }))
    const a = document.createElement('a')
    a.href = url
    a.download = `${w.groom}-${w.bride}-wedding.ics`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <section className="section wc-soft center scratch-section">
      <h2 className="script-h">{revealed ? tx.foreverBegins : tx.scratchTitle}</h2>
      <Divider />

      <div className={`heart-box ${revealed ? 'is-revealed' : ''}`} style={{ width: W, height: H }}>
        <svg className="heart-outline" viewBox={`0 0 ${W} ${H}`} aria-hidden="true">
          <path
            d={`M150 ${H * 0.94} C${W * 0.02} ${H * 0.62} ${W * 0.02} ${H * 0.06} ${W * 0.28} ${H * 0.28 * 0.62} C${W * 0.42} ${H * 0.02} 150 ${H * 0.1} 150 ${H * 0.28} C150 ${H * 0.1} ${W * 0.58} ${H * 0.02} ${W * 0.72} ${H * 0.28 * 0.62} C${W * 0.98} ${H * 0.06} ${W * 0.98} ${H * 0.62} 150 ${H * 0.94}Z`}
          />
        </svg>
        <div className="heart-content">
          <span className="invited serif-it">{tx.invited}</span>
          <strong className="date-big">{w.weddingDate[lang]}</strong>
          <span className="weekday">{w.weekday[lang]}</span>
        </div>
        <canvas
          ref={canvasRef}
          style={{ width: W, height: H }}
          onPointerDown={down}
          onPointerMove={scratch}
          onPointerUp={up}
          onPointerCancel={up}
          aria-label={tx.scratchHint}
        />
        {revealed && (
          <div className="confetti" aria-hidden="true">
            {Array.from({ length: 36 }, (_, i) => (
              <i key={i} style={{ left: `${(i * 97) % 100}%`, animationDelay: `${(i % 9) * 0.12}s`, animationDuration: `${2.4 + (i % 5) * 0.5}s` }} />
            ))}
          </div>
        )}
      </div>

      {!revealed ? (
        <p className="hint">{tx.scratchHint}</p>
      ) : (
        <button className="btn" onClick={saveDate}>
          <CalendarIcon />
          {tx.saveDate}
        </button>
      )}
    </section>
  )
}
