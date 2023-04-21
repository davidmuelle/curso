// ejemplo de uso de método componentDidUPdate en componente de clase
// y uso de hook en componente funcional
import React, { Component, useEffect } from 'react'

export class didUpdate extends Component {
    componentDidUpdate() {
        console.log("comportamiento cuando el componente recibe nuevos props o cambio en su estado privado")
    }
    render() {
        return (
            <div>didUpdate</div>
        )
    }
}



export const DidUpdateHooks = () => {

    useEffect(() => {
        console.log("comportamiento cuando el componente recibe nuevos props o cambio en su estado privado")
//aqui como no hemos puesto de segundo parametro los [] esto se ejecutará todas las veces no una como cuando se ponene los []
    })

    return (
        <div>
            <div>didUpdate</div>
        </div>
    );

}
