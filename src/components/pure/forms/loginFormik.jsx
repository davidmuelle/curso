import React from 'react';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const loginSchema = Yup.object().shape(
    {
        //validaciones de que el campo email sea correcto y obligatorio
        email: Yup.string().email('email format invalid').required('email is required'),
        //obligacion de que el campo pass sea obligatorio y un string
        pass: Yup.string().required('password is required')
    }
)





const LoginFormik = () => {
    const initialCredencials = {
        email: '',
        pass: ''
    }
    const history=useNavigate()
    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                initialValues={initialCredencials}
                //validacion yup
                validationSchema={loginSchema}
                //evento onsubmit
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                    //cuando se inicia sesion (se envia el form) se guardan los datos en el localstorage del ordenador
                   await localStorage.setItem('credentials', values)
                   history('/profile')
                }}
            >




                { ({ values, errors, touched, isSubmitting }) => (
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
                        {errors.email && touched.email && (<ErrorMessage component='p' name='email'/>)}
                        <label htmlFor="pass">password</label>
                        <Field id="pass" name="pass" type="password" placeholder="password" />
                        {errors.pass && touched.pass && (<ErrorMessage name='pass'/>)}

                        <button type="submit">Login</button>
                        {/* esto hace que cuando se está enviando el formulario se cree un parrafo con ese texto */}
                        {isSubmitting ? (<p>login your credentials</p>) : null}
                    </Form>
                )}
                {/* poner lo de arriba o esto de aqui abajo es lo mismo solo que la parte de arriba esta mas corto */}
                {/* obteniendo props de formik */}

                {/* {props => {
                    const { 
                        values,
                        //sirve para ver si el usuario ha tocado el campo
                        touched,
                        //sirve para ver los errores con yup
                        errors,
                        //sirve para ver si se esta enviando
                        isSubmitting,
                        handleChange,
                        //si ha habido cambio de foco
                        handleBlur,
                        
                    } = props
                    return(

                            <Form>
                                <label htmlFor="email">Email</label>
                                <Field
                                    id="email"
                                    name="email"
                                    placeholder="your email"
                                    type="email"
                                />
                                 con esto poenemos que si el email tiene algun error si se ha tocado el campo email 
                                se cree un div con un parrafo dentro con el error que hemos tenido 
                                {errors.email && touched.email &&(<div className='error'><p>{errors.email}</p></div>)}
                                <label htmlFor="pass">password</label>
                                <Field id="pass" name="pass" type="password" placeholder="password" />
                                {errors.pass && touched.pass &&(<div className='error'><p>{errors.pass}</p></div>)}

                                <button type="submit">Login</button>
                                 esto hace que cuando se está enviando el formulario se cree un parrafo con ese texto 
                                {isSubmitting ?(<p>login your credentials</p>):null}
                            </Form>
                    
                    )
                        
                }} */}
            </Formik>
        </div>
    );
}

export default LoginFormik;
