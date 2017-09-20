import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPostComments, setComment, deleteComment, voteComment } from '../actions/Comment';
import { formatTimestamp } from '../utils/helper';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';

class PostsList extends Component {
  componentDidMount() {
    this.props.getPostComments(this.props.post.id);
  }

  render() {
    var comments = this.props.comments;
    if (comments) {
      return (         
        <div>
          <br />
          <b>Comment</b>
          <table className="list">
            <thead>
              <tr>
                <th></th>
                <th>Body</th>
                <th>Author</th>
                <th>Score</th>
                <th>Posted Date</th>
              </tr>   
            </thead>  
            <tbody>       
          {comments.map(comment =>
            <tr key={`${comment.id}`} >
              <td>
              <Link className="button" to={`/comment/edit/${comment.id}`} onClick={e => {this.props.setComment(comment) }} >
                Edit</Link>
              <button className="redButton" onClick={e => { this.props.deleteComment(`${comment.id}`) }}>Delete</button>
              </td>
              <td>
                {comment.body}
              </td>
              <td>
                {comment.author}
              </td>
              <td>
                {comment.voteScore}&nbsp;&nbsp;&nbsp;&nbsp;
                <FaThumbsOUp onClick={e => { this.props.voteComment(`${comment.id}`, "upVote") }} />
                <FaThumbsODown onClick={e => { this.props.voteComment(`${comment.id}`, "downVote") }} />
              </td>
              <td>
                {formatTimestamp(`${comment.timestamp}`)}
              </td>
            </tr>
          )}
          </tbody>
          </table>
          <br />
          <Link className="button" to='/comment/new' onClick={e => { this.props.addComment() }}>Add Comment</Link>
        </div>        
      )
    } else {
      return (
        <div>No comments founds</div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.activePost,
    comment: state.activeComment,
    comments: state.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPostComments: (postId) => {
      dispatch(getPostComments(postId));
    },
    newComment: () => {
      dispatch(setComment({category: '', author: '', title: '', body: ''}));
    },
    setComment: (comment) => {
      dispatch(setComment(comment));
    },
    deleteComment: (id) => {
      dispatch(deleteComment(id));
    },
    voteComment: (id, option) => {
      dispatch(voteComment(id, option));
    },
  }
} 
export default connect(mapStateToProps, mapDispatchToProps)(PostsList);