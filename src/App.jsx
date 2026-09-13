import { useState, useEffect } from "react";
import { Sidebar } from "./components/sidebar.jsx";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    setNotes(savedNotes || notes);
  }, []);

  function handleWhenSelectNote(note, newNotes = notes) {
    if (!note) {
      setSelectedNote(null);
      return;
    }

    const updatedNote = { ...note, isSelected: true };
    const updatedNotes = newNotes.map((n) => {
      if (n.id !== note.id) return { ...n, isSelected: false };

      return updatedNote;
    });

    setNotes(updatedNotes);
    setSelectedNote(updatedNote);
  }

  function handleWhenAddNote(newNotes) {
    const neutralNotes = newNotes.map((note) => ({
      ...note,
      isSelected: false,
    }));

    setNotes(neutralNotes);
    localStorage.setItem("notes", JSON.stringify(neutralNotes));
  }

  function handleInputChange(value, notePropertyName) {
    let currNote = selectedNote;

    if (!currNote) {
      currNote = {
        id: "",
        title: "",
        content: "",
        isSelected: false,
      };
    }

    setSelectedNote({
      ...currNote,
      isSelected: true,
      [notePropertyName]: value,
    });
  }

  function handleSaveNote() {
    if (!selectedNote.id) {
      const id = crypto.randomUUID();
      const newNote = { ...selectedNote, id };
      const newNotes = [...notes, newNote];

      handleWhenAddNote(newNotes);
      handleWhenSelectNote(newNote, newNotes);

      return;
    }

    const updatedNotes = notes.map((note) => {
      if (note.id !== selectedNote.id) return note;

      return selectedNote;
    });

    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  }

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
                value={selectedNote ? selectedNote.title : ""}
                onChange={(e) => handleInputChange(e.target.value, "title")}
              />
              <button
                type="button"
                className="save-btn"
                id="save-btn"
                onClick={handleSaveNote}
              >
                Simpan
              </button>
            </div>
            <textarea
              placeholder="Masukkan catatan..."
              className="content-input"
              id="content-input"
              value={selectedNote ? selectedNote.content : ""}
              onChange={(e) => handleInputChange(e.target.value, "content")}
            ></textarea>
          </div>
        </div>
      </main>
    </div>
  );
}
