import React, { useState } from 'react';


const loggedStyle = {
    backgroundColor:'green',
    color: 'blue'
}

//stilos para usuario no logeado
const unloggedStyle = {
    color: 'red',
    fontWeight: 'bold'
}
//componentes login logout buttons
const LoginButton = ({ loginAction,propstyle }) => {

    return (<button style={propstyle} onClick={loginAction}>login</button>)
}


const LogoutButton = ({ logoutAction,propstyle }) => {

    return (<button style={propstyle} onClick={logoutAction}>logout</button>)
}


// ? (expresion true) && expresion=> se renderiza la expresion
// ? (expresion false) && expresion=> no se renderiza la expresion

const OptionalRender = () => {


    const [access, setaccess] = useState(true)
    const [nMessage, setnMessage] = useState(0);

    const loginaction = () => {
        setaccess(true)
    }

    const logoutaction = () => {
        setaccess(false)
    }

    // const updateAccess = () => {
    //     setaccess(!access)
    // }

    let optionalbutton;

    if (access) {
        optionalbutton = <LogoutButton propstyle={unloggedStyle} logoutAction={logoutaction} />
    } else {
        optionalbutton = <LoginButton propstyle={loggedStyle} loginAction={loginaction} />
    }

    //unread messages
    let addMessages = () => {
        setnMessage(nMessage + 1)
    }

    return (
        <div>
        {/* optional button */}
            {optionalbutton}
            {/* n messages unread */}
            {/* si se cumple que haya mensajes se ejecuta el siguiente codigo */}
            {/* {nMessage>0 && <p>you have {nMessage} new messages</p>} */}
            {/* no hay mensajes */}
            {/* {nMessage==0 && <p>you have {nMessage} new messages</p>} */}

            {nMessage>0 && nMessage==1?<p>you have {nMessage} new message</p>:<p>you have {nMessage} new messages</p>}
            <button onClick={addMessages}>add new messages</button>
        </div>
    );
}

export default OptionalRender;
