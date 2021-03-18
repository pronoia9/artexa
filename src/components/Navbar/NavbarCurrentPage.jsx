import React from 'react';

export default function MenuBarCurrentPage(props) {
  return (
    <div className='art-current-page'>
      <span>{props.currentPage}</span>
    </div>
  );
}
