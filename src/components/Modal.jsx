import React, { useState } from "react";
import "../styles/modal.css";


const Modal = () => {
  
  return (
      <div className="modal-promo" id="modal">
        <i class="fa-solid fa-x" onClick={close()}></i>
        <h1>Jornada de limpieza</h1>
        <img src={Promo} alt="" />
      </div>
  );
};

export default Modal;