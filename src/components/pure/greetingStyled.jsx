import React, { useState } from 'react';

//definiendo estilos en const

const loggedStyle = {
    color: 'blue'
}

//stilos para usuario no logeado
const unloggedStyle = {
    color: 'red',
    fontWeight: 'bold'
}
const GreetingStyled = (props) => {
    //generamos un estado para el componente
    //y asi controlar si el usuario está logeado
    const [logged, setlogged] = useState(false);

    //lo de los usuarios loggeados tambien se puede hacer de esta forma

    //const greetinuser=()=>{<p>hola, {props.name}</p>}

    return (
        <div style={logged ? loggedStyle : unloggedStyle}>
            {logged ? (< p > hola, {props.name}</p>) : (<p>please login</p>)}

            <button onClick={() => {
                console.log("boton pulsado")
                setlogged(!logged)
            }}>
                {logged ? 'logout' : 'login'}
            </button>
        </div >
    );
}

export default GreetingStyled;

