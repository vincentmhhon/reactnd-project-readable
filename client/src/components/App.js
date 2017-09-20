import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home';
import PostDetails from './PostDetails';
import NewPost from './NewPost';
import EditPost from './EditPost';
import NewComment from './NewComment';
import EditComment from './EditComment';
import './App.css'

class App extends Component {
  render() {
    return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/new/post" component={NewPost} />
        <Route exact path="/new/comment" component={NewComment} />
        <Route exact path="/edit/:category/:postId/comment/:commentId" component={EditComment} />
        <Route exact path="/edit/:category/:postId" component={EditPost} />
        <Route exact path="/:category" component={Home} />
        <Route exact path="/:category/:postId" component={PostDetails} />
      </Switch>
    </Router>
  )}

}

export default App;
