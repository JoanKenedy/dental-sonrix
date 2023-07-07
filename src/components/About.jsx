import React, { useState } from "react";
import { Element } from "react-scroll";
import "../styles/about.css";

const About = () => {
  const Somos = [
    {
      id: 1,
      title: "Nosotros",
      texto:
        "Somos una clínica dental vanguardista y actualizada en los últimos conceptos de la odontología, permitiéndonos ofrecer tratamientos innovadores y estéticos, devolviendo la salud y función de las estructuras orales.",
      texto2:
        "Trabajando de la mano con un equipo de especialistas, ofreciendo la más alta calidad en cada uno de nuestros servicios. Con un enfoque en odontología estética.",
    },
    {
      id: 2,
      title: "Nosotros",
      texto:
        "Todos los integrantes de Dental Sonrix estamos avalados y certificados en nuestra especialidad. Estamos para brindarte una atención personalizada y un servicio integral, para lograr que tu sonrisa se vea como la imaginas.",
      texto2:
        "Nos mantenemos constantemente actualizados para ofrecerte lo último en tecnología y los tratamientos más innovadores.",
    },
  ];

  const [isSlider, setIsSlider] = useState(false);

  const hadleSlider = (e) => {
    setIsSlider(!isSlider);
    let event = e.target.id;
    console.log(event);
    textSlider(event);
  };

  const textSlider = (event) => {
    let container = document.getElementById("aboutSlider");
    container.innerHTML = "";
    Somos.filter((text) => text.id == event).map((text) => {
      container.innerHTML += `
      <h2 className="text-title" >${text.title}</h2>
        <p className="text-event" id="texto1">${text.texto}</p>
        <p className="text-event" id="texto2">${text.texto2}</p>
        
        
        `;
    });
  };
  return (
    <div className="about" id="nosotros">
      <div className="container-about">
        <div className="about-slider" id="aboutSlider">
          <div className={`textos ${isSlider ? "show" : ""}`}>
            <h2>Nosotros</h2>
            <span>
              Somos una clínica dental vanguardista y actualizada en los últimos conceptos 
              de la odontología, permitiéndonos ofrecer tratamientos innovadores y estéticos, 
              devolviendo la salud y función de las estructuras orales. 
            </span>
            <span>
              Trabajando de la mano con un equipo de especialistas, ofreciendo la más alta 
              calidad en cada uno de nuestros servicios. Con un enfoque en odontología estética.
            </span>
          </div>
        </div>
        <button
          className="btn-about"
          id="1"
          onClick={(e) => hadleSlider(e, !isSlider)}
        >
          1
        </button>
        <button
          className="btn-about"
          id="2"
          onClick={(e) => hadleSlider(e, !isSlider)}
        >
          2
        </button>
      </div>
    </div>
  );
};


export default About;
