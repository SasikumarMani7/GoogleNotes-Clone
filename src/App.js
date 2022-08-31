import React, { useState } from 'react'
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Note from './components/note/Note';
import TextArea from './components/textArea/TextArea';

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    })
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((_, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <TextArea onAdd={addNote} />
      {
        notes.map((noteItem, index) => {
          return (
            <Note key={index} title={noteItem.title} content={noteItem.content} id={index} onDelete={deleteNote} />
          );
        })
      }
      <Footer />
    </div>
  );
}

export default App;
