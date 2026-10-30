import { useState } from 'react'

export default function Envelope({ label, onOpen }) {
  const [opening, setOpening] = useState(false)
  const [gone, setGone] = useState(false)

  const open = () => {
    if (opening) return
    setOpening(true)
    onOpen?.()
    setTimeout(() => setGone(true), 1500)
  }

  if (gone) return null

  return (
    <div className={`envelope ${opening ? 'is-open' : ''}`} role="dialog" aria-label="Invitation envelope">
      <div className="flap flap-top" />
      <div className="flap flap-bottom" />
      <div className="flap flap-left" />
      <div className="flap flap-right" />
      <svg className="env-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 0L50 50M100 0L50 50M0 100L50 50M100 100L50 50" />
      </svg>
      <button className="seal" onClick={open} aria-label={label}>
        <span className="seal-ring" />
        <span className="seal-text">{label}</span>
      </button>
    </div>
  )
}
