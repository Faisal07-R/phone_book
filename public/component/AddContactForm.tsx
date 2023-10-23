/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";

interface AddContactFormProps {
  onAddContact: (firstName: string, lastName: string, phone: string) => void;
}

const AddContactForm: React.FC<AddContactFormProps> = ({ onAddContact }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    onAddContact(firstName, lastName, phone);
    setFirstName("");
    setLastName("");
    setPhone("");
  };

  return (
    <div css={formContainer}>
      <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} css={inputField} />
      <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} css={inputField} />
      <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} css={inputField} />
      <button onClick={handleSubmit} css={submitButton}>
        Tambah Kontak
      </button>
    </div>
  );
};

// Styling dengan Emotion
const formContainer = css`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const inputField = css`
  padding: 8px;
  margin-bottom: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const submitButton = css`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default AddContactForm;
