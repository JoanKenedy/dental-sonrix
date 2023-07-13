import React from "react";
import promocion1 from "../assets/blanqueamiento-cuadrado-dentix.jpg";
import promocion2 from "../assets/limpieza-cuadrado-sonrix.jpg";
import "../styles/promociones.css";

const Promociones = ()  => {
    return(
        <div className="promo">
            <div className="title"><h2>Promociones</h2></div>
            <section className="promociones">
                <img src="/src/assets/blanqueamiento-cuadrado-dentix.jpg" alt="" className="promotion-img" />
                <img src="/src/assets/limpieza-cuadrado-sonrix.jpg" alt="" className="promotion-img" />
            </section>
        </div>
    );
};

export default Promociones;