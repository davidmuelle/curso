import React, { useState } from 'react';
//tenemos que poner usestate asi porque como no tenemos constructor nos lo tenemos que traer con esto y no con el constructor
import PropTypes from 'prop-types';

//este props hace referencia a la propiedades que se le van a pasar
const Greetingf = (props) => {
    //    [nombre de la variable,metodo para editarla]=valor inicial
    const [edad, setedad] = useState(29);

    const birthday = () => {
        //metodo para actualizar 
        setedad(edad + 1)
    }

    return (
        <div>
        <div>

        <h1>hola {props.name} desde componente funcional</h1>
             <h2>edad: {edad}</h2>
        </div>
        
        <div>

            <button onClick={birthday}>
                cumplir años
            </button>
        </div>
        </div> 
     
    );
};


Greetingf.propTypes = {
    name: PropTypes.string
};


export default Greetingf;
