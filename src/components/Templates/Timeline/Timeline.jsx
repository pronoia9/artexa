import React from 'react';
import TimelineColumn from './TimelineColumn';

export default function Timeline(props) {
  return <TimelineColumn column={props.column} title={props.title} list={props.list} />;
}
