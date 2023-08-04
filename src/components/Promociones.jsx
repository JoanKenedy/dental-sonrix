import React from "react";
import promocion1 from "../assets/blanqueamiento-cuadrado-dentix.jpg";
import promocion2 from "../assets/limpieza-cuadrado-sonrix.jpg";
import whats from "../assets/whats.jpg";
import "../styles/promociones.css";

const Promociones = () => {
  return (
    <div>
      <div className="promo">
        <div className="title">
          <h2>Promociones</h2>
        </div>
        <section className="promociones">
          <img src={promocion1} alt="" className="promotion-img" />
          <img src={promocion2} alt="" className="promotion-img" />
        </section>
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
  );
};

export default Promociones;
