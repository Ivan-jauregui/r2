import React, { useState } from 'react';
import './ButtonEffect.css';

const ButtonEffect = () => {
  const [bgColor, setBgColor] = useState('#f9f9f9');
  const [isTextVisible, setIsTextVisible] = useState(true);
  const [counter, setCounter] = useState(0);


  const handleClick = () => setBgColor(bgColor === '#f9f9f9' ? '#cce7ff' : '#f9f9f9');

  const handleDoubleClick = () => alert('Doble click en Botón 1');


  const handleToggleText = () => setIsTextVisible(!isTextVisible);


  const handleIncrementCounter = () => setCounter(counter + 1);

  return (
    <div className="buttons" style={{ backgroundColor: bgColor }}>
      <button onClick={handleClick} onDoubleClick={handleDoubleClick}>
        Botón 1 (Cambia Fondo)
      </button>

      <button onDoubleClick={handleDoubleClick}>
        Botón 2 (Solo Doble Clic)
      </button>

      <button onDoubleClick={handleToggleText}>
        Botón 3 (Mostrar/Ocultar Texto)
      </button>

      <button onDoubleClick={handleIncrementCounter}>
        Botón 4 (Incrementar Contador)
      </button>

      <p>{isTextVisible ? 'Este es un texto visible.' : 'Texto oculto.'}</p>
      <p>Contador: {counter}</p>
    </div>
  );
};

export default ButtonEffect;
