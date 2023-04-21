import React from 'react';

const AsyncExample = () => {

    //si ponemos el async hay que poner min un await porque entonces no tendria mucho sentido 
    //y ponemos un await en los puntos en los que queremos que se pare nuestro codigo

    async function generateNumber() {
        return 1;
    }


    async function generatePromiseNumber() {
        // resolve me devuelve
        return Promise.resolve(2)
    }

    function obtainNumber() {
        //con el async es como si fuera una promesa entonces podemos obtener el valor de la funcion con .then y el response
        generateNumber().then((response) => alert("numero: " + response))
    }


    function obtainPromiseNumber() {
        //con el async es como si fuera una promesa entonces podemos obtener el valor de la funcion 
        //con .then y el response (con el then esperamos la resolucion de esa promesa)
        generatePromiseNumber().then((response) => alert("numero: " + response)).catch((error) => alert("something went wrong: " + error))
    }

    async function saveSessionStorage(key, value) {
        sessionStorage.setItem(key, value)
        return Promise.resolve(sessionStorage.getItem(key))
    }


    function showStorage() {
        //si llamo a un metodo que devuelve una promesa tengo que consumirlo con un .then
        saveSessionStorage('name', 'david')
            .then((response) => {
                let value = response
                alert("saved name; " + value)
            }).catch(error => alert("error maquina: " + error))
            //el finally es cuando ya se hya completado todo va incluso despues del then
            .finally(() => console.log("name save and retreived sucessfully"))
    }




    async function obtainMessage() {


        let promise = new Promise((resolve, reject) => {

            setTimeout(() => resolve("hello world"), 2000)
        })
        let message = await promise
        alert("message recibido: " + message)

    }

    const returnError = async () => {
        //aqui estamos creando un error
        await Promise.reject(new Error('oooops'))
    }


    const consumeError = async () => {
        return returnError()
            //aqui no se va a ejecutar el then porque estamos devolviendo la funcion que creamos un error y por lo tanto se va a 
            //devolver el catch que hemos puesto aqui mas el error que hemos creado en la funcion
            .then((response) => alert("todo ha ido perfecto: " + response))
            .catch((error) => alert("ha ocurrido un error: " + error))
            .finally(() => alert("finalmente ejecutado"))
    }




    const urlNotFound = async () => {
        try {
            let response = await fetch("https://invalidURL")
            alert("response: " + JSON.stringify(response))
        } catch (error) {
            alert("somthing went wrong: " + error.message)
        }
    }


    const multiplePromise = async () => {
        //el .all espera una array con las promesas
        let results = await Promise.all([
            fetch('https://reqres.in/api/users'),
            fetch('https://reqres.in/api/users?page=2')
        ]).then((response) => alert("todo ha ido perfecto: " + response))
        .catch(error => alert("algo fue mal: " + error))

        console.log("prueba" )
    }



    return (
        <div>
            <h1>ejemplos de async y promise</h1>
            <button onClick={obtainNumber}>Obtain Number</button>
            <button onClick={obtainPromiseNumber}>Obtain Number by a promise</button>
            <button onClick={showStorage}>save name and show</button>
            <button onClick={obtainMessage}>send message in 2 sec</button>
            <button onClick={consumeError}>obtain error</button>
            <button onClick={urlNotFound}>error en peticion no existente</button>
            <button onClick={multiplePromise}>multiples promesas</button>
        </div>
    );
}

export default AsyncExample;
