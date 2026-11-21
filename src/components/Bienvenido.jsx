
// llamando la prop que me paso el componente App
function Bienvenido({ confetti }) {
    /**
     * js, html
     * variables, constantes, funciones, props, estados
     */
    let saludo = "Hola 🫡";
    const pi = 3.1416;


    return (
        <section>
            <h1 className="texto">Bienvenido a mi Lista de Mercado 🥥</h1>
            <p>Mini aplicacion para agregar productos a mi lista</p>

            {/** utilizando la props compartida (funcion) */}
            <button onClick={confetti}>{saludo} Dale Click</button>
        </section>
    )
}

//exportando el componente para utilizarlo en otro lugares
export default Bienvenido