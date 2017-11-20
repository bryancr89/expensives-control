import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import _ from 'lodash';

import Navbar from './components/navbar/navbarComponent';
import Home from './containers/home/homeContainer';

const routes = () =>
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
    </div>
  </Router>;

export default routes;
