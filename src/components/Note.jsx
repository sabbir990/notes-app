import React from 'react'
import { MdDeleteForever } from 'react-icons/md'
import '../index.css'

export default function Note({ id, task, date, deleteTask }) {
  const handleDeleteClick = () => {
    deleteTask(id)
  }

  return (
    <div className='note'>
      <span>{task}</span>
      <div>
        <small>{date}</small>
        <div>
          <MdDeleteForever className='delete-icon' size='1.3em' onClick={handleDeleteClick} />
        </div>
      </div>
    </div>
  )
}
