import { Button } from '@mui/material';
import React from 'react';
import Copyright from '../../components/pure/Copyright';
import { useNavigate } from "react-router-dom"
const DashBoard = () => {
    const history = useNavigate()

    const logout = () => {
        history('/login')
    }
    return (
        <div>
            <Button variant='content' onClick={logout}>logout</Button>
            <Copyright />
        </div>
    );
}

export default DashBoard;



