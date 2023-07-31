import React, { useState, useEffect } from "react";
import "../styles/hero.css";
import Foto1 from "../assets/hero.jpg";
import Foto2 from "../assets/dr-mayte.jpg";
import Promo from "../assets/promo-jornada.jpeg";
import "../styles/modal.css";

const Hero = () => {
  let modalPromo = document.getElementById("modal-promo");
  function Modal() {
    const [isModalPromo, setIsModalPromo] = useState(false);
      const abrirModal = () => {
        setIsModalPromo(isModalPromo);
    }
  } 
  window.addEventListener('load', Modal());
  return (

    <>
    <div className="modal-promo" id="modal-promo">
    <i class="fa-solid fa-x"></i><h1>Jornada de limpieza</h1><img src={Promo} alt="" /><a href="https://api.whatsapp.com/send?phone=525652700762" target="_blank" id="btnAncla">Contacto</a>
    </div>
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
    </>
 
  );
};
export default Hero;
