import React, { useState, useEffect } from 'react'
// import ‘../../styles/clock.scss’;

// class Clock extends Component {
//    constructor(props) {
//       super(props);
//       // Estado privado del component
//       this.state = {
//          // Se genera una fecha como estado inicial del componente
//          fecha: new Date(),
//          edad: 0,
//          nombre: ‘Martín’,
//          apellidos: ‘San José’
//       };
//    }
//    componentDidMount(){
//       this.timerID = setInterval (
//          () => this.tick(), 1000
//       );
//    }
//    componentWillUnmount() {
//       clearInterval (this.timerID);
//    }
//    render() {
//       return (
//          <div>
//          <h2>
//          Hora Actual:
//          {this.state.fecha.toLocaleTimeString()}
//          </h2>
//          <h3>{this.state.nombre} {this.state.apellidos}</h3>
//          <h1>Edad: {this.state.edad}</h1>
//          </div>
//       )
//    }
//    tick(){
//       this.setState((prevState) => {
//          let edad = prevState.edad +1;
//          return {
//             ...prevState,
//             fecha: new Date(),
//             edad
//          }
//       });
//    }
// }
// export default Clock;


const Clock = () => {
    const inicio = {
        //          // Se genera una fecha como estado inicial del componente
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    };

    const [persona, setpersona] = useState(inicio);

    useEffect(() => {
        const timerID = setInterval(
            () => tick(), 1000)
        return (() => {
            clearInterval(timerID);
        })
    }, [])



    
    const tick = () => {
        setpersona((persona) => {
            let edad = persona.edad + 1;
            let nombre=persona.nombre
            
            return {
               persona,
                fecha: new Date(),
                edad,nombre
            }
        });

        
        
    }
    return (
        <div>
            <p>fecha: {persona.fecha.toLocaleTimeString()}</p>
            <p>nombre: {persona.nombre}</p>
            <p>edad: {persona.edad}</p>
        </div>
    );
}
export default Clock;
