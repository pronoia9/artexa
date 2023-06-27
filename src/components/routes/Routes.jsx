import { Route, Routes } from 'react-router-dom';

import { AboutPage, ContactPage, CoursePage, HistoryPage, HomePage, NotFound, ProjectsPage, TechnologiesPage } from '..';

export const PageRoutes = () => (
  <Routes>
    <Route path='/projects' element={<ProjectsPage framerDelay={5} />} />
    <Route path='/history' element={<HistoryPage framerDelay={5} />} />
    <Route path='/courses' element={<CoursePage framerDelay={5} />} />
    <Route path='/technologies' element={<TechnologiesPage framerDelay={5} />} />
    <Route path='/about' element={<AboutPage framerDelay={5} />} />
    <Route path='/contact' element={<ContactPage framerDelay={5} />} />
    <Route path='/portfolio' element={<HomePage framerDelay={5} />} />
    <Route exact path='/' element={<HomePage framerDelay={7} />} />
    <Route path='*' element={<NotFound framerDelay={5} />} />
  </Routes>
);