import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import fire from "../../../icons/fire.png";
import puntor from "../../../icons/puntorojo.png";
import puntoa from "../../../icons/puntoazul.png";
import puntoam from "../../../icons/puntoamarillo.png";
import "./style.css";

const Tendencia = () => {
  return (
    <>
      <div className="tarjeta">
        <div className="titulo">
          <Link  className="titulow" to="/explorar">
          <p>Temas tendencia</p>
          </Link>
          <img src={fire} alt="logo" className="logo" />
        </div>
        <div className="tem">
            <h6>#1 Integrales</h6>
            <h6>#2 Atomos</h6>
            <h6>#3 Atomos</h6>
            <h6>#4 Bucles</h6>
        </div>
      </div>
    </>
  );
};

export default Tendencia;
