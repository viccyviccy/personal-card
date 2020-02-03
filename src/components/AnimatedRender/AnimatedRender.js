import React from 'react';
import s from './ANimatedRender.module.css';
import city03 from '../../assets/bckg/003.jpg';
import smartKapusta from '../../assets/images/smart-kapusta.png';
import goToGoal from '../../assets/images/go-to-goal.png';
import AbsoluteWrapper from '../AbsoluteWrapper/AbsoluteWrapper';

const projectsPage = () => {
  return (
    <AbsoluteWrapper>
      <div className={s.projects_main_div}>
        <div className={s.projects_div_grid}>
          <div className={s.grid_div_inner}>
            <img src={smartKapusta} alt="img" />
            <div className={s.projects_hover}>
              <a
                href="https://smart-finance.goit.co.ua/"
                rel="noopener noreferrer"
                target="_blank"
                className={s.project_link}
              >
                Kapusta - Smart finance
                <p className={s.link_p_element}>
                  Bootcamp graduation project for GO IT Academy.
                </p>
              </a>
            </div>
          </div>
          <div className={s.grid_div_inner}>
            <img src={goToGoal} alt="img" />
            <div className={s.projects_hover}>
              <a
                href="https://go-to-goal.goit.co.ua/"
                rel="noopener noreferrer"
                target="_blank"
                className={s.project_link}
              >
                Go to Goal - track your progress
                <p className={s.link_p_element}>
                  Bootcamp project for GO IT Academy.
                </p>
              </a>
            </div>
          </div>
          <div className={s.grid_div_inner}>
            <img src={city03} alt="img" />
            <div className={s.projects_hover}>
              <p className={s.link_p_element}>Under Development </p>
            </div>
          </div>
          <div className={s.grid_div_inner}>
            <img src={city03} alt="img" />
            <div className={s.projects_hover}>
              <p className={s.link_p_element}>Under Development </p>
            </div>
          </div>
          <div className={s.grid_div_inner}>
            <img src={city03} alt="img" />
            <div className={s.projects_hover}>
              <p className={s.link_p_element}>Under Development </p>
            </div>
          </div>
          <div className={s.grid_div_inner}>
            <img src={city03} alt="img" />
            <div className={s.projects_hover}>
              <p className={s.link_p_element}>Under Development </p>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteWrapper>
  );
};

export default projectsPage;
