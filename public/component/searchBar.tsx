// src/components/SearchBar.tsx
import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div css={container}>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} css={input} />
      <button onClick={handleSearch} css={button}>
        Cari
      </button>
    </div>
  );
};

// Styling dengan Emotion
const container = css`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const input = css`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
  flex-grow: 1;
`;

const button = css`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default SearchBar;
