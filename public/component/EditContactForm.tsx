// src/components/EditContactForm.tsx
import React, { useState } from "react";

interface EditContactFormProps {
  contactId: string;
  currentName: string;
  currentPhone: string;
  onEditContact: (contactId: string, newName: string, newPhone: string) => void;
}

const EditContactForm: React.FC<EditContactFormProps> = ({ contactId, currentName, currentPhone, onEditContact }) => {
  const [newName, setNewName] = useState(currentName);
  const [newPhone, setNewPhone] = useState(currentPhone);

  const handleSubmit = () => {
    onEditContact(contactId, newName, newPhone);
  };

  return (
    <div>
      <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
      <input type="text" value={newPhone} onChange={(e) => setNewPhone(e.target.value)} />
      <button onClick={handleSubmit}>Simpan Perubahan</button>
    </div>
  );
};

export default EditContactForm;
