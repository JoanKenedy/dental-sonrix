import React, { useState } from "react";
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
          <div className="item-header-top">
            <p>Whatsapp</p>
            <a
              href="https://api.whatsapp.com/send?phone=525652700762"
              target="_blank"
            >
              +525652700762
            </a>
          </div>
        </div>
        <div className="menu">
          <div className="container-menu">
            <div className="container-logo">
              <img src={Logo} alt="" />
            </div>
            <nav className={`menu-nav ${openMenu ? "openMenu" : ""}`}>
              <a href="#inicio" className="menu-link">
                Inicio
              </a>
              <a href="#nosotros" className="menu-link">
                Nosotros
              </a>
              <a href="#servicios" className="menu-link">
                Servicios
              </a>
              <a href="#ubicacion" className="menu-link">
                Ubicación
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=525652700762"
                target="_blank"
                className="menu-link nav-contacto"
              >
                Agendar cita
              </a>
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
