export function NoteCard({note, onDelete, onSelect}) {
  return (
    <li className="note-item" data-id={note.id} onClick={() => onSelect(note)}>
      <div className="note-wrapper">
        <span className="note-title">{note.title}</span>
        <button className="btn delete-button" onClick={() => onDelete(note.id)}>
          ×
        </button>
      </div>
    </li>
  )
}