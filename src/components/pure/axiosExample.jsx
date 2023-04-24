import React from 'react';
import getRandomUser from '../../utils/axiosService';
import { useState } from 'react';

const AxiosExample = () => {

    const [user, setuser] = useState(null);

    

const obtainUser=()=>{
    getRandomUser().then((response) => {
        setuser(response.data.results[0])
        console.log("prueba")
        console.log(response)
    }).catch((error) => {
        alert('algo salio mal: ', error)
    })
}
    return (
        <div>
            <h2>axios example</h2>
            {(user != null) ?
                (
                    <>
                        <h2>name:{user.name.first} {user.name.last}</h2>
                    </>
                )
                : (
                    <>
                        
                    <p>generate a new user</p>
                    <button onClick={()=>obtainUser()}>random user</button>
                    </>
                    
                    )}
        </div>
    );
}

export default AxiosExample;
