import React, { useState } from "react";

function UseStateExample() {

  const [ numero, setNumero ] = useState()
  const [ segundoNumero, setSeguroNumero ] = useState()
  const [ resultado, setResultado ] = useState();

  const somar = () => {
    const numeroInt = parseInt(numero)
    const segundoNumeroInt = parseInt(segundoNumero)

    setResultado( numeroInt + segundoNumeroInt )
  }

  return (
    <div>
      Número 1: <br />
      <input type="text" value={numero} onChange={ e => setNumero(e.target.value) } /> <br />

      Número 2: <br />
      <input type="text" value={segundoNumero} onChange={ e => setSeguroNumero(e.target.value) } /> <br />

      <button onClick={somar}>Somar</button><br />

      Resultado: <br />
      <input type="text" value={resultado} /> <br />
    </div>
  );
}

export default UseStateExample;
