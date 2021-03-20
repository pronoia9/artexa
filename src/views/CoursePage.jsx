import React, { useEffect } from 'react';
import Courses from '../components/Courses/Courses';
// transition
import { transition } from '../assets/js/main.js';

export default function CoursesPage(props) {
  useEffect(transition, []);

  return <Courses data={props.data} column={props.column} />;
}
