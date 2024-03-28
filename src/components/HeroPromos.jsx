import "../styles/hero.css";
import Foto1 from "../assets/bg-sonrix.webp";
import "../styles/modal.css";
import "../styles/promociones.css"

const HeroPromos = () => {
  return (
    <>
      <div className="hero">
      <img src={Foto1} alt="Fotografía principal del hero Dental Sonrix" className="img-escritorio" />
      <div className="texto-hero hero2">
        <div className="container-texto-hero">
          <h2>Dental Sonrix</h2>
          <p>Promociones exclusivas para ti</p>
        </div>
      </div>
    </div>
    </>
  );
};
export default HeroPromos;
