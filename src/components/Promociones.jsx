import React from "react";
import promocion1 from "../assets/blanqueamiento-cuadrado-dentix.jpg";
import promocion2 from "../assets/limpieza-cuadrado-sonrix.jpg";
import buenfin from "../assets/buenfin.jpg";
import whats from "../assets/whats.jpg";
import "../styles/promociones.css";
import tel from "../assets/telefono.png"
import { useEffect, useState, useCallback } from "react";

const Promociones = () => {
  //Script para comprobar la altura del scroll
  const animado = document.getElementById("animado");
  const [y,
    setY] = useState(document.scrollingElement.scrollHeight); 
  const [scrollDirection,
    setScrollDirection] = useState("you have not scrolled yet");

  const handleNavigation = useCallback((e) => { //te regresa la llamada

    if (y > window.scrollY) { //verifica la altura del documento para definir si sube o baja
      setScrollDirection("Scrolling Up");
      console.log("scrolling up");
      if (y < 100) { //Detectamos cuando estamos más arriba de 100px del top de la pantalla  
      setScrollDirection("Scrolling TOp"); //este if se colocó dentro de la detección de subir para detectar cuando estemos 
      console.log("scrolling up"); //más arriba de 100px y desaparecer
      animado.style.opacity = 0; //desaparece el botón
      }
    } else if (y < window.scrollY) { //detecta cuando bajamos el scroll
      setScrollDirection("Scrolling Down");
      console.log("scrolling down");
      animado.style.opacity = 1; //aparece el botón
    }
    setY(window.scrollY)
  }, [y]);

  useEffect(() => { //Necesario para utilizar el window add event

    window.addEventListener("scroll", handleNavigation); 

    return () => {
      window.removeEventListener("scroll", handleNavigation); //
    };
  }, [handleNavigation]); //cada vez que hagas scroll va a llamar a la función para detectAR EL CAMBIO DEL SCROLL
  //Script para comprobar la altura del scroll
  return (
    <div>
      <div className="promo">
        <div className="title">
          <h2>Promociones</h2>
        </div>
        <section className="promociones">
          <img src={buenfin} alt="" className="promotion-img buenfin" />
          <img src={promocion1} alt="" className="promotion-img" />
          <img src={promocion2} alt="" className="promotion-img" />
        </section>
      </div>
      <div className="container-fixed animado" id="animado">
        <div className="tel-fixed">
        <a href="tel:5652700762" target="_blank" rel="noopener noreferrer">
          <img src={tel} alt="" />
        </a>
        </div>
        <div className="urgencias-fixed">
          <a href="https://api.whatsapp.com/send?phone=525652700762" target="_blank" rel="noopener noreferrer">
            <img src={whats} alt="" />
          </a>
        </div>
        <div className="txt-urgencia">
          <h4>Urgencias Dentales</h4>
      </div>
      </div>
      
    </div>
  );
};

export default Promociones;
