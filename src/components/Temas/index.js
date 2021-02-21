import React, { Component } from "react";


import Siguiendo from './Temas-siguiendo';
import Tendencia from './Temas-tendencia';

import "./style.css";



const Menubar = () => {
  return (
    <>
    <div className="tarjetas">
    <Siguiendo />
    <Tendencia />
    </div>
    </>
  );
};

export default Menubar;
