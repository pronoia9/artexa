/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// pages
import HomePage from '../views/HomePage';
import ProjectsPage from '../views/ProjectsPage';
import HistoryPage from '../views/HistoryPage';
import CoursePage from '../views/CoursePage';
import BlogPage from '../views/BlogPage';
import AboutPage from '../views/AboutPage';
import ContactPage from '../views/ContactPage';
import NotFound from '../views/NotFound';

export default function App({ data, background, changeBackground }) {
  const { projects, history, courses, technologies, hobbies, contact } = data;

  return (
    <Routes>
      <Route exact path='/projects' element={<ProjectsPage data={projects} />} />
      <Route exact path='/projects-2-col' element={<ProjectsPage data={projects} column={2} />} />
      <Route exact path='/projects-3-col' element={<ProjectsPage data={projects} column={3} />} />
      <Route exact path='/history' element={<HistoryPage data={history} />} />
      <Route exact path='/courses' element={<CoursePage data={courses} />} />
      <Route exact path='/technologies' element={<BlogPage data={technologies} />} />
      <Route exact path='/technologies-2-col' element={<BlogPage data={technologies} column={2} />} />
      <Route exact path='/technologies-3-col' element={<BlogPage data={technologies} column={3} />} />
      <Route exact path='/about' element={<AboutPage hobbies={hobbies} />} />
      <Route exact path='/contact' element={<ContactPage data={contact} />} />
      <Route exact path='/portfolio' element={<HomePage data={data} background={background} changeBackground={changeBackground} />} />
      <Route exact path='/' element={<Navigate to='/portfolio' />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}