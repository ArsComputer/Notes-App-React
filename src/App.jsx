import { useState } from 'react'
import { Sidebar } from "./components/sidebar.jsx";

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  function handleWhenSelectNote(note) {
    setSelectedNote(note);
  }

  function handleWhenAddNote(newNote) {
    setNotes([...notes, newNote]);
    // TODO: simpan ke local storage
  }

  function handleInputChange(value, notePropertyName) {
    if (!selectedNote) return;

    setSelectedNote({
      ...selectedNote,
      [notePropertyName]: value
    })
  }

  // function handleSaveNotes() {
    
  // }

  return (
    <div className="notes-app">
      <Sidebar
        notes={notes}
        onAddNote={handleWhenAddNote}
        onNoteSelect={handleWhenSelectNote}
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
                value={selectedNote?.title || ""}
                onChange={(e) => handleInputChange(e.target.value, "title")}
              />
              <button type="button" className="save-btn" id="save-btn">
                Simpan
              </button>
            </div>
            <textarea
              placeholder="Masukkan catatan..."
              className="content-input"
              id="content-input"
              value={selectedNote?.content || ""}
              onChange={(e) => handleInputChange(e.target.value, "content")}
            ></textarea>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
