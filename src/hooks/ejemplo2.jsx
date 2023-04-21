// ejemplo de uso de:
// -useState()
// -useRef()
// -useEffect()
import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

    const [contador1, setcontador1] = useState(0);
    const [contador2, setcontador2] = useState(0);

    //vamos a crear una referencia con useRef para asociar una variable
    //con un elemento del DOM del componente (vista html)
    const miRef = useRef();

    function incrementar1() {
        setcontador1(contador1 + 1)
    }

    function incrementar2() {
        setcontador2(contador2 + 1)
    }


//trabajando con useEffect

// caso 1 ejecutar siempre un snippet de codigo
// cada vez que haya una cambio en el estado del componente 
// se ejecuta aquello que esté dentro del useEffect

// useEffect(()=>{
//     console.log("cambio en el estado del componente")
//     console.log("mostrando referencia al elemento del DOM")
//     console.log(miRef)
// })




// caso 2 ejecutar solo cuando cambie contador 1
// cada vez que haya un cambio en contador 1 se ejecuta lo que diga el  useEffect 
// en caso de que cambie contador2 no habrá ejecucion


// useEffect(()=>{
//     console.log("cambio en el estado del contador1")
//          console.log("mostrando referencia al elemento del DOM")
//          console.log(miRef) 
          //tengo que poner como si fuera un array 
// },[contador1 ])



// caso 2 ejecutar solo cuando cambie contador 1 o contador 2
// cada vez que haya un cambio en contador 1 se ejecuta lo que diga el  useEffect 
// en caso de que cambie contador2 no habrá ejecucion

useEffect(()=>{
    console.log("cambio en el estado del contador1 o contador 2")
         console.log("mostrando referencia al elemento del DOM")
         console.log(miRef) 
         //tengo que poner como si fuera un array 
},[contador1 ,contador2])


    return (
        <div>
        ejemplo de useState,useref y use effect
        
        <h2>contador1:{contador1}</h2>
        <h2>contador2:{contador2}</h2>

        {/* elemento referenciado */}
        <h4 ref={miRef}>ejemplo de elemento referenciado</h4>
        <h4>
            <button onClick={incrementar1}>incrementar1</button>
            <button onClick={incrementar2}>incrementar2</button>

        </h4>
    </div>
    );
}

export default Ejemplo2;
