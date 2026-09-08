// import { useState } from 'react'

function App() {
  // const [note, setNote] = useState('')

  return (
    <div className="notes-app">
      <aside class="sidebar">
        <div class="container">
          <h1 class="app-title">Ars NotesApp</h1>

          <span class="separator"></span>

          <div class="notes-box">
            <div class="notes-manager">
              <span class="sidebar-title">Catatan</span>
              <button type="button" class="btn" id="new-btn">
                +
              </button>
            </div>

            <nav class="notes-container" id="notes-container">
              <ol class="notes-list" id="notes-list">
                {/* Dynamic notes will be rendered here */}
              </ol>
            </nav>
          </div>
        </div>
      </aside>

      <main class="main-content">
        <div class="container">
          <div class="note-editor">
            <div class="head-editor">
              <input
                type="text"
                placeholder="Judul"
                class="title-input"
                id="title-input"
              />
              <button type="button" class="save-btn" id="save-btn">
                Simpan
              </button>
            </div>
            <textarea
              placeholder="Masukkan catatan..."
              class="content-input"
              id="content-input"
            ></textarea>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
