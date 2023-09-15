import React from 'react';
import "../styles.css";

const Modal = ({ src, alt, onClose }) => (
  <div className="Overlay" onClick={onClose}>
    <div className="Modal">
      <img src={src} alt={alt} />
    </div>
  </div>
);

export default Modal;
