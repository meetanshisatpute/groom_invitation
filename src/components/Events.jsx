import { Divider, EventIcon, Heart } from './Decor.jsx'

export default function Events({ w, tx, lang }) {
  return (
    <section className="section wc-soft center">
      <h2 className="script-h">{tx.celebrations}</h2>
      <Divider />
      <ol className="timeline">
        {w.events.map((e) => (
          <li key={e.id} className="tl-item">
            <span className="tl-node"><Heart size={12} color="var(--blue)" /></span>
            <div className="tl-card">
              <span className="tl-icon"><EventIcon name={e.icon} /></span>
              <h3>{e.name[lang]}</h3>
              <p className="tl-time">{e.time[lang]}</p>
              <p className="tl-date">{e.date[lang]}</p>
              <p className="tl-venue">{w.venue.name[lang]}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
