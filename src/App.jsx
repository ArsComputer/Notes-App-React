// import { useState } from 'react'

function App() {
  // const [note, setNote] = useState('')

  return (
    <div className="notes-app">
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

                {/* Dynamic notes will be rendered here */}
            <nav className="notes-container" id="notes-container">
              <ol className="notes-list" id="notes-list">


              </ol>
            </nav>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <div className="container">
          <div className="note-editor">
            <div className="head-editor">
              <input
                type="text"
                placeholder="Judul"
                className="title-input"
                id="title-input"
              />
              <button type="button" className="save-btn" id="save-btn">
                Simpan
              </button>
            </div>
            <textarea
              placeholder="Masukkan catatan..."
              className="content-input"
              id="content-input"
            ></textarea>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
