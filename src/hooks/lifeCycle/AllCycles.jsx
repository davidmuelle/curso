import React, { useEffect } from 'react';

const AllCycles = () => {

    useEffect(() => {
        console.log("componente creado")

        const intervalID=setInterval(()=>{
            document.title=`${new Date()}`
            //esto hará que al segundo se actualice el componente
            console.log("actualizacion del componente")
        },1000)

        return () => {
            console.log("componente va a desaparecer")
            document.title="tiempo detenido"
            clearInterval(intervalID)
        }
        //como hemos puesto los corchetes esto hará que se ejecute solo uan vez y al segundo de ejecutarse se actualizará la constante intervalID
    }, [])

    return (
        <div>

        </div>
    );
}

export default AllCycles;
