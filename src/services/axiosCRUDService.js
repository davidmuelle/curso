import axios from "axios";


/**
 * metodo login 
 * @param {string} email 
 * @param {string} password 
 */

export const login=(email,password)=>{

    let body={
        email:email,
        password:password
    }

// devuelve una promesa entonces hay que consumirlo con un .then
return axios.post('https://reqres.in/api/login',body)
}



