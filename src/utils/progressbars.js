'use client';

import * as ProgressBar from 'progressbar.js';

export const ProgressbarInstance = ({ type = 'circle', level, index, hide, duration, delay }) => {
  const id = `#${type}prog${index}`;
  switch (type) {
    case 'circle':
      return new ProgressBar.Circle(id, {
        strokeWidth: 7,
        easing: 'easeInOut',
        duration: duration || 1400,
        delay: delay || 3400 + Number(index) * 100,
        trailWidth: 7,
        step: (state, bar) => {
          bar.setText(!hide ? `${level}%` : '');
        },
      });
    case 'line':
      return new ProgressBar.Line(id, {
        strokeWidth: 1.72,
        easing: 'easeInOut',
        duration: duration || 1400,
        delay: delay || 4700 + Number(index) * 100,
        trailWidth: 7,
        svgStyle: { width: '100%', height: '100%' },
        step: (state, bar) => {
          bar.setText(!hide ? `${level} %` : '');
        },
      });
    case 'preloader':
      return new ProgressBar.Line(id, {
        strokeWidth: 1.7,
        easing: 'easeInOut',
        duration: duration || 5000,
        delay: delay || 750,
        trailWidth: 1.7,
        svgStyle: { width: '100%', height: '100%' },
        step: (state, bar) => {
          bar.setText(Math.round(bar.value() * 100) + ' %');
        },
      });
    default:
      return null;
  }
};
