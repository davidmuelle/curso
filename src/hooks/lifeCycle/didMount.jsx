// ejemplo de uso del método del ciclo de vida en componente clase 
// y el hook de ciclo de vida en componente funcional

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount() {
        console.log("comportamiento antes de que el componente sea añadido al dom (se renderice)")
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}




const DidMountHooks = () => {


    useEffect(() => {
        console.log("comportamiento antes de que el componente sea añadido al dom (se renderice)")    
        //con los [] indicamos que solo se va a ejecutar una vez
    },[])

    return (
        <div>
             <h1>DidMount</h1>
        </div>
    );

}



