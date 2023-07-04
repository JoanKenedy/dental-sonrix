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
        "La Odontología General es la especialidad que se centra en el diagnóstico, tratamiento y prevención de los problemas primarios que tienen que ver con la salud bucodental. Incluye no sólo a los problemas que afectan a los dientes, sino también a las encías, el tejido periodontal y la articulación temporomandibular.",
    },
    {
      id: 2,
      title: "Odontologia Estética",
      imgSrc: Services2,
      texto:
        "Un candidato para la estétetica restauradora debe visitar a su dentista general, quien formulará un plan de tratamiento para lograr el resultado deseado. En Dental Sonrix y nuestro enfoque dinámico e innovador en el manejo de la estética dental nos diferencea de los demas.",
    },
    {
      id: 3,
      title: "Ortodoncia",
      imgSrc: Services3,
      texto:
        "La ortodoncia corrige los defectos de la posición dental para mantener una boca perfecta y sana. En Dental Sonrix, somos especialistas en ortodoncia y realizamos diferentes tipos de tratamientos para adaptarnos a tus necesidades.",
    },
    {
      id: 4,
      title: "Endodncia",
      imgSrc: Services4,
      texto:
        "La endodoncia es un procedimiento que tiene como finalidad preservar las piezas dentales dañadas, evitando así su pérdida. Para ello, se extrae la pulpa dental y la cavidad resultante, se rellena y sella con material inerte y biocompatible.",
    },
    {
      id: 5,
      title: "Prótesis ",
      imgSrc: Services5,
      texto:
        "Las prótesis dentales representan una solución apropiada para aquellas personas que necesitan recuperar el correcto funcionamiento de la boca, ya que se trata de dispositivos diseñados especialmente para reemplazar los dientes perdidos y favorecer la oclusión dental.",
    },
    {
      id: 6,
      title: "Cirugía Oral",
      imgSrc: Services6,
      texto:
        "La cirugía oral es aquella que se realiza en la boca, conocida en odontología como cavidad oral. Se emplea en aquellos casos en los que, por ejemplo, se necesita realizar una elevación del seno maxilar o para promover la regeneración ósea. También cuando se llevan a cabo extracciones complejas o cirugías de la encía.",
    },
    {
      id: 7,
      title: "Implantología",
      imgSrc: Services7,
      texto:
        "La implantología dental es la disciplina encargada del reemplazo de las piezas dentales perdidas mediante la colocación quirúrgica de un aditamento intraóseo (implante dental) y un aditamento protésico (corona, puente o prótesis), tanto en el maxilar como en la mandíbula.",
    },
    {
      id: 8,
      title: "Periodoncia",
      imgSrc: Services8,
      texto:
        "La periodoncia es el área de la Odontología que se encarga del estudio, prevención y tratamiento de aquellas patologías que afectan a los tejidos que protegen, rodean y sujetan los dientes: encía, hueso alveolar, ligamento periodontal y cemento radicular.",
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
          <h2>Odontología general</h2>
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
          <h2>Cirugía Oral </h2>
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
          <h2>Implantología</h2>
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
            Dental Sonrix <br /> Trabaja para ti{" "}
          </h2>

          <p>
            Estamos para brindarte una atención personalizada y un servicio
            integral para lograr que tu sonrisa se vea como la imaginas.
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
