import { useState } from 'react'
import { Heart } from './Decor.jsx'

export default function Photo({ w, tx }) {
  const [failed, setFailed] = useState(false)
  return (
    <section className="section wc-soft center">
      <div className="photo-frame">
        {failed ? (
          <div className="photo-fallback" role="img" aria-label={tx.photoAlt}>
            <span className="fb-names">
              {w.groom[0]} <Heart size={18} color="var(--blue)" /> {w.bride[0]}
            </span>
          </div>
        ) : (
          <img src={w.photo} alt={tx.photoAlt} onError={() => setFailed(true)} loading="lazy" />
        )}
      </div>
    </section>
  )
}
