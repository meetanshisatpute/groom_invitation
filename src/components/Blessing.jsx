import { Divider, Heart } from './Decor.jsx'

export default function Blessing({ w, tx }) {
  return (
    <section id="blessing" className="section wc-soft center">
      <Divider />
      <p className="blessing serif-it">
        {tx.blessing} <Heart size={16} />
      </p>
      <Divider />
    </section>
  )
}
