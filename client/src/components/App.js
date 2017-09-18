import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home';

class App extends Component {
  render() {
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/:category" exact component={props => <Home {...props} />} />
      </Switch>
    </Router>
  }

}

export default App;
