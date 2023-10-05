import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Promociones from "../components/Promociones";
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
      <Navbar />
      <HeroMovil />
      <Hero />
      <Services />
      <About />
      <Video />
      <Promociones/>
      <BarraContact />
      <Galery />

      <Footer />
    </div>
  );
};

export default Home;
