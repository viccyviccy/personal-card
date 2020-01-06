import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './nav/nav';
import HomePage from '../pages/HomePage/homePage';
import ProjectsPage from '../pages/ProjectsPage/projectsPage';
import AboutPage from '../pages/AboutPage/aboutPage';
// import Footer from '../pages/FooterPage/footerPage';
import s from './app.module.css';

const App = () => {
  return (
    <div className={s.app_div}>
      <Nav className={s.nav_app} />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route component={HomePage} />
      </Switch>
      {/* <Footer className={s.footer_app} /> */}
    </div>
  );
};

export default App;
