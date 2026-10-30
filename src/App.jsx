import { useEffect, useRef, useState } from 'react'
import { wedding, t } from './data/config.js'
import Envelope from './components/Envelope.jsx'
import Petals from './components/Petals.jsx'
import Hero from './components/Hero.jsx'
import Blessing from './components/Blessing.jsx'
import ScratchHeart from './components/ScratchHeart.jsx'
import Photo from './components/Photo.jsx'
import Events from './components/Events.jsx'
import Countdown from './components/Countdown.jsx'
import Venue from './components/Venue.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [lang, setLang] = useState('en')
  const [opened, setOpened] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [hasMusic, setHasMusic] = useState(true)
  const audioRef = useRef(null)
  const tx = t[lang]

  // Lock scroll while the envelope is closed
  useEffect(() => {
    document.body.style.overflow = opened ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [opened])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const handleOpen = () => {
    setOpened(true)
    const a = audioRef.current
    if (a) {
      a.volume = 0.6
      a.play().then(() => setPlaying(true)).catch(() => {})
    }
  }

  const toggleMusic = () => {
    const a = audioRef.current
    if (!a) return
    if (a.paused) a.play().then(() => setPlaying(true)).catch(() => {})
    else {
      a.pause()
      setPlaying(false)
    }
  }

  return (
    <div className={`app lang-${lang}`}>
      <audio ref={audioRef} src={wedding.music} loop preload="auto" onError={() => setHasMusic(false)} />

      <Envelope label={tx.tapToOpen} onOpen={handleOpen} />

      {opened && hasMusic && (
        <button className="fab fab-top" onClick={toggleMusic} aria-label={playing ? tx.musicOff : tx.musicOn}>
          {playing ? (
            <svg width="18" height="18" viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9zM16 8.500a5 5 0 0 1 0 7M18.500 6a8.500 8.500 0 0 1 0 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9zM17 9l5 6M22 9l-5 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          )}
        </button>
      )}

      <button className="fab fab-lang" onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}>
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg>
        {tx.lang}
      </button>

      <Petals />

      <main>
        <Hero w={wedding} tx={tx} lang={lang} play={opened} />
        <Blessing w={wedding} tx={tx} />
        <ScratchHeart w={wedding} tx={tx} lang={lang} />
        <Photo w={wedding} tx={tx} />
        <Events w={wedding} tx={tx} lang={lang} />
        <Countdown w={wedding} tx={tx} />
        <Venue w={wedding} tx={tx} lang={lang} />
      </main>
      <Footer w={wedding} tx={tx} />
    </div>
  )
}
