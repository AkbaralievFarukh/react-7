import React, { useState } from 'react';
import './EditModal.css'

const EditModal = ({ isOpen, onClose, onSave, initialText }) => {
  const [editedText, setEditedText] = useState(initialText);

  const handleSave = () => {
    onSave(editedText);
    onClose();
  };

  return (
    <div className={`edit-modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default EditModal