import { Divider, PinIcon } from './Decor.jsx'

export default function Venue({ w, tx, lang }) {
  const href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(w.venue.mapsQuery)}`
  return (
    <section className="section wc-soft center">
      <span className="pin"><PinIcon /></span>
      <h2 className="script-h">{tx.venue}</h2>
      <Divider />
      <p className="venue-name">{w.venue.name[lang]}</p>
      <p className="venue-addr">{w.venue.address[lang]}</p>
      <a className="btn" href={href} target="_blank" rel="noreferrer">
        {tx.openMaps}
      </a>
    </section>
  )
}
