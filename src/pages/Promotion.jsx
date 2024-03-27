import NavbarPro from "../components/NavbarPro";
import HeroPromos from "../components/HeroPromos";
import Promos from "../components/Promos";
import BarraContact from "../components/BarraContact";
import Footer from "../components/Footer";
import HeroMovil from "../components/HeroMovil";

const Home = () => {
  return (
    <div>
      <NavbarPro />
      <HeroMovil />
      <HeroPromos />
      <Promos/>
      <BarraContact />
      <Footer />
    </div>
  );
};

export default Home;
