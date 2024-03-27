import { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../assets/logotipo-sonrix.png";
// import Menu from "../assets/menu.png";
import "../styles/navbar.css";

const Navbar = () => {
  const [openMenu, isOpenMenu] = useState(false);

  return (
    <>
      <header>
        <div className="header-top">
          <div className="item-header-top">
            <p>Teléfono</p>
            <a 
              href="tel:5652700762" 
              target="_blank"
              rel="noopener noreferrer"  
            >
              5652700762
            </a>
          </div>
          <div className="item-header-top whatsapp">
            <p>WhatsApp</p>
            <a
              href="https://api.whatsapp.com/send?phone=525652700762"
              target="_blank"
              rel="noopener noreferrer"
            >
              5652700762
            </a>
          </div>
          <div className="urgencias item-header-top">
            <div className="btn-urgencias">
              <a
                href="https://api.whatsapp.com/send?phone=525652700762"
                target="_blank"
                rel="noopener noreferrer"
              >
                Urgencias Dentales
              </a>
            </div>
          </div>
        </div>
        <div className="menu">
          <div className="container-menu">
            <div className="container-logo">
              <img src={Logo} alt="Logo de Dental Sonrix" />
            </div>
            <nav className={`menu-nav ${openMenu ? "openMenu" : ""}`}>
              <Link
                to="/"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="menu-link"
                onClick={() => isOpenMenu(false)}
                aria-label="Ir a la sección de inicio"
              >
                Inicio
              </Link>
              <Link
                to="nosotros"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="menu-link"
                onClick={() => isOpenMenu(false)}
                aria-label="Ir a la sección de nosotros"
              >
                Nosotros
              </Link>
              <Link
                to="servicios"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="menu-link"
                onClick={() => isOpenMenu(false)}
                aria-label="Ir a la sección de servicios"
              >
                Servicios
              </Link>
              <Link
                to="promo"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="menu-link"
                onClick={() => isOpenMenu(false)}
                aria-label="Ir a la sección de promociones"
              >
                Promociones
              </Link>
              <Link
                to="ubicacion"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="menu-link"
                onClick={() => isOpenMenu(false)}
                aria-label="Ir a la sección de ubicación"
              >
                Ubicación
              </Link>
              <a
                href="https://api.whatsapp.com/send?phone=525652700762"
                target="_blank"
                className="agendar menu-link nav-contacto"
                onClick={() => isOpenMenu(false)}
                rel="noopener noreferrer"
              >
                Agendar cita
              </a>
              <div className="btn-urgencias">
              <a
                href="https://api.whatsapp.com/send?phone=525652700762"
                target="_blank"
                rel="noopener noreferrer"
              >
                Urgencias Dentales
              </a>
            </div>
            </nav>
            <button className={`btn-menu ${openMenu ? "open" : ""}`} onClick={() => isOpenMenu(!openMenu)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
