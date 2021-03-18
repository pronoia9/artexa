import React, { useEffect } from 'react';
import History from '../components/History/History';
// animation function
import { transition } from '../assets/js/main.js';

export default function HistoryPage(props) {
  // body section transition (soft fade in)
  //useEffect(transition, []);

  return <History data={props.data} />;
}
