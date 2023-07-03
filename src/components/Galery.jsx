import React from "react";
import "../styles/galery.css";
import galery1 from "../assets/galery-1.jpg";
import galery2 from "../assets/13.jpg";
import galery3 from "../assets/10.jpg";
import galery4 from "../assets/9.jpg";
import galery5 from "../assets/17.jpg";
import galery6 from "../assets/18.jpg";
import galery7 from "../assets/15.jpg";
import galery8 from "../assets/galery-3.png";
import galery9 from "../assets/galery-6.jpg";
import galery10 from "../assets/galery-4.jpg";
import galery11 from "../assets/galery-5.jpg";
import galery12 from "../assets/galery-7.jpg";

const Galery = () => {
  return (
    <div className="galery">
      <h2>Más de nosotros</h2>
      <div className="container-galery">
        <div className="item-galery">
          <img src={galery1} alt="" />
        </div>
        <div className="item-galery">
          <img src={galery2} alt="" />
        </div>
        <div className="item-galery">
          <img src={galery3} alt="" />
        </div>
        <div className="item-galery">
          <img src={galery4} alt="" />
        </div>
        <div className="item-galery">
          <img src={galery5} alt="" />
        </div>
        <div className="item-galery">
          <img src={galery6} alt="" />
        </div>
        <div className="item-galery">
          <img src={galery7} alt="" />
        </div>
        <div className="item-galery">
          <img src={galery9} alt="" />
        </div>
        <div className="item-galery">
          <img src={galery12} alt="" />
        </div>
        <div className="item-galery">
          <img src={galery8} alt="" />
        </div>
        <div className="item-galery">
          <img src={galery10} alt="" />
        </div>
        <div className="item-galery">
          <img src={galery11} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Galery;
