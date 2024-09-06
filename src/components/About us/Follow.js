import React from "react";
import './Follow.css'

function follow({ isOpen, onClose, children }) {
    if (!isOpen) return null; // Render nothing if the modal is not open

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); // Close the modal if the background is clicked
    }
  };

  return(
    <div className="follow-overlay" onClick={handleOverlayClick}>
      <div className="follow-content">
            {children}
      </div>
    </div>
  )
}

export default follow