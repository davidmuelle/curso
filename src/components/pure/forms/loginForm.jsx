// componente que va a contener un formulario para la 
// autenticación de usuarios


import React,{useState} from 'react';

const LoginForm = () => {

    const initialcredencials=[{
        user:"",
        password:""
    }]

//con esto hacemos que podamos disponer de las credenciales guardandolas en un estado
const [credencials, setcredencials] = useState(initialcredencials);

    
    return (
        <div>
            
        </div>
    );
}

export default LoginForm;
