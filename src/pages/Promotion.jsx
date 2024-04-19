import NavbarPro from '../components/NavbarPro'
import HeroPromos from '../components/HeroPromos'
import Promociones from '../components/Promociones'
import BarraContact from '../components/BarraContact'
import Footer from '../components/Footer'
import HeroMovil from '../components/HeroMovil'

const Home = () => {
  return (
    <div>
      <NavbarPro />
      <HeroMovil />
      <HeroPromos />
      <Promociones />
      <BarraContact />
      <Footer />
    </div>
  )
}

export default Home
