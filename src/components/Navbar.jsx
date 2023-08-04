import React, { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../assets/logotipo-sonrix.png";
import Menu from "../assets/menu.png";
import "../styles/navbar.css";

const Navbar = () => {
  const [openMenu, isOpenMenu] = useState(false);

  return (
    <>
      <header>
        <div className="header-top">
          <div className="item-header-top">
            <p>Teléfono</p>
            <a href="tel:5652700762" target="_blank">
              5652700762
            </a>
          </div>
          <div className="item-header-top whatsapp">
            <p>Whatsapp</p>
            <a
              href="https://api.whatsapp.com/send?phone=525652700762"
              target="_blank"
            >
              +525652700762
            </a>
          </div>
          <div className="urgencias item-header-top">
            <div className="btn-urgencias">
              <a
                href="https://api.whatsapp.com/send?phone=525652700762"
                target="_blank"
              >
                Urgencias Dentales
              </a>
            </div>
          </div>
        </div>
        <div className="menu">
          <div className="container-menu">
            <div className="container-logo">
              <img src={Logo} alt="" />
            </div>
            <nav className={`menu-nav ${openMenu ? "openMenu" : ""}`}>
              <Link
                to="inicio"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className="menu-link"
                onClick={() => isOpenMenu(false)}
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
              >
                Ubicación
              </Link>
              <a
                href="https://api.whatsapp.com/send?phone=525652700762"
                target="_blank"
                className="agendar menu-link nav-contacto"
                onClick={() => isOpenMenu(false)}
              >
                Agendar cita
              </a>
              <div className="btn-urgencias">
              <a
                href="https://api.whatsapp.com/send?phone=525652700762"
                target="_blank"
              >
                Urgencias Dentales
              </a>
            </div>
            </nav>
            <div className="btn-menu" onClick={() => isOpenMenu(!openMenu)}>
              <img src={Menu} alt="" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
