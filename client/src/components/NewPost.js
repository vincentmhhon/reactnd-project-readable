import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addPost, setPost } from '../actions/Post';

class NewPost extends Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.addPost(this.props.post);
  }

  handleInput(e) {
    let post = Object.assign({}, this.props.post);
    post[e.target.name] = e.target.value;
    this.props.setPost(post);

  }
  
  render() {
    const post = this.props.post;
    const categories = this.props.categories;
    console.log('haha');
    console.log(categories);
    return (
      <div>
        <h2>Add Post</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="category">
            <p>Category</p>
            <select name="category" id="category" value={post.category} onChange={this.handleInput.bind(this)} required>
               <option value="">Please select</option>
               {categories.map((category) => 
                 <option key={`${category.name}`} value={`${category.name}`} >{`${category.name}`} </option>
               )
              }
            </select>
          </label>
          <label htmlFor="author">
            <p>Your Name</p>
            <input type="text" placeholder="Your name" id="author" name="author" value={post.author}
              onChange={this.handleInput.bind(this)} required />
          </label>
          <label htmlFor="title">
            <p>Title</p>
            <input type="text" placeholder="Title" id="title" name="title" value={post.title}
              onChange={this.handleInput.bind(this)} required/>
          </label>
          <label htmlFor="body">
          <p>Body</p>
          <input type="textarea" placeholder="Type in something" id="body" name="body" value={post.body}
            onChange={this.handleInput.bind(this)} required/>
        </label>
        <input type="submit" value="Add"/> 
        </form>
      </div>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    post: state.activePost,
    categories: state.categories,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (post) => {
      dispatch(addPost(post))
    },
    setPost: (post) => {
      dispatch(setPost(post))
    }
  };
}; 

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);