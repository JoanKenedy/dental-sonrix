import React, { useState } from "react";
import Services1 from "../assets/biomimetica.png";
import Services2 from "../assets/estetica.png";
import Services3 from "../assets/ortodoncia.png";
import Services4 from "../assets/endodoncia.png";
import Services5 from "../assets/maxilar.png";
import Services6 from "../assets/invasiva.png";
import Services7 from "../assets/implantologia.png";
import Services8 from "../assets/cirugia-bucal.png";
import "../styles/services.css";

const Services = () => {
  const Servicios = [
    {
      id: 1,
      title: "Odontología General",
      imgSrc: Services1,
      texto:
        "Es la especialidad que se centra en el diagnóstico, tratamiento y prevención de los problemas primarios de la salud bucodental. Estos incluyen problemas que afectan a los dientes, a las encías, el tejido periodontal y la articulación temporomandibular.",
    },
    {
      id: 2,
      title: "Odontología Estética",
      imgSrc: Services2,
      texto:
        "Un candidato para la estética restauradora, primero debe agendar una cita general para formular un plan de tratamiento y lograr el resultado deseado. En Dental Sonrix, es nuestro enfoque dinámico e innovador en el manejo de la estética dental, el que nos diferencia de los demás.",
    },
    {
      id: 3,
      title: "Ortodoncia",
      imgSrc: Services3,
      texto:
        "Corrige los defectos de la posición dental para mantener una boca perfecta y sana. En Dental Sonrix, somos especialistas en ortodoncia y realizamos diferentes tipos de tratamientos para adaptarnos a tus necesidades.",
    },
    {
      id: 4,
      title: "Endodoncia",
      imgSrc: Services4,
      texto:
        "Es un procedimiento que tiene como finalidad preservar las piezas dentales dañadas, evitando su pérdida. Para ello, se extrae la pulpa dental y la cavidad resultante, se rellena y sella con material inerte y biocompatible.",
    },
    {
      id: 5,
      title: "Prótesis",
      imgSrc: Services5,
      texto:
        "Representan una solución apropiada para aquellas personas que necesitan recuperar el correcto funcionamiento de la boca, ya que se trata de dispositivos diseñados especialmente para reemplazar los dientes perdidos y favorecer la oclusión dental.",
    },
    {
      id: 6,
      title: "Cirugía Oral",
      imgSrc: Services6,
      texto:
        "Se emplea en aquellos casos en los que, por ejemplo, se necesita realizar una elevación del seno maxilar o para promover la regeneración ósea. También cuando se llevan a cabo extracciones complejas o cirugías de la encía.",
    },
    {
      id: 7,
      title: "Implantología Dental",
      imgSrc: Services7,
      texto:
        "Es la disciplina encargada del reemplazo de las piezas dentales perdidas mediante la colocación quirúrgica de un aditamento intraóseo (implante dental) y un aditamento protésico (corona, puente o prótesis), tanto en el maxilar como en la mandíbula.",
    },
    {
      id: 8,
      title: "Periodoncia",
      imgSrc: Services8,
      texto:
        "Es la encargada del estudio, prevención y tratamiento de aquellas patologías que afectan a los tejidos que protegen, rodean y sujetan los dientes: encía, hueso alveolar, ligamento periodontal y cemento radicular.",
    },
  ];
  const [isModal, setIsModal] = useState(false);
  const handleModal = (e) => {
    setIsModal(true);
    let event = e.target.id;
    openModal(event);
  };
  const openModal = (event) => {
    let modalContainer = document.getElementById("modalContainer");
    modalContainer.innerHTML = "";
    Servicios.filter((item) => item.id == event).map((item) => {
      modalContainer.innerHTML += `
       <img src=${item.imgSrc} alt="" />
       <h2>${item.title} </h2>
       <p>${item.texto} </p>
       <a
       href="https://api.whatsapp.com/send?phone=525652700762"
       target="_blank"
            id="btnAncla"
            
          >
          
            Contacto
          </a>
      
       `;
    });
  };

  return (
    <div className="services" id="servicios">
      <h2 className="title-services">Servicios</h2>
      <div className="container-services">
        <div className="item-services">
          <img src={Services1} alt="" />
          <h2>Odontología General</h2>
          <button
            className="btn-services"
            id="1"
            onClick={(e) => handleModal(e, !isModal)}
          >
            Ver más
          </button>
        </div>
        <div className="item-services">
          <img src={Services2} alt="" />
          <h2>Odontología Estética</h2>
          <button
            className="btn-services"
            id="2"
            onClick={(e) => handleModal(e, !isModal)}
          >
            Ver más
          </button>
        </div>
        <div className="item-services">
          <img src={Services3} alt="" />
          <h2>Ortodoncia</h2>
          <button
            className="btn-services"
            id="3"
            onClick={(e) => handleModal(e, !isModal)}
          >
            Ver más
          </button>
        </div>
        <div className="item-services">
          <img src={Services4} alt="" />
          <h2>Endodoncia</h2>
          <button
            className="btn-services"
            id="4"
            onClick={(e) => handleModal(e, !isModal)}
          >
            Ver más
          </button>
        </div>
        <div className="item-services">
          <img src={Services5} alt="" />
          <h2>Prótesis</h2>
          <button
            className="btn-services"
            id="5"
            onClick={(e) => handleModal(e, !isModal)}
          >
            Ver más
          </button>
        </div>
        <div className="item-services">
          <img src={Services6} alt="" />
          <h2>Cirugía Oral</h2>
          <button
            className="btn-services"
            id="6"
            onClick={(e) => handleModal(e, !isModal)}
          >
            Ver más
          </button>
        </div>
        <div className="item-services">
          <img src={Services7} alt="" />
          <h2>Implantología Dental</h2>
          <button
            className="btn-services"
            id="7"
            onClick={(e) => handleModal(e, !isModal)}
          >
            Ver más
          </button>
        </div>
        <div className="item-services">
          <img src={Services8} alt="" />
          <h2>Periodoncia</h2>
          <button
            className="btn-services"
            id="8"
            onClick={(e) => handleModal(e, !isModal)}
          >
            Ver más
          </button>
        </div>
        <div className="item-services item-8">
          <h2>
            Dental Sonrix <br/> Trabaja para ti{" "}
          </h2>

          <p>
            Estamos para brindarte una atención personalizada y un servicio integral, para lograr que tu sonrisa se 
            vea como la imaginas.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=525652700762"
            target="_blank"
          >
            Contacto
          </a>
        </div>
      </div>
      <div
        className={`modal-services-home ${
          isModal ? "modal-services-home openModal" : ""
        }`}
      >
        <i class="fa-solid fa-x" onClick={() => setIsModal(false)}></i>
        <div className="container-modal-services" id="modalContainer"></div>
      </div>
    </div>
  );
};


export default Services;
