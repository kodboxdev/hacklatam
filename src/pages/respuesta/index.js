
import React, {useState} from 'react'


import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./style.css";

import user1 from "../../icons/user1.jpg";
import user2 from "../../icons/user2.jpg";
import user3 from "../../icons/user3.jpg";
import user4 from "../../icons/user4.jpg";

import table from "../../icons/table.png";
import code from "../../icons/code.png";
import doc from "../../icons/doc.png";
import link from "../../icons/link.png";
import img from "../../icons/image.png";
import send from "../../icons/send.png";
import formula from "../../icons/integral.jpg";
import star from "../../icons/star.png";

import { Etiquetas } from "./Etiquetas/index";
import { Preguntas } from "./Preguntas/index";


const Index = () => {
  return (
    <>
    

      <div className="pregunta-res1">

        <img src={user2} alt="logo" className="user-pregunta-foto-res1" />
        
        <div className="texto-res1">
          <p className="text-publicado-res1">Publicado por mariaLopez</p>

          <p className="text-pregunta-res1">
            ¿ Como puedo resolver esta integral ?
          </p>

          <p className="text-informa-res1">
            Hola no se si puedan ayudarme con esta integral <br></br>
            no soy muy buena con el tema gracias :)
          </p>
        </div>
        <img src={formula} alt="logo" className="formula-res1" />
        
        <p className="text-fecha-res1">20 Feb 2021</p>
      </div>

      <div className="pregunta-user-res1">
          <input
            placeholder="Tu respuesta ..."
            className="input-user-res1"
            type="text"
          />
          <img src={user1} alt="logo" className="user-pregunta-icono-res1" />

          <div className="files-res1">
            <img src={table} alt="logo" className="icono-files-res1" />
            <img src={link} alt="logo" className="icono-files-res1" />
            <img src={doc} alt="logo" className="icono-files-res1" />
            <img src={img} alt="logo" className="icono-files-res1" />
            <img src={code} alt="logo" className="icono-files-res1" />
          </div>
          <img src={send} alt="logo" className="send-icono-res1" />
        </div>

        <div className="respuestas-res1">
            <div className="respuesta-res1">
              <img src={user3} alt="logo" className="user-respuesta-foto-res1" />
              <p className="text-fecha-res2">20 Feb 2021</p>
              <div className="texto-res-res1">
                <p className="titulo-repuesta-res2">Publicado por Jazmin</p>
                <p className="text-repuesta-res1">
                  Hola compañera, te dejo mis notas que me han ayudado a
                  resolver algunos ejercicios
                  <p className="link-res1">mis-notas.pdf</p>
                </p>
                <div className="calificado">
                  <p className="starCount">22</p>
                <img src={star} alt="logo"  className="icon-star" />
                </div>
              </div>
            </div>
            <div className="respuesta-res1">
              <img src={user4} alt="logo" className="user-respuesta-foto-res1" />
              <p className="text-fecha-res2">20 Feb 2021</p>
              <div className="texto-res-res1">
                <p className="titulo-repuesta-res2">Publicado por Pepe</p>
                <p className="text-repuesta-res1">
                  Hola que gusto, no te preocupes yo tambien era malo en
                  integrales <br></br>
                  pero gracias a esta web mejore mucho
                  <p className="link-res1">Ejercicios-explicacion-integrales.com</p>
                </p>
                <div className="calificado">
                  <p className="starCount">12</p>
                <img src={star} alt="logo" className="icon-star" />
                </div>
              </div>
            </div>
          </div>
          <Etiquetas />
          <Preguntas />

    </>
  );
};

export default Index;
