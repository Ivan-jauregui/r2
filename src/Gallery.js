import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = ['https://img.freepik.com/fotos-premium/majestuosa-cordillera-refleja-escena-tranquila-belleza-generativa-ia_1038396-41.jpg', 'https://img.freepik.com/fotos-premium/pico-montana-nevada-galaxia-estrellada-majestad-ia-generativa_1038396-50.jpg', 'https://preview.redd.it/fresh-colorful-wallpapers-resolutions-minimum-4k-and-above-v0-hrqp1iwg9q8b1.jpg?width=640&crop=smart&auto=webp&s=71c36e62523b87763f0f786147692ac98e3afc43'];
  const [currentImage, setCurrentImage] = useState(0);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      setCurrentImage((currentImage + 1) % images.length);
    } else if (e.key === 'ArrowLeft') {
      setCurrentImage((currentImage - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="gallery" tabIndex="0" onKeyDown={handleKeyDown}>
      <img src={images[currentImage]} alt="gallery" />
    </div>
  );
};

export default Gallery;
