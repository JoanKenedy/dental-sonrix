import React from "react";
import "../styles/barra.css";
const BarraContact = () => {
  return (
    <div className="barra-contact">
      <div className="container-contact">
        <div className="item-contact">
          <h3>Contacto</h3>
          <p>Agenda tu cita en solo unos minutos.</p>
          <a
            href="https://api.whatsapp.com/send?phone=525652700762"
            target="_blank"
            className="btn-rosa"
          >
            Agendar cita
          </a>
        </div>
        <div className="item-contact">
          <h3>Nuestros horarios</h3>
          <div className="sub-item-contact">
            <p>Lunes a Sábado </p>
            <p>9:00 am a 8:00 pm</p>
            <p>Podemos atender fuera del horario referido con previa cita.</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default BarraContact;
