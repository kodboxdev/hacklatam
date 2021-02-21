import React, { Component } from "react";
import { Link, Router, Switch, Route } from "react-router-dom";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";


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
import pin from "../../icons/pin.png";

const Feed = () => {
  return (
    <>
      <div className="container">
        <div className="pregunta-user">
          <input
            placeholder="Tu pregunta ..."
            className="input-user"
            type="text"
          />
          <img src={user1} alt="logo" className="user-pregunta-icono" />

          <div className="files">
            <img src={table} alt="logo" className="icono-files" />
            <img src={link} alt="logo" className="icono-files" />
            <img src={doc} alt="logo" className="icono-files" />
            <img src={img} alt="logo" className="icono-files" />
            <img src={code} alt="logo" className="icono-files" />
          </div>
          <img src={send} alt="logo" className="send-icono" />
        </div>

        <div className="feed">
          <p>Feed</p>
          <div className="pregunta">
            <img src={user2} alt="logo" className="user-pregunta-foto" />
            <div className="texto">
              <p className="text-publicado">Publicado por mariaLopez</p>

              <p className="text-pregunta">
                <Link to="/responder">
                  ¿ Como puedo resolver esta integral ?
                </Link>
              </p>

              <p className="text-informa">
                Hola no se si puedan ayudarme con esta integral <br></br>
                no soy muy buena con el tema gracias :)
              </p>
            </div>
            <img src={formula} alt="logo" className="formula" />
            <img src={pin} alt="logo" className="pin" />
            <p className="text-fecha">20 Feb 2021</p>
          </div>
          <div className="respuestas">
            <div className="respuesta">
              <img src={user3} alt="logo" className="user-respuesta-foto" />
              <div className="texto-res">
                <p className="titulo-repuesta">Publicado por Jazmin</p>
                <p className="text-repuesta">
                  Hola compañera, te dejo mis notas que me han ayudado a
                  resolver algunos ejercicios
                  <p className="link">mis-notas.pdf</p>
                </p>
              </div>
            </div>
            <div className="respuesta">
              <img src={user4} alt="logo" className="user-respuesta-foto" />
              <div className="texto-res">
                <p className="titulo-repuesta">Publicado por Pepe</p>
                <p className="text-repuesta">
                  Hola que gusto, no te preocupes yo tambien era malo en
                  integrales <br></br>
                  pero gracias a esta web mejore mucho
                  <p className="link">Ejercicios-explicacion-integrales.com</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
