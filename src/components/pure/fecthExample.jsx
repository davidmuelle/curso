import { React, useState, useEffect } from 'react';
import { getAllUsers, getPagedUsers, getUserDetails, login } from '../../services/fetchService';
const FecthExample = () => {

    const [users, setusers] = useState([]);
    const [selecteUser, setselecteUser] = useState(null);
    const [total_users, settotal_users] = useState(12);
    const [pages, setpages] = useState(2);
    const [totalPerPage, settotalPerPage] = useState(6);

    useEffect(() => {

        obtainUsers()
    }, []);


    const obtainUsers = () => {
        //como getAllUsers es una promesa hay que poner el then para que se resuelva el resultado futuro
        getAllUsers()
            //esta response ya es el valor de la api
            .then((response) => {
                console.log('all users: ', response.data)
                //aqui me está guardando los datos de la tabla en la constante users gracias al useState
                setusers(response.data)
                setpages(response.total_pages)
                settotalPerPage(response.per_page)
                settotal_users(response.total)
            })//si no se ha podido cumplir la promesa salta el catch y nos salta el error
            .catch((error) => {
                console.log("error: ", error)
            })
            .finally(() => {
                console.log("terminado de obtener los usuarios")
                //esto nos crea una tabla con los usuarios en la consola
                console.table(users)
            })
    }
    const obtainPagedUsers = (page) => {
        getPagedUsers(page)
            //esta response ya es el valor de la api
            .then((response) => {
                console.log('all paged users: ', response.data)
                //aqui me está guardando los datos de la tabla en la constante users gracias al useState
                setusers(response.data)
                setpages(response.total_pages)
                settotalPerPage(response.per_page)
                settotal_users(response.total)
            })//si no se ha podido cumplir la promesa salta el catch y nos salta el error
            .catch((error) => {
                console.log("error: ", error)
            })
            .finally(() => {
                console.log("terminado de obtener los usuarios")
                //esto nos crea una tabla con los usuarios en la consola
                console.table(users)
            })
    }


    const obtainUserDetail = (id) => {
        getUserDetails(id)
            .then((response) => {
                console.log('user selected: ', response.data)
                //aqui me está guardando los datos de la tabla en la constante users gracias al useState
                setselecteUser(response.data)

            })//si no se ha podido cumplir la promesa salta el catch y nos salta el error
            .catch((error) => {
                console.log("error: ", error)
            })
            .finally(() => {
                console.log("terminado de obtener los usuarios")
                //esto nos crea una tabla con los usuarios en la consola
                console.table(selecteUser)
            })

    }


    const authUser = () => {
        login('eve.holt@reqres.in', 'cityslicka')
            .then((response) => {
                console.log('token: ', response.token)
                //aqui me está guardando los datos de la tabla en la constante users gracias al useState
                sessionStorage.setItem('token'.response.token)

            })//si no se ha podido cumplir la promesa salta el catch y nos salta el error
            .catch((error) => {
                console.log("error: ", error)
            })
            .finally(() => {
                console.log("terminado login")

            })
    }

    return (
        <div>
            {/* boton que simula el de login */}
            <button onClick={()=>authUser()}>login</button>
            <h2>listado de usuarios</h2>
            {users.map((user, index) => {
                return (<p onClick={() => obtainUserDetail(user.id)} key={index} >{user.first_name} {user.last_name}</p>)
            })}
            <p>showing{totalPerPage} users of {total_users}</p>
            <button onClick={() => obtainPagedUsers(1)}>
                1
            </button>

            <button onClick={() => obtainPagedUsers(2)}>
                2
            </button>
            <div>
                <h3>user details</h3>
                {(selecteUser != null) ? (
                    <>

                        <p>name: {selecteUser.first_name}</p>
                        <p>last name: {selecteUser.last_name}</p>
                    </>

                ) : (<p>click en un usuario para ver informacion</p>)}
            </div>
        </div>
    );
}

export default FecthExample;
