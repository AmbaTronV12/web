
import React from 'react';
import './Contact.css';

function Contact({ isOpen, onClose, children }) {
  if (!isOpen) return null; // Render nothing if the modal is not open

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); // Close the modal if the background is clicked
    }
  };

  return (
    <div className="contact-overlay" onClick={handleOverlayClick}>
      <div className="contact-content">
        <div className='contact-header'>
            <h2>CONTACT US</h2>
            {/* <button onClick={onClose} className="close-button">&times;</button> */}
        </div>
        <div className='contact-body'>
            {children}
        </div>
      </div>
    </div>
  );
}

export default Contact;
