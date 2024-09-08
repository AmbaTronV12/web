import React from "react";
import './Follow.css'

function follow({ position,isOpen, onClose, children }) {
    if (!isOpen) return null; // Render nothing if the modal is not open

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); // Close the modal if the background is clicked
    }
  };

  return(
    <div className="popup-background" onClick={onClose}>
      <div
        className="popup"
        style={{
          top: `${position.y}px`,
          left: `${position.x}px`,
        }}
        onClick={handleOverlayClick}
      >
          {children} {/* Custom content */}
      </div>
    </div>
  )
}

export default follow