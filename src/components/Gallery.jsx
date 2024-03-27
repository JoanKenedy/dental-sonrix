import "../styles/galery.css";
import galery1 from "../assets/galery-1.webp";
import galery2 from "../assets/13.webp";
import galery3 from "../assets/10.webp";
import galery4 from "../assets/9.webp";
import galery5 from "../assets/17.webp";
import galery6 from "../assets/18.webp";
import galery7 from "../assets/15.webp";
import galery8 from "../assets/galery-3-1.webp";
import galery9 from "../assets/galery-6.webp";
import galery10 from "../assets/galery-4.webp";
import galery11 from "../assets/galery-5.webp";
import galery12 from "../assets/galery-7.webp";

const Gallery = () => {
  return (
    <div className="galery">
      <h2>Más de nosotros</h2>
      <div className="container-galery">
        <div className="item-galery">
          <img src={galery1} alt="Fotografía de la Dra. Marisol con instrumentos" loading="lazy" decoding="async"/>
        </div>
        <div className="item-galery">
          <img src={galery2} alt="Fotografía de la Dra. Marisol atendiendo a un paciente" loading="lazy" decoding="async"/>
        </div>
        <div className="item-galery">
          <img src={galery3} alt="Fotografía de la Dra. Marisol frente a la cámara" loading="lazy" decoding="async"/>
        </div>
        <div className="item-galery">
          <img src={galery4} alt="Fotografía de de la Dra. Marisol atendiendo a un paciente" loading="lazy" decoding="async"/>
        </div>
        <div className="item-galery">
          <img src={galery5} alt="Escritorio de recepción" loading="lazy" decoding="async"/>
        </div>
        <div className="item-galery">
          <img src={galery6} alt="Decoración del consultorio" loading="lazy" decoding="async"/>
        </div>
        <div className="item-galery">
          <img src={galery7} alt="Fotografía de molde realizado a un paciente" loading="lazy" decoding="async"/>
        </div>
        <div className="item-galery">
          <img src={galery9} alt="Fotografía del Dr. Diego" loading="lazy" decoding="async"/>
        </div>
        <div className="item-galery">
          <img src={galery12} alt="Fotografía del Dr. Diego con la mano alzada" loading="lazy" decoding="async"/>
        </div>
        <div className="item-galery">
          <img src={galery8} alt="Fotografía de la Dra. Marisol y del Dr. Diego" loading="lazy" decoding="async"/>
        </div>
        <div className="item-galery">
          <img src={galery10} alt="Fotografía de la Dra. Marisol" loading="lazy" decoding="async"/>
        </div>
        <div className="item-galery">
          <img src={galery11} alt="Fotografía de la Dra. Marisol y del Dr. Diego" loading="lazy" decoding="async"/>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
