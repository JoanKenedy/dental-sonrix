import React from "react";
import promocion1 from "../assets/blanqueamiento-cuadrado-dentix.jpg";
import promocion2 from "../assets/limpieza-cuadrado-sonrix.jpg";
import "../styles/promociones.css";

const Promociones = () => {
  return (
    <div className="promo">
      <div className="title">
        <h2>Promociones</h2>
      </div>
      <section className="promociones">
        <img src={promocion1} alt="" className="promotion-img" />
        <img src={promocion2} alt="" className="promotion-img" />
      </section>
    </div>
  );
};

export default Promociones;
