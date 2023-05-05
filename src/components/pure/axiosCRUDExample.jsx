import React from 'react';
import { login, getAllUsers, getAllPagedUsers, getUserById, createUser,updateUser,deleteUser } from '../../services/axiosCRUDService';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const AxiosCRUDExample = () => {



    const initialCredencials = {
        email: '',
        password: ''
    }

    const loginSchema = Yup.object().shape(
        {
            //validaciones de que el campo email sea correcto y obligatorio
            email: Yup.string().email('email format invalid').required('email is required'),
            //obligacion de que el campo pass sea obligatorio y un string
            password: Yup.string().required('password is required')
        }
    )
    const authUser = (values) => {
        login(values.email, values.password)
            .then((response) => {
                console.log("prueba")
                alert(JSON.stringify(response.data))
                //token seria la clave y el response data.token (token) es el valor
                sessionStorage.setItem('token', response.data.token)
            })
            .catch((error) => {
                alert("algo salio mal: ", error)
            })
            .finally(() => console.log("login terminado"))
    }


    //crud examples

    const obtainAllUsers = () => {
        getAllUsers()
            //hay que poner el .then porque getalluser es una promesa
            .then((response) => {
                alert(JSON.stringify(response.data.data))
            })
            .catch((error) => {
                alert("algo salio mal: ", error)
            })
    }

    const obtainAllPagedUsers = (page) => {
        getAllPagedUsers(page)
            .then((response) => {
                alert(JSON.stringify(response.data.data))
            })
            .catch((error) => {
                alert("algo salio mal: ", error)
            })
    }


    const obtainUserById = (id) => {
        getUserById(id)
            .then((response) => {
                alert(JSON.stringify(response.data.data))
            })
            .catch((error) => {
                alert("algo salio mal: ", error)
            })
    }


    const createNewUser = (name, job) => {
        createUser(name, job)
            .then((response) => {
                if (response.status == 201) {
                    alert(JSON.stringify(response.data))
                } else {
                    throw new Error('user not created')
                }
            })
            .catch((error)=>{
                alert('algo salio mal: ',error)
            })
    }




    const updateUserById = (id,name,job) => {
        updateUser(id,name,job)
            .then((response) => {
                alert(JSON.stringify(response.data))
            })
            .catch((error) => {
                alert("algo salio mal: ", error)
            })
    }





    const deleteUserById = (id,name,job) => {
        deleteUser(id)
            .then((response) => {
                if(response.status==204){
                    alert('usuario eliminado')
                }
            })
            .catch((error) => {
                alert("algo salio mal: ", error)
            })
    }
    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                initialValues={initialCredencials}
                //validacion yup
                validationSchema={loginSchema}
                //evento onsubmit
                onSubmit={async (values) => {
                    //estos son los datos que envia el usuario (email y password)
                    authUser(values)
                }}
            >

 
                {({ values, errors, touched, isSubmitting }) => (
                    <Form>
                        <label htmlFor="email">Email</label>
                        <Field
                            id="email"
                            name="email"
                            placeholder="your email"
                            type="email"
                        />
                        {/* con esto poenemos que si el email tiene algun error si se ha tocado el campo email 
                                se cree un div con un parrafo dentro con el error que hemos tenido */}
                        {errors.email && touched.email && (<ErrorMessage component='p' name='email' />)}
                        <label htmlFor="password">password</label>
                        <Field id="password" name="password" type="password" placeholder="password" />
                        {errors.password && touched.password && (<ErrorMessage name='password' />)}

                        <button type="submit">Login</button>
                        {/* esto hace que cuando se está enviando el formulario se cree un parrafo con ese texto */}
                        {isSubmitting ? (<p>login your credentials</p>) : null}
                    </Form>
                )}

            </Formik>
            <>
                {/* example buttons to test api responses */}

                <button onClick={obtainAllUsers}>
                    get all users
                </button>
                {/* como hay que pasarle un paramtro hay que hacer una funcion flecha para que no se ejecute hata que le demos click */}
                <button onClick={() => obtainAllPagedUsers(1)}>
                    get all page (1) users with axios
                </button>
                <button onClick={() => obtainUserById(1)}>get user with id 1</button>
                <button onClick={()=>{createNewUser('manu','mamporrero')}}>create new user</button>
                <button onClick={() => updateUserById(1,'manu','developer')}>update user 1</button>
                <button onClick={() => deleteUserById(1)}>delete user 1</button>
            </>
        </div>
    );
}

export default AxiosCRUDExample;



