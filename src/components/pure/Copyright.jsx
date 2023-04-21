import React from 'react';

import { Link,Typography } from '@mui/material';


const Copyright = () => {
    return (
        //typography sirve para darle estilos al texto
        <Typography variant='body2' color='pink' align='center'>
            {'Coppyright (C)'}
            {/* esto es un link para que no me lleve dentro de la aplicacion sino fuera de ella */}
            <Link color='inherit' href="https://imaginaformacion.com">imagina formacion</Link>
            {" "}
            {new Date().getFullYear()}
        </Typography>
    );
}

export default Copyright;
