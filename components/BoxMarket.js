import { boxes } from '../data/boxes'

export default function BoxMarket(){
  return (
    <section className="section" id="boxes">
      <div className="sectionHead">
        <span>CREATOR BOX MARKETPLACE</span>
        <h2>誰でもBOXを作り、誰でも経済圏に参加できる。</h2>
      </div>
      <div className="boxGrid">
        {boxes.map(box => (
          <article className="boxCard" key={box.id}>
            <div className={'boxArt theme' + box.id}>
              <span>{box.theme}</span>
            </div>
            <div className="boxInfo">
              <h3>{box.title}</h3>
              <p>{box.creator}</p>
              <div className="boxStats">
                <span>{box.price}</span>
                <span>{box.rarity}</span>
                <span>{box.volume}</span>
              </div>
              <button>Open BOX</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
