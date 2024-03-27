import whats from "../assets/whats.jpg";
import "../styles/promociones.css"; 
import tel from "../assets/telefono.png"
import etiqueta from "../assets/etiqueta-de-precio.png"
import { useEffect, useState, useCallback } from "react";
import { Link } from "react-scroll";

export const ButtonFixed = () => {
    //Script para comprobar la altura del scroll
    const [openMenu, isOpenMenu] = useState(false);
    const [show, setShow] = useState(false)
    const [y, setY] = useState(document.scrollingElement.scrollHeight); 
  
    const handleNavigation = useCallback(() => { //te regresa la llamada
    // console.log(openMenu)
      if (y > window.scrollY) { //verifica la altura del documento para definir si sube o baja
        // console.log("scrolling up");
        if (y < 100) { //Detectamos cuando estamos más arriba de 100px del top de la pantalla   //este if se colocó dentro de la detección de subir para detectar cuando estemos 
        // console.log("scrolling up"); //más arriba de 100px y desaparecer
          setShow(false)
        }
      } else if (y < window.scrollY) { //detecta cuando bajamos el scroll
        setShow(true)
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
    <div className={`container-fixed animado ${show ? "show" : ""}`}>
      <div className="tel-fixed">
      <a href="tel:5652700762" target="_blank" rel="noopener noreferrer">
        <img src={tel} alt="Icono Teléfono" />
      </a>
      </div>
      <div className="urgencias-fixed">
        <a href="https://api.whatsapp.com/send?phone=525652700762" target="_blank" rel="noopener noreferrer">
          <img src={whats} alt="Icono WhatsApp" />
        </a>
      </div>
      <div className="txt-urgencia">
        <h4>Urgencias Dentales</h4>
      </div>
      <div className="to-promos">
        <Link
          to="promo"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="menu-link link-promo"
          onClick={() => isOpenMenu(false)}
        >
          <img src={etiqueta} alt="Etiqueta de descuento" />
        </Link>
      </div>
    </div>
  );
}