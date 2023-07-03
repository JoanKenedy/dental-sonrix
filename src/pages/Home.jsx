import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Galery from "../components/Galery";
import BarraContact from "../components/BarraContact";
import Footer from "../components/Footer";
import HeroMovil from "../components/HeroMovil";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroMovil />
      <Hero />
      <Services />
      <About />
      <BarraContact />
      <Galery />

      <Footer />
    </div>
  );
};

export default Home;
