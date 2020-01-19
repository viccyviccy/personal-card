import React from 'react';
import { ReactComponent as LinkedIn } from '../../assets/linkedin.svg';
import { ReactComponent as Instagram } from '../../assets/instagram.svg';
import { ReactComponent as GitHub } from '../../assets/github.svg';
import AbsoluteWrapper from '../../components/AbsoluteWrapper/AbsoluteWrapper';
import s from './homePage.module.css';

const HomePage = () => {
  return (
    <AbsoluteWrapper>
      <div className={s.main_div}>
        <div className={s.main_div_subdiv}>
          <h1 className={s.main_h1}>It`s not magic - it`s coding ♥</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            eligendi, rerum perferendis corporis temporibus facilis laudantium
            delectus ipsum eaque consequuntur? Vel optio minima quaerat beatae,
            pariatur voluptate, labore eaque, voluptatibus soluta facere ipsam
            obcaecati quia accusantium dignissimos nobis ea numquam similique
            voluptas autem. Aliquam, recusandae ullam ea fugit aperiam amet
            tenetur officiis eius omnis nesciunt non error nisi earum veritatis
            laborum aut ducimus maxime laudantium quos corrupti ipsa rem quis
            possimus!
          </p>
          <div className={s.socialLink_div}>
            <a
              href="https://www.linkedin.com/in/viktoriia-ushakova/"
              rel="noopener noreferrer"
              target="_blank"
              className={s.socialLink}
            >
              <LinkedIn />
            </a>
            <a
              href="https://www.instagram.com/viccy_viccy/"
              rel="noopener noreferrer"
              target="_blank"
              className={s.socialLink}
            >
              <Instagram />
            </a>
            <a
              href="https://github.com/viccyviccy"
              target="_blank"
              rel="noopener noreferrer"
              className={s.socialLink}
            >
              <GitHub />
            </a>
            <p className={s.email_p}>iamushakova@gmail.com</p>
          </div>
        </div>
      </div>
    </AbsoluteWrapper>
  );
};

export default HomePage;
