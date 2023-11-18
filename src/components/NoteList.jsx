import React from 'react'
import Note from './Note'
import '../index.css'
import AddTask from './AddTask'

export default function NoteList({notes, getTask, deleteTask}) {
  return (
    <div className='note-list'>
        {notes.map((note) => {
            return(
                <Note id={note.id} task={note.text} date={note.date} deleteTask={deleteTask} key={note.id}/>
            )
        })}
        <AddTask getTask={getTask}/>
    </div>
  )
}
