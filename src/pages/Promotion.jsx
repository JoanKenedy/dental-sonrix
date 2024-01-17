import React from "react";
import NavbarPro from "../components/NavbarPro";
import HeroPromos from "../components/HeroPromos";
import About from "../components/About";
import Promos from "../components/Promos";
import Services from "../components/Services";
import Galery from "../components/Galery";
import BarraContact from "../components/BarraContact";
import Footer from "../components/Footer";
import HeroMovil from "../components/HeroMovil";
import Modal from "../components/Modal";
import Video from "../components/Video";

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
