import React, { useState } from 'react';
import './AdivinarNumero.css';

const AdivinarNumero = () => {
  const [randomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [lives, setLives] = useState(5); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const num = parseInt(guess, 10);

    if (lives > 1) {
      if (num < randomNumber) {
        setMessage('Más alto');
        setLives(lives - 1);
      } else if (num > randomNumber) {
        setMessage('Más bajo');
        setLives(lives - 1);
      } else {
        setMessage('¡Adivinaste el numero! Has ganado.');
      }
    } else {
      setMessage('¡No te tienes mas vidas! El número era ' + randomNumber);
      setLives(0); 
    }
  };

  return (
    <div className="game">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Ingresa tu número"
        />
        <button type="submit" disabled={lives === 0}>Adivinar</button>
      </form>
      <p>{message}</p>
      <p>Vidas restantes: {lives}</p>
    </div>
  );
};

export default AdivinarNumero;
