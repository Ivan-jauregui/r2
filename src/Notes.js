import React, { useState, useEffect } from 'react';
import './Notes.css';

const Notes = () => {
  const [note, setNote] = useState('');
  const [savedNotes, setSavedNotes] = useState([]);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (note.trim()) {
        saveNote();
      }
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [note]);

  const handleChange = (e) => {
    setNote(e.target.value);
    setIsSaving(true);
  };

  const saveNote = () => {
    setSavedNotes((prevNotes) => [...prevNotes, note]);
    setNote('');
    setIsSaving(false);
  };

  const deleteNote = (index) => {
    setSavedNotes((prevNotes) => prevNotes.filter((_, i) => i !== index));
  };

  return (
    <div className="note-app">
      <h1>Aplicación de Notas</h1>
      <textarea
        className="note-input"
        value={note}
        onChange={handleChange}
        placeholder="Escribe tu nota aquí..."
      />
      {isSaving && <p className="saving-message">Guardando nota...</p>}
      <h2 className='notes-title'>Notas</h2>
      <ul className="notes-list">
        {savedNotes.map((savedNote, index) => (
          <li key={index} className="note-item">
            <div className="note-content">{savedNote}</div>
            <button className="delete-button" onClick={() => deleteNote(index)}>
              Borrar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
