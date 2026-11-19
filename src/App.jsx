import './App.css'
import Bienvenido from './components/Bienvenido'
import confetti from "@hiseb/confetti";

function App() {

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
    </>
  )
}

export default App
