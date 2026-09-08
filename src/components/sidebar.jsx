export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="container">
        <h1 className="app-title">Ars NotesApp</h1>

        <span className="separator"></span>

        <div className="notes-box">
          <div className="notes-manager">
            <span className="sidebar-title">Catatan</span>
            <button type="button" className="btn" id="new-btn">
              +
            </button>
          </div>

          <nav className="notes-container" id="notes-container">
            <ol className="notes-list" id="notes-list">
              {/* Dynamic notes will be rendered here */}
            </ol>
          </nav>
        </div>
      </div>
    </aside>
  );
}
