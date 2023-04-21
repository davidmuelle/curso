import React,{useState} from 'react';

const RegisterForm = () => {
    const initialData = [{
        user: "",
        name:"",
        email:"",
        password: ""
    }]

    //con esto hacemos que podamos disponer de las credenciales guardandolas en un estado
    const [data, setData] = useState(initialData);

    return (
        <div>

        </div>
    );
}

export default RegisterForm;

