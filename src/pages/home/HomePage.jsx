import React from 'react';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
    const navigate = useNavigate();

    const navigateProps=(path)=>{
        navigate.push({path: path ,
            search:'?online=true',
            state:{online:true}})
    }

    return (
        <div>
            <h1>Home Page</h1>
            <h2>Dashboard</h2>
            <button onClick={() => navigateProps('/profile')}>go to profile</button>
            <button onClick={() => navigate('/online-state')}>go to page with state /query</button>
            <button onClick={() => navigate(-1)}>go back</button>
            <button onClick={() => navigate(+1)}>go forward</button>
        </div>
    );
}

export default HomePage;

 