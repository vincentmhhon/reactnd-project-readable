import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class PostDetails extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillUnmount() {
    this.props.resetMe();
  }

  componentDidMount() {
    this.props.fetchPost(this.props.postId);
  }

  render() {
    return (
      <div className="container">
        <h3>{post.title}</h3>
        <h6>Category: {post.category}</h6>
        <p>{post.body}</p>
      </div>
    );
  }
}

export default PostDetails;
