import { useState } from "react";
import { NoteCard } from "./noteCard.jsx";

export function Sidebar() {
  const [notes, setNotes] = useState([{
    id: 1,
    title: "Note 1",
    content: "This is the content of note 1."
  },
  {
    id: 2,
    title: "Note 2",
    content: "This is the content of note 2."
  }]);

  function handleAddNotes() {
    const newNote = {
      id: crypto.randomUUID(),
      title: prompt('Tambahkan Judul Catatan Mu'),
      content: prompt('Tulis Catatan'),
    };

    setNotes([...notes, newNote]);
  }

  function handleDeleteNote(noteId) {
    const newNotesList = notes.filter(note => note.id !== noteId);

    setNotes(newNotesList);
    // console.log(newNotesList)
  }

  const NotesList = notes.map(note =>
    <NoteCard key={note.id} note={note} onDelete={handleDeleteNote} />
  );

  return (
    <aside className="sidebar">
      <div className="container">
        <h1 className="app-title">Ars NotesApp</h1>

        <span className="separator"></span>

        <div className="notes-box">
          <div className="notes-manager">
            <span className="sidebar-title">Catatan</span>
            <button type="button" className="btn" id="new-btn" onClick={handleAddNotes}>
              +
            </button>
          </div>

          <nav className="notes-container" id="notes-container">
            <ol className="notes-list" id="notes-list">
              {NotesList}
            </ol>
          </nav>
        </div>
      </div>
    </aside>
  );
}
