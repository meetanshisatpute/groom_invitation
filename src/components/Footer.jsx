import { Heart } from './Decor.jsx'

export default function Footer({ w, tx }) {
  return (
    <footer className="footer wc center">
      <p className="serif-it">{tx.seeYou}</p>
      <p className="with-love">{tx.withLove}</p>
      <p className="foot-names">
        {w.groom} <Heart size={15} /> {w.bride}
      </p>
    </footer>
  )
}
