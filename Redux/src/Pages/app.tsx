import React, { FC, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { useDispatch, useSelector } from 'react-redux';
import { Header } from './Header/header';
import { navData } from './app-config';

import { setAddCash, setGetCash } from '../store/reducers/mainRedicers';
import { RootState } from '../store/interfaces/rootSate';

export const App: FC = () => {
  const dispatch = useDispatch();
  const cash = useSelector((state: RootState) => state.cashSlice);

  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <header>
            <Header />
          </header>
          <div style={{ display: 'flex' }}>
            <div style={{ fontSize: '3rem' }}>{cash.cash}</div>
            <button
              type="button"
              onClick={() => {
                dispatch(setAddCash(prompt('add', '')));
              }}
            >
              пополнить счет
            </button>
            <button
              type="button"
              onClick={() => {
                dispatch(setGetCash(prompt('get', '')));
              }}
            >
              снять со счета
            </button>
          </div>
          <main>
            <TransitionGroup>
              <CSSTransition timeout={500} classNames="fade">
                <Switch>
                  {navData.map(({ Component, path }) => (
                    <Route
                      path={path}
                      exact={path !== '*'}
                      key={path.toString()}
                    >
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
    </Router>
  );
};
