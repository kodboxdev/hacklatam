import React, { Component } from "react";

import  bookmark  from "../../../icons/bookmark.png";
import  puntor  from "../../../icons/puntorojo.png";
import  puntoa  from "../../../icons/puntoazul.png";
import  puntoam  from "../../../icons/puntoamarillo.png";
import "./style.css";

const Siguiendo = () => {
  return (
    <>
      <div className="tarjeta">
        <div className="titulo">
          <p>Temas siguiendo</p>
          <img src={bookmark} alt="logo" className="logo" />
        </div>
        <div className="temas">
          <div className="tema">
              <h6>Social</h6>
              <img src={puntor} alt="logo" className="" />
          </div>
          <div className="tema">
              <h6>Leyes</h6>
              <img src={puntoa} alt="logo" className="" />
          </div>
          <div className="tema">
              <h6>Fisica</h6>
              <img src={puntoam} alt="logo" className="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Siguiendo;
