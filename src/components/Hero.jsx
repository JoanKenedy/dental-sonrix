import React from "react";
import "../styles/hero.css";
import Foto1 from "../assets/hero.jpg";
import Foto2 from "../assets/dr-mayte.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={Foto1} alt="" className="img-escritorio" />
      <img src={Foto2} alt="" className="img-movil" />
      <div className="texto-hero">
        <div className="container-texto-hero">
          <h2>Dental Sonrix</h2>
          <p>Tu mejor opción para volver a sonreir</p>
        </div>
      </div>
    </div>
  );
};
export default Hero;
