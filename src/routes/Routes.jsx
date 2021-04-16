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

export default function App(props) {
  return (
    <Switch>
      <Route exact path='/projects'>
        <ProjectsPage data={props.data.projects} />
      </Route>

      <Route exact path='/projects-2-col'>
        <ProjectsPage data={props.data.projects} column={2} />
      </Route>

      <Route exact path='/projects-3-col'>
        <ProjectsPage data={props.data.projects} column={3} />
      </Route>

      <Route exact path='/history'>
        <HistoryPage data={props.data.history} />
      </Route>

      <Route exact path='/courses'>
        <CoursePage data={props.data.courses} />
      </Route>

      <Route exact path='/blog'>
        <BlogPage data={props.data.blog} />
      </Route>

      <Route exact path='/blog-2-col'>
        <BlogPage data={props.data.blog} column={2} />
      </Route>

      <Route exact path='/blog-3-col'>
        <BlogPage data={props.data.blog} column={3} />
      </Route>

      <Route exact path='/about'>
        <AboutPage hobbies={props.data.hobbies} />
      </Route>

      <Route exact path='/contact'>
        <ContactPage data={props.data.contact} />
      </Route>

      <Route exact path='/'>
        <HomePage data={props.data} />
      </Route>

      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
  );
}
