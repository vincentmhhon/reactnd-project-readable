import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePost, setPost } from '../actions/Post';
import Header from './Header';

class EditPost extends Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.updatePost(this.props.post);
    this.props.history.push("/");
  }

  handleInput(e) {
    let post = Object.assign({}, this.props.post);
    post[e.target.name] = e.target.value;
    this.props.setPost(post);

  }
  
  render() {
    const post = this.props.post;
    return (
      <div>
      <Header link="/" linkName="Back to Home" />
        <h2>Edit Post</h2>
        <form className="form-style-1" onSubmit={this.handleSubmit.bind(this)}>
          <ul className="form-style-1">  
            <li>
              <label htmlFor="category">Category</label>
              {post.category}
            </li>
            <li>
              <label htmlFor="author">Your Name</label>
              {post.author}
            </li>
            <li>
              <label htmlFor="title">Title <span className="required">*</span></label>
              <input type="text" placeholder="Title" id="title" name="title" value={post.title}
              onChange={this.handleInput.bind(this)} required className="field-long"/>
            </li>
            <li>
              <label htmlFor="body">Body <span className="required">*</span></label>
              <textarea placeholder="Type in something" id="body" name="body" value={post.body}
              onChange={this.handleInput.bind(this)} required className="field-long field-textarea"/>
            </li> 
            <li>
              <input className="button" type="submit" value="Update"/>
            </li> 
          </ul>
        </form>
      </div>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    post: state.activePost,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePost: (post) => {
      dispatch(updatePost(post))
    },
    setPost: (post) => {
      dispatch(setPost(post))
    }
  };
}; 

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);