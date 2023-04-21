// ejemplo hooks 
// useState
// useContext
import React, { useState, useContext } from 'react';


//componente 1 dispone de un contexto que va a tener un valor que recibe desde el padre
//inicializamos un estado que va a rellenarse con los datos del padre
const miContexto = React.createContext(null)
const Componente1 = () => {
        const state = useContext(miContexto);

    return (
        <div>
            <h1>
                el token es: {state.token}
            </h1>
            {/* pintamos el componente2 */}
            <Componente2 />
        </div>
    );
}


const Componente2 = () => {
    const state = useContext(miContexto);

    return (
        <div>
            <h2>la sesion es :{state.sesion}</h2>
        </div>
    );
}



export default function MiComponenteConContexto() {
    const estadoInicial = {
        token: "1234567",
        sesion: 1
    }

    //creamos el estado de este componente
    const [sessionData, setsessionData] = useState(estadoInicial);

    function actualizarSession() {
        setsessionData({
            token: "234dsfdfs",
            sesion: sessionData.sesion + 1
        })
    }
    return (
        <miContexto.Provider value={sessionData}>
            {/* todo lo que esté aqui dentro puede leer y actulizar los datos de sessionData
            ademoas si se actuliza los componentes de aqui tambien los actualiza */}
            <h1>ejemplo usestate y usecontext</h1>
            <Componente1></Componente1>
            <button onClick={actualizarSession}>actualizar sesion</button>
        </miContexto.Provider>
    )
}
