// BUG: bug aneh waktu add note pake tombol +, notenya ga nambah tapi di state notes tapi udah nambah di local storage nya, jadinya notes card ga kerender.

import { useState, useEffect } from "react";
import { Sidebar } from "./components/sidebar.jsx";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(
    { id: "", title: "", content: "", isSelected: false }
  );

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));
    setNotes(savedNotes || notes);
  }, []);
  console.log(notes)
  
  function handleWhenSelectNote(note) {
    const updatedNote = { ...note, isSelected: true };
    const updatedNotes = notes.map((n) => {
      if (n.id !== note.id)
        return { ...n, isSelected: false };

      return updatedNote;
    });

    setNotes(updatedNotes);
    setSelectedNote(updatedNote);
  }

  function handleWhenAddNote(newNote) {
    const newNotes = [...notes, newNote];

    setNotes(newNotes);
    localStorage.setItem('notes' ,JSON.stringify(newNotes));
  }

  function handleWhenDeleteNote(newNotes) {
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  }

  function handleInputChange(value, notePropertyName) {
    if (!selectedNote) return;

    setSelectedNote({
      ...selectedNote,
      [notePropertyName]: value,
    });
  }

  function handleSaveNote(target) {
    if (!selectedNote.id) {
      const id = crypto.randomUUID();
      const newNote = { ...selectedNote, id };

      handleWhenAddNote(newNote);
      handleWhenSelectNote(newNote, target);

      return;
    }

    const updatedNotes = notes.map((note) => {
      if (note.id !== selectedNote.id) return note;

      return selectedNote;
    });

    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  }

  return (
    <div className="notes-app">
      <Sidebar
        notes={notes}
        onAddNote={handleWhenAddNote}
        onNoteSelect={handleWhenSelectNote}
        onDeleteNote={handleWhenDeleteNote}
      />

      <main className="main-content">
        <div className="container">
          <div className="note-editor">
            <div className="head-editor">
              <input
                type="text"
                placeholder="Judul"
                className="title-input"
                id="title-input"
                value={selectedNote.title}
                onChange={(e) => handleInputChange(e.target.value, "title")}
              />
              <button
                type="button"
                className="save-btn"
                id="save-btn"
                onClick={(e) => handleSaveNote(e.target)}
              >
                Simpan
              </button>
            </div>
            <textarea
              placeholder="Masukkan catatan..."
              className="content-input"
              id="content-input"
              value={selectedNote.content}
              onChange={(e) => handleInputChange(e.target.value, "content")}
            ></textarea>
          </div>
        </div>
      </main>
    </div>
  );
}
