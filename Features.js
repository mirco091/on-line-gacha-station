
const items = [
  'Live Pull System',
  'Creator BOX Marketplace',
  'Proof Engine™',
  'Instant Asset System',
  'Point Economy',
  'Enterprise Security'
]

export default function Features(){
  return (
    <section className="features">
      <h2>Platform Features</h2>

      <div className="grid">
        {items.map((item)=>(
          <div className="feature" key={item}>
            <h3>{item}</h3>
            <p>
              次世代オリパ・ライブ・マーケット・透明性を統合した
              高品質プラットフォーム体験。
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
