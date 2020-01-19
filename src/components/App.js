import React, { useContext } from 'react';
import { Route, Switch, __RouterContext } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import Nav from './nav/nav';
import HomePage from '../pages/HomePage/homePage';
import ProjectsPage from '../pages/ProjectsPage/projectsPage';
import AboutPage from '../pages/AboutPage/aboutPage';
import './app.css';

const App = () => {
  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    from: {
      opacity: 0,
      transition: 'ease-in-out (4)',
      transform: 'scale(0.5, 0.5)',
    },
    enter: {
      opacity: 1,
      transition: 'ease-in-out (6)',
      transform: 'scale(1, 1)',
    },
    leave: {
      opacity: 0,
      transition: 'ease-in-out (3)',
      transform: 'scale(1, 1)',
    },
  });
  return (
    <div className="app_div">
      <Nav />
      <div className="background_div">
        {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <Switch location={item}>
              <Route path="/*" exact component={HomePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/projects" component={ProjectsPage} />
              <Route component={HomePage} />
            </Switch>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default App;
