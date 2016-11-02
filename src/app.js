import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

require('assets/styles/style.css')

// Layouts
import App from 'layouts/app';

import Albums from 'ui/Albums';

import Gallery_Layout from 'ui/gallery_layout'

import Picture from 'ui/picture'

import CreateAlbum from 'ui/createAlbum'

import CreatePhoto from 'ui/createPhoto'



ReactDOM.render((
  <Router history={hashHistory}>
    <Route component={App}>
      <Route path='/' component={Albums}/>
      <Route path='/Albums/:id' component={Gallery_Layout}/>
      <Route path='/photo/:id' component={Picture}/>
      <Route path='/Album/add' component={CreateAlbum}/>
      <Route path='/Album/:albumId/add' component={CreatePhoto}/>
    </Route>
  </Router>
), document.getElementById('app'));