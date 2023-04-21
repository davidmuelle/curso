import React, { useState } from 'react'
import { Child } from '../pure/child'
export const Father = () => {
    function showmessage(text) {
        alert(`mensaje recibido: ${text}`)
    }


    const [name, setname] = useState('martin');

    function updateName(newName) { 
        setname(newName)
        console.log(newName)
    }
    return (
        <div>
            {/* aqui le estoy pasando una funcion porque hemos puesto en el prop del hijo send y despues lo utilizamos como una funcion en un boton */}
            <Child send={showmessage} name={name} update={updateName}/>
        </div>
    )
}
