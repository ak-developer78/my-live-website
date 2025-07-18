import React, { useEffect } from 'react';
import '../css/Modal.css'
const Modal = ({ isOpen, onClose, children, customClass = '' }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className={`modal-content ${customClass}`} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;