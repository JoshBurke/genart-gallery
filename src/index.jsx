import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  Route,
  HashRouter,
} from 'react-router-dom';
import Line from './works/Line';
import Spirograph from './works/Spirograph';
import Menu from './Menu';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <HashRouter>
    <React.StrictMode>
      <Menu />
      <Route exact path="/" component={Line} />
      <Route path="/line" component={Line} />
      <Route path="/spirograph" component={Spirograph} />
    </React.StrictMode>
  </HashRouter>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
