import React, { FC } from 'react';

import './about.scss';

export const About: FC = () => (
  <section className="page-about">
    <img className="page-about__img" src="./img/about.jpg" alt="about" />
    <p className="page-about__text">Page of about!</p>
  </section>
);
