// Small gold Ganesh ji with the blessing line below it.
// The picture is public/ganesh.png (swap the file to change it).
export default function GaneshBanner({ image, tx }) {
  return (
    <div className="ganesh">
      <img className="ganesh-img" src={image} alt="Lord Ganesha" />
      <p className="ganesh-text">{tx.ganesh}</p>
    </div>
  )
}
