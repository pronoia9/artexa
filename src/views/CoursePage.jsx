import React from 'react';
import Courses from '../components/Courses/Courses';

export default function CoursesPage(props) {
  return <Courses data={props.data} column={props.column} />;
}
