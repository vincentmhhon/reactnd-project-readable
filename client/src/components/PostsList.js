import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllPosts,getCategoryPosts, setPost, deletePost, votePost, sortPosts } from '../actions/Post';
import { formatTimestamp } from '../utils/helper';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';

class PostsList extends Component {
  componentDidMount() {
    this.props.getPosts(this.props.selectCategory);
  }

  componentWillReceiveProps(nextProp) {
    if (this.props.selectCategory !== nextProp.selectCategory) {
      this.props.getPosts(nextProp.selectCategory);
    }
  }

  render() {
    var posts = this.props.posts;
    var selectCategory = this.props.selectCategory;
    if (posts) {
      return (         
        <div>
          <br />
          <label htmlFor="sortBy">Sort by: </label>
          <select name="sortBy" id="sortBy" onChange={e => {this.props.sortPosts(e.target.value) }} >
            <option value="">Please select</option>
            <option value="timestamp">Posted Date</option>
            <option value="voteScore">Vote Score</option>
          </select>
          <div>
          <br />
          <b>{selectCategory} Posts</b></div>
          <table className="list">
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Author</th>
                <th>Score</th>
                <th>Posted Date</th>
              </tr>   
            </thead>  
            <tbody>       
          {posts.map(post =>
            <tr key={`${post.id}`} >
              <td>
              <Link className="button" to={`/edit/${post.category}/${post.id}`} onClick={e => {this.props.setPost(post) }} >
                Edit</Link>
              <Link className="redButton" to="/" onClick={e => { this.props.deletePost(`${post.id}`) }}>Delete</Link>
              </td>
              <td>
               <Link to={`/${post.category}/${post.id}`}>{post.title}</Link>
              </td>
              <td>
               {post.author}
              </td>
              <td>
                {post.voteScore}&nbsp;&nbsp;&nbsp;&nbsp;
                <FaThumbsOUp onClick={e => { this.props.votePost(`${post.id}`, "upVote") }} />
                <FaThumbsODown onClick={e => { this.props.votePost(`${post.id}`, "downVote") }} />
              </td>
              <td>
                {formatTimestamp(`${post.timestamp}`)}
              </td>
            </tr>
          )}
          </tbody>
          </table>
          <br />
          <Link className="button" to='/new/post' onClick={e => { this.props.newPost() }}>Add Post</Link>
        </div>        
      )
    } else {
      return (
        <div>No posts founds</div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    selectCategory: state.selectCategory
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (category) => {
      if (category === 'All' || category === '' || category === undefined) {        
        dispatch(getAllPosts());
      } else {
        dispatch(getCategoryPosts(category));
      }
    },
    newPost: () => {
      dispatch(setPost({category: '', author: '', title: '', body: ''}));
    },
    setPost: (post) => {
      dispatch(setPost(post));
    },
    deletePost: (id) => {
      dispatch(deletePost(id));
    },
    votePost: (id, option) => {
      dispatch(votePost(id, option));
    },
    sortPosts: (sortKey) => {
      dispatch(sortPosts(sortKey));
    }
  }
} 
export default connect(mapStateToProps, mapDispatchToProps)(PostsList);