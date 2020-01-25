import React from 'react';
// import Viccy001 from '../../assets/images/IMG_5234_.jpg';
import ResumeHooks from '../../components/Resume/ResumeHooks';
import AbsoluteWrapper from '../../components/AbsoluteWrapper/AbsoluteWrapper';
import s from './aboutPage.module.css';

const aboutPage = () => {
  return (
    <AbsoluteWrapper>
      <div className={s.about_div}>
        <div className={s.about_content}>
          {/* <img src={Viccy001} alt="me" className={s.about_img} /> */}
          <h2 className={s.about_h2}>The journey of a developer</h2>
          <ResumeHooks className={s.aboutPage_resume_block} />
          <p className={s.about_p}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            ad inventore accusamus magnam incidunt! Rerum, reprehenderit. Natus
            quasi ipsam, rem est repellat neque autem delectus. Minima rem
            tempora et fugiat quia explicabo ullam tempore aliquam sint dolor?
            Nulla aliquid corrupti quo hic ut ipsa rem expedita minima odio
            quisquam facilis minus exercitationem quibusdam nihil, illum aperiam
            libero, repudiandae nostrum impedit!
          </p>
        </div>
      </div>
    </AbsoluteWrapper>
  );
};

export default aboutPage;
