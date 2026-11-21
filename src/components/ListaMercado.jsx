
// llamando la prop {}
function ListaMercado({ productos }) {

    return (
        <>
            <h4>Lista de Mercado</h4>
            <div>
                <ul>
                    <li>🍪 Galletas</li>
                    <li>🥛 leche</li>
                    <li>🍳 huevos</li>
                    {/** llamando el valor de la prop */}
                    <li>{productos}</li>
                </ul>
            </div>
        </>
    );
}

export default ListaMercado

