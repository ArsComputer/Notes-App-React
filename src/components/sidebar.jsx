import { NoteCard } from "./noteCard.jsx";

export function Sidebar({ notes, onAddNote, onNoteSelect }) {
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

    onAddNote(newNotesList);

    return newNotesList;
  }

  function cardClickHandler(target, note) {
    if (target.classList.contains('delete-button')) {
      const updatedNotes = handleDeleteNote(note.id);
      
      if (!note.isSelected) {
        const selectedNote = updatedNotes.find(n => n.isSelected);
        onNoteSelect(selectedNote, updatedNotes);
        return;
      }

      const indexToSelect = notes.findIndex(n => n.id === note.id) - 1;
      const noteToSelect = notes[indexToSelect];

      if (indexToSelect === -1) {
        onNoteSelect(null);
        return;
      }

      onNoteSelect(noteToSelect, updatedNotes);

      return;
    }

    onNoteSelect(note, notes);
  }

  const NotesList = notes.map(note =>
    <NoteCard key={note.id} note={note} onCardClick={cardClickHandler} />
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
