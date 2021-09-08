import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { navData } from '../app-config';

import './header.scss';

export const Header: FC = () => (
  <div className="wrapper">
    <nav>
      <ul className="heder-menu">
        {navData.map((item) =>
          item.nameButton ? (
            <li key={item.path}>
              <Link className="heder-menu__item" to={item.path}>
                {item.nameButton}
              </Link>
            </li>
          ) : null,
        )}
      </ul>
    </nav>
  </div>
);
