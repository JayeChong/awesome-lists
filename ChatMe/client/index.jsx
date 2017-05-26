import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.jsx';
import Login from './components/Login/Login.jsx';
import { Router, Route, browserHistory } from 'react-router'


ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={Login} />
      <Route path="/chatroom/:username" component={App} />
    </Router>,
    document.body.appendChild(document.createElement('div'))
);

