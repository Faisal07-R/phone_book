// src/components/Pagination.tsx
import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div css={paginationContainer}>
      <button onClick={handlePrevious} disabled={currentPage === 1} css={paginationButton}>
        Sebelumnya
      </button>
      <span css={pageInfo}>
        Halaman {currentPage} dari {totalPages}
      </span>
      <button onClick={handleNext} disabled={currentPage === totalPages} css={paginationButton}>
        Berikutnya
      </button>
    </div>
  );
};

// Styling dengan Emotion
const paginationContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px 0;
`;

const paginationButton = css`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 8px;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const pageInfo = css`
  margin: 0 8px;
`;

export default Pagination;
