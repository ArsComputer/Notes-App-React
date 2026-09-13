import { NoteCard } from "./noteCard.jsx";

export function Sidebar({ notes, onAddNote, onNoteSelect, onDeleteNote }) {
  function handleAddNote() {
    const newNote = {
      id: crypto.randomUUID(),
      title: 'Untitled',
      content: '',
      isSelected: false,
    };

    const newNotes = [...notes, newNote];

    onAddNote(newNotes);
    onNoteSelect(newNote, newNotes);
  }

  function handleDeleteNote(noteId) {
    const newNotesList = notes.filter(note => note.id !== noteId);

    onDeleteNote(newNotesList);
  }

  const NotesList = notes.map(note =>
    <NoteCard key={note.id} note={note} onDelete={handleDeleteNote} onSelect={onNoteSelect} />
  );

  return (
    <aside className="sidebar">
      <div className="container">
        <h1 className="app-title">Ars NotesApp</h1>

        <span className="separator"></span>

        <div className="notes-box">
          <div className="notes-manager">
            <span className="sidebar-title">Catatan</span>
            <button type="button" className="btn" id="new-btn" onClick={handleAddNote}>
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
