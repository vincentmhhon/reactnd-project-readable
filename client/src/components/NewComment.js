import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment, setComment } from '../actions/Comment';
import Header from './Header';

class NewComment extends Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.addComment(this.props.comment);
    this.props.history.push("/");
  }

  handleInput(e) {
    let comment = Object.assign({}, this.props.comment);
    comment[e.target.name] = e.target.value;
    this.props.setComment(comment);

  }
  
  render() {
    const comment = this.props.comment;
    const categories = this.props.categories;
    
    return (
      <div>
      <Header link="/" linkName="Back to Home" />
        <h2>Add Comment</h2>
        <form className="form-style-1" onSubmit={this.handleSubmit.bind(this)}>
          <ul className="form-style-1">  
            <li>
              <label htmlFor="category">Category <span className="required">*</span></label>
                <select name="category" id="category" value={comment.category} onChange={this.handleInput.bind(this)} required className="field-select">
                <option value="">Please select</option>
                {categories.map((category) => 
                  <option key={`${category.name}`} value={`${category.name}`} >{`${category.name}`} </option>
                )
                }
                </select>
            </li>
            <li>
              <label htmlFor="author">Your Name <span className="required">*</span></label>
              <input type="text" placeholder="Your name" id="author" name="author" value={comment.author}
              onChange={this.handleInput.bind(this)} required className="field-long" />
            </li>
            <li>
              <label htmlFor="title">Title <span className="required">*</span></label>
              <input type="text" placeholder="Title" id="title" name="title" value={comment.title}
              onChange={this.handleInput.bind(this)} required className="field-long"/>
            </li>
            <li>
              <label htmlFor="body">Body <span className="required">*</span></label>
              <textarea placeholder="Type in something" id="body" name="body" value={comment.body}
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
    comment: state.activeComment,
    categories: state.categories,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (comment) => {
      dispatch(addComment(comment))
    },
    setComment: (comment) => {
      dispatch(setComment(comment))
    }
  };
}; 

export default connect(mapStateToProps, mapDispatchToProps)(NewComment);