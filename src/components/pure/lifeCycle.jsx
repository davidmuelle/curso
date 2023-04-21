// ejemplo de componente de tipo clase que dispone de los métodos de ciclo de vida
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class LifeCycle extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
        console.log("constructor?")
    }

componentDidMount(){
    console.log("didmount: justo al del montaje del componente, antes de renderizarlo")
}


shouldComponentUpdate(nextProps,nextState){
//    controlar si el componente debe o no actualizarse
    //return true  
     console.log("didupdate: justo al del montaje del componente, antes de actualizarse")
}


componentWillUnmount(){
     console.log("willunmount: justo antes de desaparecer")
}

}


LifeCycle.propTypes = {

};


export default LifeCycle;
