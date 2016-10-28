import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

require('assets/styles/style.css')

// Layouts
import App from 'layouts/app';

import Albums from 'ui/Albums';

import Gallery from 'ui/gallery'



ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path='/' component={Albums}/>
      <Route path= 'photo/:albumid' component={Gallery}/>
    </Route>
  </Router>
), document.getElementById('app'));