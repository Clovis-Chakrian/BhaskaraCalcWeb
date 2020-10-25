import React, { useState } from 'react';
import './App.css';

function App() {
  const [a, setA] = useState(Number);
  const [b, setB] = useState(Number);
  const [c, setC] = useState(Number);
  const [x1, setX1] = useState(Number);
  const [x2, setX2] = useState(Number)

  function handleCalc() {
    const delta = ((b) ** 2) - 4 * a * c;
    const raiz = delta ** 0.5;
    setX1(((-(b) + raiz) / (2 * a)));
    setX2(((-(b) - raiz) / (2 * a)));
  }

  return (
    <div className="App">
      <header className="top-bar">
        <h1 className="title">Bhaskara Calc</h1>
      </header>

      <main>
        <form >
          <label htmlFor="valueA" className='labels'>Digite o valor de A abaixo:</label>
          <input onChange={e => setA(Number(e.target.value))} id="valueA" className="default-input" type="number" placeholder="Digite aqui o valor de A" />

          <label htmlFor="valueB" className='labels'>Digite o valor de B abaixo:</label>
          <input onChange={e => setB(Number(e.target.value))} id="valueB" className="default-input" type="number" placeholder="Digite aqui o valor de B" />

          <label htmlFor="valueC" className='labels'>Digite o valor de C abaixo:</label>
          <input onChange={e => setC(Number(e.target.value))} id="valueC" className="default-input" type="number" placeholder="Digite aqui o valor de C" />

          <input onClick={handleCalc} type="button" value="Calcular" id="button-calc" />
        </form>

        <div id="result">
          <p className="x">X'= {x1}</p>
          <p className="x">X"= {x2}</p>
        </div>
      </main>
    </div>
  );
}

export default App;
