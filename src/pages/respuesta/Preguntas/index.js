import React from "react";
import "./style.css";

import user1 from "../../../icons/user1.jpg";
import user2 from "../../../icons/user2.jpg";
import user3 from "../../../icons/user3.jpg";
import user4 from "../../../icons/user4.jpg";

export const Preguntas = () => {
  return (
    <div>
      <div className="tarjeta-preguntas">
        <p className="titulo-eti">Preguntas Relacionadas</p>

        <div className="pregunta-pre">
          <div className="pregunta-te">
            <p className="titulo-pre">¿Cual es la formula de la vaca?</p>
            <p className="publ-eti">Publicado por jazmin</p>
            <p className="repu-eti">3 respuestas</p>
          </div>

          <div className="ico">
            <img src={user2} alt="logo" className="icono-eti" />
          </div>
        </div>

        <div className="pregunta-pre">
          <div className="pregunta-te">
            <p className="titulo-pre">¿Como resulvo esta derivada?</p>
            <p className="publ-eti">Publicado por Pepe</p>
            <p className="repu-eti">3 respuestas</p>
          </div>

          <div className="ico">
            <img src={user4} alt="logo" className="icono-eti" />
          </div>
        </div>

        <div className="pregunta-pre">
          <div className="pregunta-te">
            <p className="titulo-pre">¿Cual resolver una suma de fraciones?</p>
            <p className="publ-eti">Publicado por Zoe</p>
            <p className="repu-eti">3 respuestas</p>
          </div>

          <div className="ico">
            <img src={user3} alt="logo" className="icono-eti" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preguntas;
