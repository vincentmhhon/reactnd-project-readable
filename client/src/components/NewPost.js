import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost, setPost } from '../actions/Post';
import Header from './Header';

class NewPost extends Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.addPost(this.props.post);
    this.props.history.push("/");
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
        <Header />
        <h2>Add Post</h2>
        <form className="form-style-1" onSubmit={this.handleSubmit.bind(this)}>
          <ul className="form-style-1">  
            <li>
              <label htmlFor="category">Category <span className="required">*</span></label>
                <select name="category" id="category" value={post.category} onChange={this.handleInput.bind(this)} required className="field-select">
                <option value="">Please select</option>
                {categories.map((category) => 
                  <option key={`${category.name}`} value={`${category.name}`} >{`${category.name}`} </option>
                )
                }
                </select>
            </li>
            <li>
              <label htmlFor="author">Your Name <span className="required">*</span></label>
              <input type="text" placeholder="Your name" id="author" name="author" value={post.author}
              onChange={this.handleInput.bind(this)} required className="field-long" />
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
              <input className="button" type="submit" value="Confirm"/>
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