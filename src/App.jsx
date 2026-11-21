import './App.css'
import Bienvenido from './components/Bienvenido'
import confetti from "@hiseb/confetti";
import ListaMercado from './components/ListaMercado';
import { useState } from 'react';

function App() {
  //declarando un estado (lista de frutas)
  const [frutas, setFrutas] = useState(["🍇", "🍌", "🍓"])

  /**
   * primer elemento = para devolver la informacion de estado
   * segundo elemento = para actualizar la informacion de estado (funcion)
   */

  //funcion de tipo flecha para tirar confetti
  const tirarConffeti = () => {
    //codigo...
    confetti();
  }

  //tirarConffeti()
  return (
    <>
      {/** Llamando al componente Bienvenido y lo reutilizamos 2 veces, compartiendo una prop */}
      <Bienvenido confetti={tirarConffeti}></Bienvenido>
      <Bienvenido />

      {/* <button onClick={tirarConffeti}>Click</button> */}
      <section>
        {/** compartiendo un producto del componente App al de ListaMercado */}
        <ListaMercado productos="cereal" />
        <ListaMercado productos="donas" />
      </section>

      <section>
        <h3 className="texto">Gestionando Estado</h3>
        {/** llamamos al estado para que se muestre la informacion */}
        {frutas}

        {/** ... (spread operator) copia de los elementos de un arreglo */}
        <button onClick={() => setFrutas([...frutas, "🥥", "🍉"])}>Agregar Fruta</button>
      </section>
    </>
  )
}

export default App
