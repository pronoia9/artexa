import { Route, Routes } from 'react-router-dom';

import { AboutPage, ContactPage, CoursePage, HistoryPage, HomePage, NotFound, ProjectsPage, TechnologiesPage } from '..';

export const PageRoutes = () => (
  <Routes>
    <Route path='/projects' element={<ProjectsPage />} />
    <Route path='/history' element={<HistoryPage />} />
    <Route path='/courses' element={<CoursePage />} />
    <Route path='/technologies' element={<TechnologiesPage />} />
    <Route path='/about' element={<AboutPage />} />
    <Route path='/contact' element={<ContactPage />} />
    <Route path='/portfolio' element={<HomePage />} />
    <Route exact path='/' element={<HomePage />} />
    <Route path='*' element={<NotFound />} />
  </Routes>
);