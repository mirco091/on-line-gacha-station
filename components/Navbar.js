export default function Navbar(){
  return (
    <header className="navbar">
      <div className="brand">
        <div className="brandMark">OS</div>
        <div>
          <strong>ORIPA STATION</strong>
          <span>Next-Gen Pull Economy</span>
        </div>
      </div>
      <nav>
        <a href="#live">Live Pull</a>
        <a href="#boxes">Creator BOX</a>
        <a href="#proof">Proof</a>
        <a href="#dashboard">Dashboard</a>
      </nav>
      <button className="walletBtn">Connect Wallet</button>
    </header>
  )
}
