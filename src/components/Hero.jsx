import React, { Component , useState, useEffect } from "react";
import { Link } from "react-scroll";
import "../styles/hero.css";
import Foto1 from "../assets/bg-sonrix.jpg";
import Foto2 from "../assets/dr-mayte.jpg";
import Promo from "../assets/buenfin.jpg";
import "../styles/modal.css";

const Hero = () => {
  //Funciones para parecer el modal de las promociones
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
  }, []); //termina script de los modales
  return (

    <>
    {/* Inicia HTML del modal */}
    <div className="modal-promo" style={{transform: modalOpen ? 'scale(1)' : 'scale(0)'}} id="modal-promo">
      <i class="fa-solid fa-x" onClick={modalClose}></i>
      <h1>Aprovecha nuestras promociones por BUEN FIN :)</h1>
      <img src={Promo} alt="" />
      <div className="botones-modal">
        <a href="https://api.whatsapp.com/send?phone=525652700762" target="_blank" id="btnContacto">Contacto</a>
        <Link
            to="promo"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="promos-modal"
            onClick={modalClose}
          >
            Más Información
          </Link>
      </div>
    </div>
    {/* Termina HTML del modal */}
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
