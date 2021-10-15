import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navData } from '../app-config';

import './header.scss';

export const Header: FC = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');

  return (
    <div className="wrapper">
      <nav>
        <ul className="heder-menu">
          {navData.map((item) =>
            item.nameButton ? (
              <li key={item.path}>
                <Link
                  className={`heder-menu__item ${
                    splitLocation[1] === item.path.replace('/', '')
                      ? 'heder-menu__item__active'
                      : ''
                  }`}
                  to={item.path}
                >
                  {item.nameButton}
                </Link>
              </li>
            ) : null,
          )}
        </ul>
      </nav>
    </div>
  );
};
