import React, { Component, PropTypes } from 'react';
import { getPost } from '../actions/Post';
import { connect } from 'react-redux';

class PostDetails extends Component {

  componentDidMount() {
    this.props.getPost(this.props.match.params.postId);
  }

  render() {
    const post = this.props.post;
    return (
      <div className="container">
        <h3>{post.title}</h3>
        <h6>Category: {post.category}</h6>
        <p>{post.body}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.activePost
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (postId) => {
      dispatch(getPost(postId))
    },
  };
}; 

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);