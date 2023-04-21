//  ejemplo de uso del método componentWillUnmount para componente clase 
//  ejemplo de uso del hooks para componente funcional 
//  (cuando el componente va a desaparecer)


import React, { Component, useEffect } from 'react';

export class Willunmount extends Component {

    componentWillUnmount(){
        console.log("comportamiento antes de que el componente desaparezca")
    }

    render() {
        return (
            <div>
                <h1>willunmount</h1>
            </div>
        );
    }
}



export const WillUnmountHooks = () => {


    useEffect(() => {
          //aqui no ponemos nada
        return ()=>{
            console.log("comportamiento antes de que el componente desaparezca") 
        }
        

        //con los [] indicamos que solo se va a ejecutar una vez
    },[])

    return (
        <div>
             <h1>DidMount</h1>
        </div>
    );

}
