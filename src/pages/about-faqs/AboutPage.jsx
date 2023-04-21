import React from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
const AboutPage = () => {

const location =useLocation();
const navigate=useNavigate();

console.log("we aee un route: ",location.pathname);//nos devuelve la ruta



    return (
        <div>
            <h1>About FAQs Page</h1>
            <>
                 {/* con esto iriamos a la pagina home */}
                <button onClick={()=>navigate('/')}>go to home</button>
                {/* con esto iriamos a la la ultima pagina que hemos estado */}
                <button onClick={()=>navigate(-1)}>go back</button>
                {/* si en vez de poner el - ponemos el simbolo de +  iremos hacia delante en la navegacion y no hacia atrás*/}
                <button onClick={()=>navigate(+1)}>go forward</button>
            </>
        </div>
    );
}

export default AboutPage;

