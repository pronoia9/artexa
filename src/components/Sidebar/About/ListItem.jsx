import React from 'react';

function ListItem(props) {
  return (
    <li>
      <h6>{props.title}</h6>
      <span>{props.subtitle}</span>
    </li>
  );
}

export default ListItem;
