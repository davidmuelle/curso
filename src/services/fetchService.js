export const getAllUsers =async()=>{
    //hacemos la funcion asincrona porque hay que recoger los datos de una url y ponemos en el await la variable que va a guardar dichos datos
    //le pasamos la url de la api y esto nos devolverá un json
    let response = await fetch('https://reqres.in/api/users')
    console.log(response)
    //devolvemos el json, si ponemos directamente response sin el .json cuando lo llamamos en el componente tenemos que poner el .json y el .then
    return response.json()
}





//esta es la misma funcion que la de arriba solo que en esta podemos enseñar a los usuarios por paginas

export const getPagedUsers =async(page)=>{
    //hacemos la funcion asincrona porque hay que recoger los datos de una url y ponemos en el await la variable que va a guardar dichos datos
    //le pasamos la url de la api y esto nos devolverá un json
    let response = await fetch(`https://reqres.in/api/users?page=${page}`)
    console.log(response)
    //devolvemos el json, si ponemos directamente response sin el .json cuando lo llamamos en el componente tenemos que poner el .json y el .then
    return response.json()
}



export const getUserDetails=async(id)=>{
    //hacemos la funcion asincrona porque hay que recoger los datos de una url y ponemos en el await la variable que va a guardar dichos datos
    //le pasamos la url de la api y esto nos devolverá un json
    let response = await fetch(`https://reqres.in/api/users/${id}`)
    console.log(response)
    //devolvemos el json, si ponemos directamente response sin el .json cuando lo llamamos en el componente tenemos que poner el .json y el .then
    return response.json() 
}