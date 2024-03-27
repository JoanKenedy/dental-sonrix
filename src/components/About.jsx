import { useState } from "react";
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


  
  const [isSelected, setIsSelected] = useState(true);
  const [actualInfo, setActualInfo] = useState(0);

  const handleSlider = (e) => {
    let event = e.target.id;
    if (event === '1') {
      setIsSelected(true);
      setActualInfo(0);
    } else {
      setIsSelected(false);
      setActualInfo(1);
    }
  };
  return (
    <div className="about" id="nosotros">
      <div className="container-about">
        <div className="about-slider" id="aboutSlider">
          <div className="textos">
            <h2>Nosotros</h2>
            <span>
              {Somos[actualInfo].texto}
            </span>
            <span>
              {Somos[actualInfo].texto2}
            </span>
          </div>
        </div>
        <button
          className={`btn-about ${isSelected ? "selected" : ""}`}
          id="1"
          onClick={(e) => handleSlider(e)}
        >
          1
        </button>
        <button
          className={`btn-about ${isSelected ? "" : "selected"}`}
          id="2"
          onClick={(e) => handleSlider(e)}
        >
          2
        </button>
      </div>
    </div>
  );
};


export default About;
