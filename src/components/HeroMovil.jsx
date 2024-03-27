// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// import required modules
import { EffectFade, Autoplay } from "swiper/modules";
import Slider1 from "../assets/dr-mayte.webp";
import Slider2 from "../assets/galery-3.webp";
import "../styles/heromovil.css";

const HeroMovil = () => {
  return (
    <div className="slider" id="inicio">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Slider1} className="img-slider" alt="Fotografía del slider principal"/>
          <div className="texto-hero">
            <div className="container-texto-hero">
              <h2>Dental Sonrix</h2>
              <p>Tu mejor opción para volver a sonreír</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slider2} className="img-slider" alt="Fotografía del slider principal"/>
          <div className="texto-hero">
            <div className="container-texto-hero">
              <h2>Dental Sonrix</h2>
              <p>Recupera tu confianza con nosotros</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroMovil;
