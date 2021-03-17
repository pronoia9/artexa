import React from 'react';
import Logos from './Logos/Logos';

export default function Footer(props) {
  const date = new Date();
  return (
    <>
      <Logos data={props.data} />
      <div className='container-fluid'>
        <footer>
          <div>&#169; {date.getFullYear()} Nulla a lobortis diam</div>
          <div>Porta placerat magna</div>
        </footer>
      </div>
    </>
  );
}
