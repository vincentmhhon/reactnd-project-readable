import React, { Component } from 'react';
import CategoriesList from './CategoriesList';
import PostsList from './PostsList';
import CategoriesList from 

class Home extends Component {
  render() {
    return (
      <div>
        <CategoriesList />
        <PostsList {...this.props} />
      </div>
    );
  }
}

export default Home;