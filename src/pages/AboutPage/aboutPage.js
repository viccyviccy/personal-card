import React from 'react';
import Viccy001 from '../../assets/images/IMG_5234_.jpg';
import s from './aboutPage.module.css';
import AbsoluteWrapper from '../../components/AbsoluteWrapper/AbsoluteWrapper';

const aboutPage = () => {
  return (
    <AbsoluteWrapper>
      <div className={s.about_div}>
        <div className={s.about_content}>
          <img src={Viccy001} alt="me" className={s.about_img} />
          <h2 className={s.about_h2}>The journey of a developer</h2>
          <p className={s.about_p}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            ad inventore accusamus magnam incidunt! Rerum, reprehenderit. Natus
            quasi ipsam, rem est repellat neque autem delectus. Minima rem
            tempora et fugiat quia explicabo ullam tempore aliquam sint dolor?
            Nulla aliquid corrupti quo hic ut ipsa rem expedita minima odio
            quisquam facilis minus exercitationem quibusdam nihil, illum aperiam
            libero, repudiandae nostrum impedit! Veniam, necessitatibus natus!
            Quidem nemo mollitia voluptatibus quia non velit facilis omnis.
            Nesciunt aut quam dicta repellendus molestiae sed, saepe aliquam eum
            dolorum cupiditate nulla voluptatibus ad quos quasi ab temporibus
            nobis aspernatur? Consectetur autem, harum voluptatibus quae
            adipisci alias. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Nemo cumque velit nulla adipisci vero voluptates praesentium
            necessitatibus totam quia ipsa aperiam, reiciendis, laborum in
            veritatis consectetur aspernatur deserunt rerum vel? Blanditiis
            consequatur tempora totam, doloremque illum culpa esse consectetur
            sit amet doloribus, eos neque aperiam unde commodi, hic architecto
            harum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Earum fuga repudiandae nostrum blanditiis minima nobis dolore
            voluptates nemo, asperiores fugit beatae ullam, temporibus impedit
            vitae pariatur molestias consectetur sit dolor praesentium. Neque
            reiciendis fugit, laudantium reprehenderit eveniet dignissimos
            commodi mollitia nesciunt, placeat aliquid expedita eaque cupiditate
            nobis iure. Ipsum, numquam.
          </p>
        </div>
      </div>
    </AbsoluteWrapper>
  );
};

export default aboutPage;
