import React from 'react';

export default function MenuBarCurrentPage({ currentPage }) {
  return (
    <div className='art-current-page'>
      <span>{currentPage}</span>
    </div>
  );
}