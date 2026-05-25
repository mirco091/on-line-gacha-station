import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeatureGrid from '../components/FeatureGrid'
import LivePull from '../components/LivePull'
import BoxMarket from '../components/BoxMarket'
import Dashboard from '../components/Dashboard'
import Proof from '../components/Proof'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <LivePull />
        <BoxMarket />
        <Dashboard />
        <Proof />
      </main>
      <Footer />
    </>
  )
}
