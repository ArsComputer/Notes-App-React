export function NoteCard(note, id, onDelete) {
  return (
    <li className="note-item" data-id={id}>
      <div className="note-wrapper">
        <span className="note-title">{note.title}</span>
        <button className="btn delete-button" onClick={() => onDelete(id)}>
          ×
        </button>
      </div>
    </li>
  )
}