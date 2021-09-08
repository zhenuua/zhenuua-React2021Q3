import React, { FC, Suspense } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { Header } from './Header/header';
import { navData } from './app-config';

export const App: FC = () => {
  const location = useLocation();

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <header>
          <Header />
        </header>
        <main>
          <TransitionGroup>
            <CSSTransition timeout={500} classNames="fade" key={location.key}>
              <Switch location={location}>
                {navData.map(({ Component, path }) => (
                  <Route path={path} exact={path !== '*'} key={path.toString()}>
                    {Component}
                  </Route>
                ))}
                <Redirect to="*" />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </main>
      </Suspense>
    </div>
  );
};
