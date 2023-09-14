import React from 'react';

const Modal = ({ src, alt, onClose }) => (
  <div className="overlay" onClick={onClose}>
    <div className="modal">
      <img src={src} alt={alt} />
    </div>
  </div>
);

export default Modal;
