
export default function Dashboard(){
  return (
    <section className="dashboard">
      <h2>Smart Dashboard</h2>

      <div className="dash-grid">
        <div className="panel big">
          <h3>LIVE Pull Feed</h3>

          <ul>
            <li>🔥 SSR HIT - PSA10 Pikachu</li>
            <li>⚡ Creator BOX trending</li>
            <li>💎 Marketplace volume pumping</li>
            <li>🚀 VIP users increasing</li>
          </ul>
        </div>

        <div className="panel">
          <h3>Total Assets</h3>
          <span>$18,240</span>
        </div>

        <div className="panel">
          <h3>Point Balance</h3>
          <span>124,500PT</span>
        </div>

        <div className="panel">
          <h3>Shipping</h3>
          <span>3 Pending</span>
        </div>
      </div>
    </section>
  )
}
