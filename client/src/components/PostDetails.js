import React, { Component } from 'react';
import { getPost, votePost } from '../actions/Post';
import { connect } from 'react-redux';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';
import Header from './Header'
import { formatTimestamp } from '../utils/helper';
import CommentList from './CommentList';

class PostDetails extends Component {

  componentWillMount() {
    this.props.getPost(this.props.match.params.postId);
  }

  render() {
    const post = this.props.post;
    return (
      <div>
        <Header link="/" linkName="Back to Home" />
        <table className="post">
          <thead>
            <th>
              {post.title}&nbsp;&nbsp;&nbsp;&nbsp;
              {post.author}&nbsp;&nbsp;&nbsp;&nbsp;
              {post.voteScore}&nbsp;&nbsp;&nbsp;&nbsp;
              <FaThumbsOUp onClick={e => { this.props.votePost(`${post.id}`, "upVote") }} />
              <FaThumbsODown onClick={e => { this.props.votePost(`${post.id}`, "downVote") }} />
              <br />
              <font size="1">{formatTimestamp(`${post.timestamp}`)}</font>
            </th>
          </thead>
          <tbody>
            <tr>
              <td>
                {post.body}
                <br />
                <h5>#{post.category}</h5>
              </td>
            </tr>
          </tbody>
        </table>
        <CommentList postId={this.props.match.params.postId} />
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
    votePost: (id, option) => {
      dispatch(votePost(id, option));
    },
  };
}; 

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);