import React from "react";

import "./style.css";

import eye from "../../../icons/eye.png";
import comment from "../../../icons/comment.png";
import secure from "../../../icons/secure.png";

export const Etiquetas = () => {
  return (
    <div className="tarjeta-eti">
      <div className="titulo-eti">
        <p>Etiquetas</p>
      </div>
      <div className="etiqu">
        <p className="eti-eti">- integral</p>
        <p className="eti-eti">- Ejercicios</p>
        <p className="eti-eti">- Matematicas</p>
      </div>

      <div className="icon-eti">
        <div>
          <img src={eye} alt="logo" className="icono-eti" />
          <p className="green">150</p>
        </div>
        <div>
          <img src={comment} alt="logo" className="icono-eti" />
          <p className="orange">150</p>
        </div>

        <div>
          <img src={secure} alt="logo" className="icono-eti" />
          <p className="red">cerrado</p>
        </div>
      </div>
    </div>
  );
};
export default Etiquetas;
