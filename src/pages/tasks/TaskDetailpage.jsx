import React from 'react';
import { useParams } from 'react-router-dom';
//el useparams me da los parametros
const TaskDetailpage = ({task}) => {
    const id = useParams();
    
    //si aqui pongo {id}=useparams()
    //debajo donde utilizo el id tendria que poner solo el id dentro de {} y no el objeto
    return (
        <div>
            <h1>task detail {id.id}</h1>
            <h2>{task.name}</h2>
            <h3>{task.description}</h3>
        </div>
    );
}

export default TaskDetailpage;
