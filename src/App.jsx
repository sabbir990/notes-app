import React, { useEffect, useState } from 'react';
import './index.css';
import NoteList from './components/NoteList';
import { nanoid } from 'nanoid';
import Search from './components/Search';
import Header from './components/Header';

export default function App() {
  const [searchedValue, setSearchedValue] = useState('');
  const [notes, setNotes] = useState([]);
  const [toggle, setToggle] = useState();

  const getTask = (value) => {
    if (value.trim().length > 0) {
      const date = new Date().toLocaleDateString();
      const task = {
        id: nanoid(),
        text: value,
        date: date,
      };

      const newTask = [...notes, task];
      setNotes(newTask);
    }
  };

  const deleteTask = (id) => {
    const delTask = notes.filter((note) => note.id !== id);
    setNotes(delTask);
  };

  const getSearchedValue = (value) => {
    setSearchedValue(value);
  };

  const togglebg = (value) => {
    setToggle(value);
  };

  useEffect(() => {
    const storedNotes = localStorage.getItem('Notes');

    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('Notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <div className={`${toggle && 'dark-mode'}`}>
      <div className={`container`}>
        <Header togglebg={togglebg} toggle={toggle} />
        <Search getSearchedValue={getSearchedValue} />
        <NoteList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchedValue)
          )}
          getTask={getTask}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}
