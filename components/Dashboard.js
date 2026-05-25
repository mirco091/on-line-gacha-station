export default function Dashboard(){
  return (
    <section className="section" id="dashboard">
      <div className="dashboardShell">
        <div className="dashTop">
          <div>
            <span className="pill">SMART DASHBOARD</span>
            <h2>入金・開封・獲得・発送・売上分配を1画面で。</h2>
          </div>
          <button className="ghostBtn">Admin Mode</button>
        </div>

        <div className="metrics">
          <div><span>Total Assets</span><b>$18,240</b></div>
          <div><span>Point Balance</span><b>124,500 PT</b></div>
          <div><span>Pending Shipping</span><b>3 Orders</b></div>
          <div><span>Risk Score</span><b>Low</b></div>
        </div>

        <div className="operationGrid">
          <div className="operationCard">
            <h3>Deposit</h3>
            <p>Solana / USDC入金、残高反映、ウォレット管理。</p>
          </div>
          <div className="operationCard">
            <h3>Pull</h3>
            <p>高速開封、演出、排出ログ、Proof ID発行。</p>
          </div>
          <div className="operationCard">
            <h3>Ship</h3>
            <p>発送依頼、梱包、追跡番号、倉庫ステータス。</p>
          </div>
          <div className="operationCard">
            <h3>Revenue</h3>
            <p>Creator売上、手数料、分配、監査ログ。</p>
          </div>
        </div>
      </div>
    </section>
  )
}
