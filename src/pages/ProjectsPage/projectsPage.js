import React from 'react';
import s from './projectsPage.module.css';
import city01 from '../../assets/bckg/001.jpg';
import city03 from '../../assets/bckg/003.jpg';

const projectsPage = () => {
  return (
    <div className={s.projects_main_div}>
      <div className={s.projects_div_grid}>
        <div className={s.grid_div_inner}>
          <img src={city01} alt="img" />
        </div>
        <div className={s.grid_div_inner}>
          <img src={city03} alt="img" />
        </div>
        <div className={s.grid_div_inner}>
          <img src={city01} alt="img" />
        </div>
        <div className={s.grid_div_inner}>
          <img src={city03} alt="img" />
        </div>
        <div className={s.grid_div_inner}>
          <img src={city03} alt="img" />
        </div>
        <div className={s.grid_div_inner}>
          <img src={city03} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default projectsPage;
