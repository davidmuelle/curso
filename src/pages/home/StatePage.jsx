import React from 'react';
import {useLocation} from 'react-router-dom'
const StatePage = () => {
    const location=useLocation()
    console.log(location.state.online)//state sent
    console.log(location.search)//query params sent
    return (
        <div>
            <h1>State:{location.state.online}</h1>
        </div>
    );
}

export default StatePage;


