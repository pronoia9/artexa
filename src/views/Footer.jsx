import React from 'react';

export default function Footer() {
  const date = new Date();
  return (
    <div className='container-fluid'>
      <footer>
        <div>&#169; {date.getFullYear()} Nulla a lobortis diam</div>
        <div>Porta placerat magna</div>
      </footer>
    </div>
  );
}
