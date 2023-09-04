import React, { Component , useState, useEffect } from "react";
import "../styles/hero.css";
import Foto1 from "../assets/hero.jpg";
import Foto2 from "../assets/dr-mayte.jpg";
import Promo from "../assets/promo-jornada.jpeg";
import "../styles/modal.css";

const Hero = () => {
  /* 
  //Funciones para parecer el modela de las promociones
  const [modalOpen, setmodalOpen] = useState(false);

  function Open() {
    setmodalOpen(true);
  }
    
  function modalClose() {
    setmodalOpen(false);
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      Open();
    }, 2000);
    return () => clearTimeout(timer);
  }, []); //termina script de los modales */
  return (

    <>
    {/*
    <div className="modal-promo" style={{transform: modalOpen ? 'scale(1)' : 'scale(0)'}} id="modal-promo">
      <i class="fa-solid fa-x" onClick={modalClose}></i>
      <h1>Luce una sonrisa espectacular <br /> Aprovecha nuestra promoción por tiempo limitado</h1>
      <img src={Promo} alt="" />
      <a href="https://api.whatsapp.com/send?phone=525652700762" target="_blank" id="btnContacto">Contacto</a>
    </div> */}
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
