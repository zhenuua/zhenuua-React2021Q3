import React, { FC } from 'react';

import './error404.scss';

export const Error404: FC = () => (
  <section className="page-error404">
    {/* <img
      className="page-error404__img"
      src="./icon/error404.jpg"
      alt="error404"
    /> */}
    <p className="page-error404__text">Error 404, Page not found!</p>
  </section>
);
