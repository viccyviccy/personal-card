import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './nav.module.css';

const Nav = () => {
  return (
    <div className={s.navigation_div}>
      <ul className={s.nav_ul}>
        <li>
          <NavLink
            exact
            activeClassName={s.active}
            to="/"
            className={s.nav_link}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={s.active}
            to="/about"
            className={s.nav_link}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={s.active}
            to="/projects"
            className={s.nav_link}
          >
            Projects
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
