/* eslint-disable no-unused-vars */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
// pages
import HomePage from '../views/HomePage';
import ProjectsPage from '../views/ProjectsPage';
import HistoryPage from '../views/HistoryPage';
import CoursePage from '../views/CoursePage';
import BlogPage from '../views/BlogPage';
import AboutPage from '../views/AboutPage';
import ContactPage from '../views/ContactPage';
import NotFound from '../views/NotFound';

export default function App({ data }) {
  const { projects, history, courses, technologies, hobbies, contact } = data;

  return (
    <Switch>
      <Route exact path='/projects'>
        <ProjectsPage data={projects} />
      </Route>

      <Route exact path='/projects-2-col'>
        <ProjectsPage data={projects} column={2} />
      </Route>

      <Route exact path='/projects-3-col'>
        <ProjectsPage data={projects} column={3} />
      </Route>

      <Route exact path='/history'>
        <HistoryPage data={history} />
      </Route>

      <Route exact path='/courses'>
        <CoursePage data={courses} />
      </Route>

      <Route exact path='/blog'>
        <BlogPage data={technologies} />
      </Route>

      <Route exact path='/blog-2-col'>
        <BlogPage data={technologies} column={2} />
      </Route>

      <Route exact path='/blog-3-col'>
        <BlogPage data={technologies} column={3} />
      </Route>

      <Route exact path='/about'>
        <AboutPage hobbies={hobbies} />
      </Route>

      <Route exact path='/contact'>
        <ContactPage data={contact} />
      </Route>

      <Route exact path='/'>
        <HomePage data={data} />
      </Route>

      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
  );
}
