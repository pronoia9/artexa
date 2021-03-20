/* eslint-disable no-unused-vars */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
// pages
import HomePage from '../views/HomePage';
import ProjectsPage from '../views/ProjectsPage';
import Projects2Col from '../views/Projects2Col';
import Projects3Col from '../views/Projects3Col';
import HistoryPage from '../views/HistoryPage';
import CoursePage from '../views/CoursePage';
import BlogPage from '../views/BlogPage';
import Blog2Col from '../views/Blog2Col';
import Blog3Col from '../views/Blog3Col';
import AboutPage from '../views/AboutPage';
import ContactPage from '../views/ContactPage';
import NotFound from '../views/NotFound';
// transition animation
import 'react-tiger-transition/styles/main.min.css';

export default function App(props) {
  return (
    <Switch>
      <Route exact path='/projects'>
        <ProjectsPage data={props.data.blog} column={3} />
      </Route>

      <Route exact path='/projects-2-col'>
        <Projects2Col data={props.data.projects} />
      </Route>

      <Route exact path='/projects-3-col'>
        <Projects3Col data={props.data.projects} />
      </Route>

      <Route exact path='/history'>
        <HistoryPage data={props.data.history} />
      </Route>

      <Route exact path='/courses'>
        <CoursePage data={props.data.courses} column={2} />
      </Route>

      <Route exact path='/blog'>
        <BlogPage data={props.data.blog} column={2} />
      </Route>

      <Route exact path='/blog-2-col'>
        <Blog2Col data={props.data.blog} />
      </Route>

      <Route exact path='/blog-3-col'>
        <Blog3Col data={props.data.blog} />
      </Route>

      <Route exact path='/about'>
        <AboutPage data={props.data} background={props.background} setBackground={props.setBackground} />
      </Route>

      <Route exact path='/contact'>
        <ContactPage data={props.data.contact} />
      </Route>

      <Route exact path='/'>
        <HomePage data={props.data} background={props.background} setBackground={props.setBackground} />
      </Route>

      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
  );
}
