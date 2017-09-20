import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateComment, setComment } from '../actions/Comment';
import Header from './Header';

class EditComment extends Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.updateComment(this.props.comment);
    this.props.history.goBack();
  }

  handleInput(e) {
    let comment = Object.assign({}, this.props.comment);
    comment[e.target.name] = e.target.value;
    this.props.setComment(comment);

  }
  
  render() {
    const post = this.props.post;
    const comment = this.props.comment;
    return (
      <div>
        <Header link={`/${post.category}/${post.id}`} linkName={`Back to Post: ${post.title}`} />
        <h2>Edit Comment</h2>
        <form className="form-style-1" onSubmit={this.handleSubmit.bind(this)}>
          <ul className="form-style-1">  
            <li>
              <label htmlFor="author">Your Name</label>
              {comment.author}
            </li>
            <li>
              <label htmlFor="body">Body <span className="required">*</span></label>
              <textarea placeholder="Type in something" id="body" name="body" value={comment.body}
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
    comment: state.activeComment,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateComment: (comment) => {
      dispatch(updateComment(comment))
    },
    setComment: (comment) => {
      dispatch(setComment(comment))
    }
  };
}; 

export default connect(mapStateToProps, mapDispatchToProps)(EditComment);