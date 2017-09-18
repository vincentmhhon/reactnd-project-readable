import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home';
import PostDetails from './PostDetails';
import './App.css'

class App extends Component {
  render() {
    return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/:category" exact component={Home} />
        <Route path="/posts/:postId" exact component={PostDetails} />
      </Switch>
    </Router>
  )}

}

export default App;
