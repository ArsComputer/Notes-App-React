// import { useState } from 'react'
// import { NoteCard } from "./components/noteCard";
import { Sidebar } from "./components/sidebar.jsx";

function App() {
  // const [note, setNote] = useState('')

  return (
    <div className="notes-app">
      <Sidebar />

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
