import './App.css';
import Boton from "./componentes/boton.jsx";
import Pantalla from "./componentes/screen.jsx"
import Clear from "./componentes/clear.jsx"
import Undo from "./componentes/undo.jsx"
import {useState} from "react";
import {evaluate} from "mathjs";

function App() {

  const [input, setInput] = useState('');

  const escribir = val => {
    setInput(input + val);
  };

  const calcular = () => {
    if (input){
      setInput(evaluate(input));
    }
  };
    

  return (
    <div className="App">
      <div className="contenedor-calculadora">
        <Pantalla par={input}/>
        <div className='fila'>
          <Clear clearear={() => setInput("")}>Clear</Clear>
          <Boton click={escribir}>(</Boton>
          <Boton click={escribir}>)</Boton>
          <Undo undo={() => setInput(input.slice(0,-1))}>Del</Undo>
        </div>
        <div className='fila'>
          <Boton click={escribir}>7</Boton>
          <Boton click={escribir}>8</Boton>
          <Boton click={escribir}>9</Boton>
          <Boton click={escribir}>+</Boton>
        </div>
        <div className='fila'>
          <Boton click={escribir}>4</Boton>
          <Boton click={escribir}>5</Boton>
          <Boton click={escribir}>6</Boton>
          <Boton click={escribir}>-</Boton>
        </div>
        <div className='fila'>
          <Boton click={escribir}>1</Boton>
          <Boton click={escribir}>2</Boton>
          <Boton click={escribir}>3</Boton>
          <Boton click={escribir}>*</Boton>
        </div>
        <div className='fila'>
          <Boton click={calcular}>=</Boton>
          <Boton click={escribir}>0</Boton>
          <Boton click={escribir}>.</Boton>
          <Boton click={escribir}>/</Boton>
        </div>
      </div>
    </div>
  );
}

export default App;
