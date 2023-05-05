import axios from "axios";


/**
 * metodo login 
 * @param {string} email 
 * @param {string} password 
 */

export const login = (email, password) => {

    let body = {
        email: email,
        password: password
    }

    // devuelve una promesa entonces hay que consumirlo con un .then
    return axios.post('https://reqres.in/api/login', body)
}


//devolver todos los usuarios
export const getAllUsers = () => {
    return axios.get('https://reqres.in/api/users')
}

//devolver todos los usuarios que hay en una pagina
export const getAllPagedUsers = (page) => {
    return axios.get(`https://reqres.in/api/users?page=${page}`)
}

//devolver un usuario por su id
export const getUserById = (id) => {
    return axios.get(`https://reqres.in/api/users/${id}`)
}


//estamos creando un usuario
export const createUser = (name, job) => {
    let body = {
        name: name,
        job: job
    }
    return axios.post(`https://reqres.in/api/users`, body)
}


//estamos actualizando el usuario
export const updateUser = (id,name, job) => {
    let body = {
        name: name,
        job: job
    }
    return axios.put(`https://reqres.in/api/users/${id}`, body)
}


//estamos borrando un usuario
export const deleteUser = (id) => {
    return axios.delete(`https://reqres.in/api/users/${id}`)
}