import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllPosts } from '../actions/Post';

class PostsList extends Component {
  componentWillMount() {
    this.props.getAllPosts();
  }

  render() {
    const posts = this.props.posts
    if (posts) {
      return (
          <div>
            {posts.map(post =>
              <div>
                {post.title}
              </div>
            )}
          </div>        
      )
    } else {
      return (
        <div>No posts founds</div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPosts: () => {
      dispatch(getAllPosts())
    }
  }
} 
export default connect(mapStateToProps, mapDispatchToProps)(PostsList);