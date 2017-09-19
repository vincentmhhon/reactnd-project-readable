import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addPost } from '../actions/Post';

class NewPost extends Component {
  handleSubmit(e) {
    e.preventDefault();

  }

  handleInput(e) {
    
  }
  
  render() {
    const post = this.props.post;
    return (
      <div>
        <h2>Add Post</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="author">
            Your Name: &nbsp;
            <input type="text" placeholder="Your name" id="author" name="author" value={post.author}
              onChange={this.handleInput.bind(this)} />
          </label>
        </form>
      </div>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    post: state.activePost,
    categories: state.categories
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (post) => {
      dispatch(addPost(post))
    },
  };
}; 

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);