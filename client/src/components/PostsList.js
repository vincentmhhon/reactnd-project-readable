import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllPosts,getCategoryPosts } from '../actions/Post';

class PostsList extends Component {
  componentWillMount() {
    this.props.getPosts(this.props.selectCategory);
  }

  render() {
    const posts = this.props.posts;
    const selectedCategory = this.props.selectedCategory;
    if (posts) {
      return (         
        <div>
          <div><b>Posts</b></div>
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
    posts: state.posts,
    selectCategory: state.selectCategory
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (category) => {
      if (category === 'All' || category === '' || category === undefined) {        
        dispatch(getAllPosts())
      } else {
        dispatch(getCategoryPosts(category))
      }
    }
  }
} 
export default connect(mapStateToProps, mapDispatchToProps)(PostsList);