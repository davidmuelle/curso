import React, { useRef } from 'react'

export const Child = ({ name, send, update }) => {

    const messageRef = useRef('')
    const nameRef = useRef('')

    function pulsarboton() {
        const text = messageRef.current.value;
        alert(`default ${text}`)
    }


    function pulsarBotonparametros(text) {
        alert(`Text: ${text}`)
    }



    function submitName(e) {
        e.preventDefault()
        update(nameRef.current.value)
    }


    return (
        <div>
            <p onMouseOver={() => { console.log("on mouse over") }}>hello {name}</p>
            {/* necesitamos poner las funciones que llevan parametros dentro de una funcion anonima porque si no se ejecuta aunque no le demos al botonç
            por culpa de los parentesis */}
            <button onClick={() => { pulsarBotonparametros("hola") }}>boton1</button>
            <button onClick={pulsarboton}>boton2</button>
            <input ref={messageRef} placeholder='inserte texto' onFocus={() => { console.log("input focused") }}
            // la e es el evento
                onChange={(e) => { console.log("input changed", e.target.value) }}
                onCopy={() => { console.log("texto copiado") }}
            ></input>
            <button onClick={() => send(messageRef.current.value)}>enviar mensaje</button>
            <div style={{ marginTop: '20px' }}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder='new name' />
                    <button type='submit'>update name</button>
                </form>
            </div>
        </div>
    )
}