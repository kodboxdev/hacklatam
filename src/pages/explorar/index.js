import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import fire from "../../icons/fire.png";

import star from "../../icons/star2.png";
import calendar from "../../icons/calendar.png";
import arrow from "../../icons/arrow.png";
import bookmark from "../../icons/bookmark2.png";
import user2 from "../../icons/user2.jpg";
import formula from "../../icons/integral.jpg";

import triangle from "../../icons/triangle.png";
import triangle2 from "../../icons/triangle2.png";
import user from "../../icons/icon-user.png";
import './style.css'

const TendenciaPage = () => {
  return (
    <div>
      <div className="tendencias">
        <div className="titulo-ten">
          <p className="titu">Preguntas tendencia</p>
          <img src={fire} alt="logo" className="logo" />
        </div>

        <div className="tarjetapre">
          <div className="ttar-e">
            <p className="titulo-t">¿Que es la masa atomica? definiciones</p>
            <p className="pre-t">105 personas</p>
          </div>

          <div className="ttar-e">
            <p className="titulo-t">¿Cuando inicio la I guerra mundial?</p>
            <p className="pre-t">20 personas</p>
          </div>

          <div className="ttar-e">
            <p className="titulo-t">¿Cual es la estructura de la tierra?</p>
            <p className="pre-t">15 personas</p>
          </div>

          <div className="ttar-e">
            <p className="titulo-t">¿Cual es el pais con mas habitantes?</p>
            <p className="pre-t">10 personas</p>
          </div>
        </div>

        <div className="filtrado">

          <div className="filtro">
          <img src={star} alt="logo" className="logo" />
          <p>Mas popular</p>
          <img src={arrow} alt="logo" className="logo" />
          </div>

          <div className="filtro">
          <img src={calendar} alt="logo" className="logo" />
          <p>Mas popular</p>
          <img src={arrow} alt="logo" className="logo" />
          </div>

          <div className="filtro">
          <img src={bookmark} alt="logo" className="logo" />
          <p>Mas popular</p>
          <img src={arrow} alt="logo" className="logo" />
          </div>

        </div>

        <div className="titulo-ten2">
          <p className="titu2">Preguntas </p>
          <img src={user} alt="logo" className="logous" />
        </div>

        <div className="pregunta-res1-ten">

        <img src={user2} alt="logo" className="user-pregunta-foto-res1-ten" />

        <div className="cali">
        <img src={triangle} alt="logo" className="cali-sub" />
        <p className="morado">15</p>
        <img src={triangle2} alt="logo" className="cali-baj" />

        </div>
        
        <div className="texto-res1-ten">
          <p className="text-publicado-res1-ten">Publicado por mariaLopez</p>

          <p className="text-pregunta-res1-ten">
            ¿ Como puedo resolver esta integral ?
          </p>

          <p className="text-informa-res1-ten">
            Hola no se si puedan ayudarme con esta integral <br></br>
            no soy muy buena con el tema gracias :)
          </p>
        </div>
        <img src={formula} alt="logo" className="formula-res1-ten" />
        
        <p className="text-fecha-res1-ten">20 Feb 2021</p>
      </div>

      </div>
    </div>
  );
};

export default TendenciaPage;
