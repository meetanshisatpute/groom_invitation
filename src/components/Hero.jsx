import GaneshBanner from './GaneshBanner.jsx'
import { Chandelier, Hydrangea, Heart, Divider } from './Decor.jsx'

export default function Hero({ w, tx, lang, play }) {
  return (
    <header className={`hero wc ${play ? 'play' : ''}`}>
      <Hydrangea seed={3} size={250} className="hy hy-tl" />
      <Hydrangea seed={8} size={230} className="hy hy-tr" flip />
      <Hydrangea seed={5} size={300} className="hy hy-bl" />
      <Hydrangea seed={11} size={260} className="hy hy-br" flip />
      <Chandelier className="chand chand-l" size={96} />
      <Chandelier className="chand chand-r" size={110} />

      <div className="hero-inner">
        <GaneshBanner image={w.ganeshImage} tx={tx} />
        <Heart size={20} />
        <p className="welcome serif-it">{tx.welcome}</p>
        <Divider />
        <h1 className="names">
          <span className="name n1">{w.groom}</span>
          {w.groomInfo[lang] && <span className="sub">{w.groomInfo[lang]}</span>}
          <span className="amp">&amp;</span>
          <span className="name n2">{w.bride}</span>
          {w.brideInfo[lang] && <span className="sub">{w.brideInfo[lang]}</span>}
        </h1>
        <p className="hero-date">{w.weddingDate[lang]}</p>
      </div>

      <a className="scroll-cue" href="#blessing" aria-label={tx.scroll}>
        <span>{tx.scroll}</span>
        <svg width="16" height="16" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </a>
    </header>
  )
}
