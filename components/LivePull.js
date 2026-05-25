import { liveFeed } from '../data/boxes'

export default function LivePull(){
  return (
    <section className="section liveSection" id="live">
      <div className="livePanel">
        <div>
          <span className="pill">LIVE OPEN NOW</span>
          <h2>世界中の開封がリアルタイムで流れる。</h2>
          <p>SSR排出、Creator BOXの急上昇、発送依頼、マーケット売買をライブフィード化。</p>
        </div>
        <div className="feed">
          {liveFeed.map((item, i)=> <div className="feedItem" key={i}>{item}</div>)}
        </div>
      </div>
    </section>
  )
}
