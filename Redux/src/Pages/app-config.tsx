import React from 'react';
import { About } from './About/about';
import { Deteils } from './Details/details';
import { Error404 } from './Error404/error404';
import { Home } from './Home/Home';
import Shop from './Shop/shop';

export const navData = [
  {
    Component: <Home />,
    path: '/',
    nameButton: 'Home',
  },
  {
    Component: <About />,
    path: '/about',
    nameButton: 'About',
  },
  {
    Component: <Shop />,
    path: '/shop',
    nameButton: 'Shop',
  },
  {
    Component: <Deteils />,
    path: '/details/:title',
  },
  {
    Component: <Error404 />,
    path: '*',
  },
];
