import React, { useEffect } from 'react';
import History from '../components/History/History';
// transition
import { transition } from '../assets/js/main.js';

export default function HistoryPage(props) {
  useEffect(transition, []);

  return <History data={props.data} />;
}
