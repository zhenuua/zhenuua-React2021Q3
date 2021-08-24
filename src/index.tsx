import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './styles.scss';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { Router } from "react-router-dom";
// import {createBrowserHistory} from 'history';

// const history = createBrowserHistory()

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
