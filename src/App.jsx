import { useState } from "react";
import { Sidebar } from "./components/sidebar.jsx";

export default function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    return savedNotes || [];
  });

  const [draft, setDraft] = useState({
    title: "",
    content: "",
  });

  function handleWhenSelectNote(note, newNotes = notes) {
    if (!note) {
      setNotes(newNotes);
      setDraft({ title: "", content: "" });
      return;
    }

    const updatedNotes = newNotes.map((n) => {
      return { ...n, isSelected: n.id === note.id };
    });

    setNotes(updatedNotes);
    setDraft({
      title: note.title,
      content: note.content,
    });
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
    setDraft((currentDraft) => ({
      ...currentDraft,
      [notePropertyName]: value,
    }));
  }

  function handleSaveNote() {
    if (!draft.title.trim()) {
      return alert("Judul catatan tidak boleh kosong!");
    }

    const selectedNote = notes.find((note) => note.isSelected);

    if (!selectedNote) {
      const newNote = {
        id: crypto.randomUUID(),
        title: draft.title,
        content: draft.content,
        isSelected: false,
      };

      const updatedNotes = [
        ...notes.map((note) => ({ ...note, isSelected: false })),
        newNote,
      ];

      handleWhenAddNote(updatedNotes);
      handleWhenSelectNote(newNote, updatedNotes);
      return;
    }

    const updatedNote = {
      ...selectedNote,
      title: draft.title,
      content: draft.content,
    };

    const updatedNotes = notes.map((note) => {
      if (note.id !== selectedNote.id) return note;

      return {
        ...note,
        title: draft.title,
        content: draft.content,
      };
    });

    handleWhenAddNote(updatedNotes);
    handleWhenSelectNote(updatedNote, updatedNotes);
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
                value={draft.title}
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
              value={draft.content}
              onChange={(e) => handleInputChange(e.target.value, "content")}
            ></textarea>
          </div>
        </div>
      </main>
    </div>
  );
}
