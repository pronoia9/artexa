/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
// pages
import HomePage from './HomePage';
import ProjectsPage from './ProjectsPage';
import HistoryPage from './HistoryPage';
import CoursePage from './CoursePage';
import BlogPage from './BlogPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import NotFound from './NotFound';
// transition animation
import 'react-tiger-transition/styles/main.min.css';

export default function App(props) {
  return (
    <Switch>
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
        <CoursePage data={props.data.courses} column={2} />
      </Route>

      <Route exact path='/blog-2-col'>
        <BlogPage data={props.data.blog} column={2} />
      </Route>

      <Route exact path='/blog-3-col'>
        <BlogPage data={props.data.blog} column={3} />
      </Route>

      <Route exact path='/about'>
        <AboutPage
          data={props.data}
          background={props.background}
          setBackground={props.setBackground}
        />
      </Route>

      <Route exact path='/contact'>
        <ContactPage data={props.data.contact} />
      </Route>

      <Route exact path='/'>
        <HomePage
          data={props.data}
          background={props.background}
          setBackground={props.setBackground}
        />
      </Route>

      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
  );
}
