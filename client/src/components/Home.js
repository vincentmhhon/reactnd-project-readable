import React, { Component } from 'react';
import CategoriesList from './CategoriesList';
import PostsList from './PostsList';

class Home extends Component {
  render() {
    return (
      <div>
        <PostsList />
      </div>
    );
  }
}

export default Home;