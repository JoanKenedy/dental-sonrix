import React, { useState } from "react";
import "../styles/about.css";

const About = () => {
  const Somos = [
    {
      id: 1,
      texto:
        "Somos tu clínica dental interdisciplinaria, integrada por  especialistas con más de 7 años de experiencia en su área.",
      texto2:
        "Estamos para brindarte una atención personalizada y un servicio integral para lograr que tu sonrisa se vea como la imaginas.",
    },
    {
      id: 2,
      texto:
        "Todos los integrantes de Dental Sonrix estamos avalados y certificados en nuestra especialidad.",
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
        <p className="text-event" id="texto1">${text.texto}</p>
        <p className="text-event" id="texto2">${text.texto2}</p>
        
        
        `;
    });
  };
  return (
    <div className="about">
      <h2>Nosotros</h2>
      <div className="container-about">
        <div className="about-slider" id="aboutSlider">
          <div className={`textos ${isSlider ? "show" : ""}`}>
            <span>
              Somos tu clínica dental interdisciplinaria, integrada por
              especialistas con más de 7 años de experiencia en su área.
            </span>
            <span>
              Estamos para brindarte una atención personalizada y un servicio
              integral para lograr que tu sonrisa se vea como la imaginas.
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
