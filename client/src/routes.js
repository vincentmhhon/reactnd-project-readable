import React from 'react';
import { Route, IndexRoute } from 'react-router'
import App from './components/App';
import Home from './components/Home';
import NewPost from './components/NewPost';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="posts/new" component={NewPost} />
  </Route>
);