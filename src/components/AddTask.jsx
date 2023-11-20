import React, { useState } from 'react'
import '../index.css'

export default function AddTask({getTask}) {
    const [addTask, setAddTask] = useState('')

    const handleNewTaskChange = (event) => {
        if(event.target.value.trim().length <= 200){
            setAddTask(event.target.value)
        }
    }

    const remainingCharecter = 200;

    const handleAddTaskSave = () => {
        if(addTask.trim().length > 0){
            getTask(addTask);
            setAddTask('');
        }

    }
  return (
    <div className='addTask-parent'>
        <textarea cols="10" rows="6" placeholder='your task here' onChange={handleNewTaskChange} value={addTask} style={{resize : 'none'}}/>
        <div>
            <small>{remainingCharecter - addTask.trim().length} Remaining</small>
            <button onClick={handleAddTaskSave}>Save</button>
        </div>
    </div>
  )
}

