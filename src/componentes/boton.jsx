import React from "react";
import "../stylesheets/boton.css"

export default function Boton(props){

  const esNumero = valor => {
    return (/\d/.test(valor));
  }

  
    if(esNumero(props.children)){
      return(
        <div className="numero" onClick={() => props.click(props.children)}>
         {props.children}
        </div>
      )
    }
    else{
      return(
        <div className="operador" onClick={() => props.click(props.children)}>
         {props.children}
        </div>
      )
    }
}
