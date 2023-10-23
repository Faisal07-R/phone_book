/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from "@emotion/react";
import React from "react";

interface ContactListProps {
  contacts: Array<{ firstName: string; lastName: string; phone: string }>;
}

const ContactList: React.FC<ContactListProps> = ({ contacts }) => {
  const [favoriteContacts, setFavoriteContacts] = useState([]);

  const addToFavorites = (contact) => {
    setFavoriteContacts([...favoriteContacts, contact]);
  };
  return (
    <div css={container}>
      <h2 css={header}>Daftar Kontak</h2>
      <ul css={list}>
        {contacts.map((contact, index) => (
          <li key={index} css={item}>
            {contact.firstName} {contact.lastName} - {contact.phone}
            <button onClick={() => addToFavorites(contact)}> Tambahkan ke Favorit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const container = css`
  max-width: 600px;
  margin: 0 auto;
  padding: 16px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const header = css`
  margin-bottom: 16px;
  color: black;
`;

const list = css`
  list-style: none;
  padding: 0;
`;

const item = css`
  background-color: black;
  padding: 12px;
  margin-bottom: 8px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export default ContactList;
