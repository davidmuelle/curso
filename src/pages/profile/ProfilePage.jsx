import React from 'react';
import { useNavigate } from 'react-router-dom';
const ProfilePage = ({user }) => {
    const navigate=useNavigate();
    return (
        <div>
            <h1>your profile</h1>
            <button onClick={()=>navigate(-1)}>go back</button>
            <button onClick={()=>navigate('/tasks')}>your task</button>
        </div>
    );
}

export default ProfilePage;






