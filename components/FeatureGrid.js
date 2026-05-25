const features = [
  ['Live Pull System','SSR演出、観戦、チャット、リアルタイム通知で開封をライブ体験化。'],
  ['Creator BOX Marketplace','誰でもBOXを作成・販売・収益化できるクリエイター経済圏。'],
  ['Proof Engine™','排出結果・シード・履歴を検証し、透明性スコアを表示。'],
  ['Instant Asset System','獲得後すぐに発送、保持、売却、ポイント変換、再ガチャが可能。'],
  ['Smart Shipping','倉庫・梱包・配送追跡・発送ステータスを一元管理。'],
  ['Risk Monitor','KYC、BOT対策、不正検知、リスクスコア、監査ログを統合。']
]

export default function FeatureGrid(){
  return (
    <section className="section">
      <div className="sectionHead">
        <span>FEATURES</span>
        <h2>ガチャ体験を、金融UIレベルの基盤へ。</h2>
      </div>
      <div className="featureGrid">
        {features.map(([title, text]) => (
          <article className="featureCard" key={title}>
            <div className="iconGlow"></div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
