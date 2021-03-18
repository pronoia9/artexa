/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
// pages
import HomePage from './HomePage';
import ProjectsPage from './ProjectsPage';
import HistoryPage from './HistoryPage';
import BlogPage from './BlogPage';
import ContactPage from './ContactPage';
// transition animation
import 'react-tiger-transition/styles/main.min.css';

export default function App(props) {
  return (
    <Switch>
      <Route path='/projects-2-col'>
        <ProjectsPage data={props.main.projects} column={2} />
      </Route>

      <Route path='/projects-3-col'>
        <ProjectsPage data={props.main.projects} column={3} />
      </Route>

      <Route path='/history'>
        <HistoryPage data={props.main.history} />
      </Route>

      <Route path='/contact'>
        <ContactPage data={props.main.contact} />
      </Route>

      <Route path='/blog-2-col'>
        <BlogPage data={props.main.blog} column={2} />
      </Route>

      <Route path='/blog-3-col'>
        <BlogPage data={props.main.blog} column={3} />
      </Route>

      <Route path='/'>
        <HomePage data={props.main} background={props.background} setBackground={props.setBackground} />
      </Route>
    </Switch>
  );
}
