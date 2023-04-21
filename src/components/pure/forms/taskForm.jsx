import React, { useRef } from 'react'
import PropTypes from 'prop-types';
import { levels } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';
export const TaskForm = ({ add,length }) => {
  const nameRef = useRef('')
  const desciptionRef = useRef('')
  const levelRef = useRef(levels.normal)

  function addTask(e) {
    e.preventDefault()
    const newTask = new Task(
      nameRef.current.value,
      desciptionRef.current.value,
      false,
      levelRef.current.value

      )
      add(newTask)
  }

const normalStyle={
  color:'blue',
  fontWeight:'bold'
}

const urgentStyle={
  color:'yellow',
  fontWeight:'bold'

}

const blockingStyle={
  color:'red',
  fontWeight:'bold'

}

  return (
    <form onSubmit={addTask}>
      <div className='form-outline flex-fill'>
        <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' placeholder='task name' required autoFocus />
        <input ref={desciptionRef} id='descriptionName' type='text' className='form-control form-control-lg' placeholder='task description' required />
        <label htmlFor='selectlevel' className='sr-only'>Priority</label>
        <select ref={levelRef} defaultValue={levels.normal} id='selectlevel'>
          <option style={normalStyle} value={levels.normal}>
            normal
          </option>
          <option style={urgentStyle} value={levels.urgente}>
            urgente
          </option>
          <option style={blockingStyle} value={levels.blocking}>
            blocking
          </option>
        </select>

        
      </div>
      <button type='submit' className='btn btn-success btn-lg ms-2'>{length>0?"add new task":"create your first task"}</button>
    </form>
  )
}

TaskForm.propTypes = {
  add: PropTypes.func.isRequired,
  length:PropTypes.number.isRequired
};
