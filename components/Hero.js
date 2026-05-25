export default function Hero(){
  return (
    <section className="hero">
      <div className="heroCopy">
        <div className="eyebrow">SOLANA / USDC READY ・ REAL CARD SHIPPING ・ PROOF ENGINE</div>
        <h1>Open the Future of Trading Card Entertainment.</h1>
        <p>
          入金、開封、獲得、発送、再流通。すべてがひとつの画面で完結する、
          次世代オリパ・トレカ経済圏プラットフォーム。
        </p>
        <div className="heroActions">
          <button className="primaryBtn">Start Opening</button>
          <button className="ghostBtn">Explore Marketplace</button>
        </div>
        <div className="trustRow">
          <div><b>$12.4M</b><span>Total Volume</span></div>
          <div><b>1.2M</b><span>Verified Pulls</span></div>
          <div><b>98.7%</b><span>Shipping Success</span></div>
        </div>
      </div>

      <div className="heroVisual">
        <div className="orbit one"></div>
        <div className="orbit two"></div>
        <div className="pullCard">
          <div className="cardTop">LIVE SSR DROP</div>
          <div className="cardImage">★</div>
          <div className="cardName">NEON LEGEND CARD</div>
          <div className="cardMeta">
            <span>Proof #8F2A</span>
            <span>1/777</span>
          </div>
        </div>
        <div className="miniToast topToast">⚡ Pull verified on-chain</div>
        <div className="miniToast bottomToast">🚚 Shipping request ready</div>
      </div>
    </section>
  )
}
