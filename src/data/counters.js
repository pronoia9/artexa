import { projects } from './projects';

export const counters = [
  { id: 1, number: new Date().getFullYear() - new Date('2021').getFullYear(), text: 'Years Experience', accent: '+' },
  { id: 2, number: 3, text: 'Certificates' },
  { id: 3, number: projects?.projects?.length, text: 'Completed Projects', accent: '+' },
];
