//Importar bibliotecas
import React from 'react';
//Criar componente
const Joaoboiola = (props) => {
    return (
        <div>
            <h1>{props.nome}</h1>
            <h2>{props.clube}</h2>
            <h3>{props.cidadania}</h3>
        </div>
    );
}

//exportar componente
export default Joaoboiola;

