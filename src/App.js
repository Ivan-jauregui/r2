import React from 'react';
import './App.css';
import Gallery from './Gallery';
import Form from './Form';
import AdivinarNumero from './AdivinarNumero';
import ButtonEffect from './ButtonEffect';
import Notes from './Notes';

function App() {
  return (
    <div className="App">

      <section className="component">
        <h2>Galería de Imágenes</h2>
        <Gallery />
      </section>

      <section className="component">
        <Form />
      </section>

      <section className="component">
        <h2>Juego de Adivinar Número</h2>
        <AdivinarNumero />
      </section>

      <section className="component">
        <h2>Botones de Clic y Doble Clic</h2>
        <ButtonEffect />
      </section>

      <section className="component">
        <Notes />
      </section>
    </div>
  );
}

export default App;
