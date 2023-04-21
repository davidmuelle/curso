import React, { useState } from 'react';
import { getNumbers } from '../../services/observableService';
const ObservableExample = () => {


    const [number, setnumber] = useState(0);
    //en este caso los observables son como promesas que se van repitiendo en este caso el next es como el .then
    const obtainNewNumbers = () => {
        console.log('subscription to observable')
        getNumbers.subscribe({
            next(newNumber) {
                console.log('new number: ' + newNumber)
                setnumber(newNumber)
            },
            error(error) {
                alert('something went wrong: ' + error)
            },
            complete() {
                console.log('finished subcription to observable')
                alert('finished with: ' + number)
            }
        })
    }
    return (
        <div>
            <h1>number: {number}</h1>
            <button onClick={obtainNewNumbers}>obtain new Number</button>
        </div>
    );
}

export default ObservableExample;
