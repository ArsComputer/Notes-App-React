export function NoteCard({ note, onCardClick }) {
  return (
    <li
      className={`note-item ${note.isSelected ? "note-active" : ""}`}
      data-id={note.id}
      onClick={(e) => onCardClick(e.target, note)}
    >
      <div className="note-wrapper">
        <span className="note-title">{note.title}</span>
        <button className="btn delete-button">×</button>
      </div>
    </li>
  );
}
