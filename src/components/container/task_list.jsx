import React, { useState, useEffect } from 'react'

import { Task } from '../../models/task.class'
import { levels } from '../../models/levels.enum'
import { TaskForm } from '../pure/forms/taskForm'
import TaskComponent from '../pure/task'



const TasklistComponent = () => {

  const defaultTask = new Task("ejemplo", "default desciption", false, levels.normal)
  const defaultTask2 = new Task("ejemplo2", "desciption2", true, levels.urgent)
  const defaultTask3 = new Task("ejemplo3", "default desciption3", false, levels.blocking)

  //estado del componente
  const [tasks, settasks] = useState([defaultTask, defaultTask2, defaultTask3]);
  const [loading, setloading] = useState(true);

  //control del ciclo de vida del componente
  useEffect(() => {
    console.log("task State has been modified")

    setTimeout(() => {
      setloading(false)
    }, 2000);

    return () => {
      console.log("task State is going to unmount")
    };
  }, [tasks]);

  const changeCompleted = (id) => {
    console.log("cambiar estado de una tarea")
  }


  function deleteTask(task) {
    console.log("delete this task: ", task)
    //con esto sacamos el indice de la tarea que ha llegador por parametro
    const index = tasks.indexOf(task);
    const tempTask = [...tasks]
    // con esto borramos el elemento que hemos buscado en el array de tareas 
    // empezamos a buscar a partir del elemento index y borramos solo 1 (borrariamos index solo)
    tempTask.splice(index, 1)
    settasks(tempTask)

  }



  function completeTask(task) {
    console.log("complete this task: ", task)
    //con esto sacamos el indice de la tarea que ha llegador por parametro
    const index = tasks.indexOf(task);
    //con lo de los 3 puntos conseguimos todas las tareas
    const tempTask = [...tasks]
    //con esto estoy cambiando el valor de completed de la posicion que he recuperado anteriormente en el array  temporal
    tempTask[index].completed = !tempTask[index].completed
    //y con el settask estoy actualizando el array antiguo de tareas con las tareas  del array temporal que he creado llamado temptask
    //al actualizarse el estado del padre se actualiza el hijo y me cambia el icono
    settasks(tempTask)
  }

  function addTask(task) {
    console.log("complete this task: ", task)

    //con lo de los 3 puntos conseguimos todas las tareas
    const tempTask = [...tasks]
    //aqui añadimos la nueva tarea (que nos llega por parametro)
    tempTask.push(task)
    //y actualizamos la lista de tareas
    settasks(tempTask)
  }

  const TaskTable = () => {
    return (
      <table>
        <thead>

          <tr>
            <th scope='col'>title</th>
            <th scope='col'>description</th>
            <th scope='col'>Priority</th>
            <th scope='col'>Actions</th>
          </tr>

        </thead>

        <tbody>

          {/* aqui estamos itarando tasks que es donde estan nuestras tareas */}
          {tasks.map((task, index) => {
            return (<TaskComponent key={index} task={task} complete={completeTask} remove={deleteTask}></TaskComponent>)
          })}




        </tbody>

      </table>)
  }


  return (
    <div>

      <div className='col-12'>

        <div className='card'>
          {/* lo de p es el padding */}
          <div className='card-header p-3'>
            <h5 className='text-primary'>
              tus tareas:
            </h5>
          </div>

        </div>
        {/* card body */}
        <div className='card-body bg-info' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
          {!loading ? (tasks.length > 0) ? TaskTable() : <h1>no hay tareas disponibles</h1> : "cargando tareas"}
          {/* {taskTable} */}
        </div>

      </div>
      {/* <taskForm></taskForm> */}
      {/* hacer un  for o map para mostrar una lista de tareas */}

      {/* aqui le estamos pasando como props la tarea que nos hemos creado arriba
    porque hemos puesto en el componente task.jsx que el prop era de tipo clase Task que es la clase de task.class*/}
      <TaskForm length={tasks.length} add={addTask} />
    </div>
  )
}



export default TasklistComponent
