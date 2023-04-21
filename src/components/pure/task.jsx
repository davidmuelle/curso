import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { levels } from '../../models/levels.enum';
import "../../styles/task.scss"
// importamos la hoja de estilos de task


const TaskComponent = ({ task , complete,remove}) => {
    //cada modificacion que haya en task se realizará el siguiente código
    useEffect(() => {
        console.log("tarea creada")
        return () => {
            console.log(`Task: ${task.name} is going to unmount`)
        }
    }, [task])




    /**funcion que devuelve un badge
     * dependiendo el level de task
     */

    function taskLevelBadge() {
        switch (task.level) {
            case levels.normal:
                return (<h6 className='mb-0'><span className='badge bg-primary'>{task.level}</span></h6>)
              

            case levels.urgent:
                return (<h6 className='mb-0'><span className='badge bg-danger'>{task.level}</span></h6>)
               

            case levels.blocking:
                return (<h6 className='mb-0'><span className='badge bg-warning'>{task.level}</span></h6>)
                

            default:
                break;
        }
    }

    // funcion que devuelve un icono dependiendo de si la tarea esta completada o no
    function taskIconCompleted() {
        if (task.completed) {  
           return (<i onClick={()=>{complete(task)}} className='bi-toggle-on task-action' style={{ color: 'green', fontWeight: 'bold' }} />)
        } else
           return (<i onClick={()=>{complete(task)}}  className='bi-toggle-off task-action' style={{ color: 'red ', fontWeight: 'bold' }} />)
    }

    return (

        <tr className={task.completed?'task-completed fw-normal':'task-pending fw-normal'}>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span >{task.description}</span>
            </td>
            <td className='align-middle'>
                {/* ejecucion de la funcion que devuelve badge  */}
                <span >{taskLevelBadge()}</span>
            </td>
            <td className='align-middle'>
                <span >{taskIconCompleted()}</span>
                <i className='bi-trash task-action' onClick={()=>remove(task)} style={{color:'tomato'}}></i>
            </td>
        </tr>



        // <div>
        // <h1>hola</h1>
        //     <h2 className='task-name'>nombre: {task.name}</h2>
        //     <h3>descripción: {task.description}</h3>
        //     <h4>level: {task.level}</h4>
        //     <h5>completed: {task.completed ? "si" : "no"}</h5>
        // </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task),
    complete:PropTypes.func.isRequired,
    remove:PropTypes.func.isRequired
};


export default TaskComponent;
