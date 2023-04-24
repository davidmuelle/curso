import APIrequest from "./config/axios.config";

export default function getRandomUser() {
    //esto lo que va a hacer es que le va a añadir a la url que hemos configurado en axios.config lo que pongamos dentro del get
    return APIrequest.get('/', {
        validateStatus: function (status) {
            return status < 500; // Resuelve solo si el código de estado es menor que 500
        }
    })

} 