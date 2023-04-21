import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
//models
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';
const ResgisterFormik = () => {
    let user = new User()
    const history=useNavigate()
    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
    }

    const regisetrSchema = Yup.object().shape({
        username: Yup.string().min(6, 'el nombre debe de tener al menos 5 caracteres').max(12, 'el nombre debe de tener menos de 12 caracteres').required(),
        email: Yup.string().email('email format invalid').required('email is required'),
        password: Yup.string().min(8, 'password debe tener al menos 8 caracteres').required('password is required'),
        // role:Yup.string.oneOf([ROLES.USER,ROLES.ADMIN],'el rol es incorrecto').required("el rol es requerido"),
        //el when en el primer parametro recibe el objeto que vamos a comprobar despues va la logica 
        // con el is recibimos un valor con este vemos que lo ha recibido(el valor que hemos recibido es el que vamos a comprobar en este caso password)
        // para ponerlo a true o false 
        //despues con el then comprobamos que sea algo que está dentro de una lista y le pasamos la referencia del campo password
        confirm: Yup.string().when("password", {
            is: value => (value && value.length > 0 ? true : false),
            then: ()=>Yup.string().oneOf([Yup.ref("password")], 'las contraseñas no coinciden')
        }).required("campo confirm obligatorio")
    })

    const submit = (values) => {
        console.log('register user')
    }

    return (
        <div>
            <h4>Register form</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={regisetrSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                    history('/')
                }}
            >
                {({ values, errors, touched, isSubmitting }) => (
                    <Form>
                    <label htmlFor="pass">username</label>
                        <Field id="username" name="username" type="text" placeholder="username" />
                        {errors.username && touched.username &&(<ErrorMessage name='username'/>)}
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
                        
                        <label htmlFor="confirm">confirm</label>
                        <Field id="confirm" name="confirm" type="text" placeholder="confirme su contraseña" />
                        {errors.confirm && touched.confirm && (<ErrorMessage name='confirm' />)}

                        <button type="submit">Register</button>
                        {/* esto hace que cuando se está enviando el formulario se cree un parrafo con ese texto */}
                        {isSubmitting ? (<p>creating your credentials</p>) : null}
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default ResgisterFormik;
