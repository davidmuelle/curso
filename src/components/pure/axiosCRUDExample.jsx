import React from 'react';
import { login } from '../../services/axiosCRUDService';



const AxiosCRUDExample = () => {

    const authUser = () => {
        login('eve.holt@reqres.in', 'cityslicka')
            .then((response) => {
                console.log("prueba")
                alert(JSON.stringify(response.data))
            })
            .catch((error)=>{
                alert("algo salio mal: ",error)
            })
            .finally(()=>console.log("login terminado"))
    }
    return (
        <div>
            <button onClick={()=>authUser()}>login</button>
        </div>
    );
}

export default AxiosCRUDExample;
