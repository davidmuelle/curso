
import React, { useState } from 'react';

const Ejemplo = () => {
    //valor inicial para un contador
    const valorInicial = 0

    // valorinicial para una persona

    const personaInicial = {
        nombre: "david",
        email: "david@gmail.com"
    }


    //queremos que el valorinicial y persona inicial sean  
    //parte del estado del componente para asi poder gestionar si cambio y que este se vea reflejado de la vista del componente


    const [contador, setcontador] = useState(valorInicial);
    const [persona, setpersona] = useState(personaInicial);

    //funcion para actualizar el estado privado del contador
    function incrementarContador() {
        setcontador(contador + 1);
    }

    //funcion para actualizar el estado de persona en el componente
    function actualizarPersona() {
        setpersona({
            nombre:"pepe",
            email:"pepe@gmail.com"
        })
    }

    return (
        <div>
            ejemplo de useState
            
            contdor:{contador}
            persona:{persona.nombre},{persona.email}
            <button onClick={incrementarContador}>incrementarContador</button>
            <button onClick={actualizarPersona}>actualizarPersona</button>
        </div>
    );
}

export default Ejemplo;
