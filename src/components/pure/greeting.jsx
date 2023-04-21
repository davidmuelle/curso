import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {
    //los props son las propiedades que se le estan pasando
    constructor(props) {
        super(props)
        //el state es informacion privada del componente
        this.state = {
            edad: 29
        }
    }


    render() {
        return (
            <div>
                <h1>hola {this.props.name}</h1>
                <h2>edad: {this.state.edad}</h2>
                <div>
                    <button onClick={this.birthday}>
                        cumplir años
                    </button>
                </div>
            </div>
        );
    }
     birthday = () => {
        this.setState((prevState) => (
            {
                //aqui cogemos el state anterior y le sumamos uno para devolver un nuevo estado y un nuevo render
                edad:prevState.edad +1
            }
        ))
    }
}


Greeting.propTypes = {
    name: PropTypes.string
};


export default Greeting;
