import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllPosts,getCategoryPosts } from '../actions/Post';

class PostsList extends Component {
  componentWillMount() {
    this.props.getPosts(this.props.selectCategory);
  }

  render() {
    const posts = this.props.posts;
    const selectCategory = this.props.selectCategory;
    if (posts) {
      return (         
        <div>
          <div><b>{selectCategory} Posts</b></div>
          <table id="posts">
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Score</th>
            </tr>            
          {posts.map(post =>
            <tr>
              <td>
               <Link key={`${post.id}`} to={`/posts/${post.id}`}>{post.title}</Link>
              </td>
              <td>
               {post.author}
              </td>
              <td>
                {post.voteScore}
              </td>
            </tr>
          )}
          </table>
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
        dispatch(getAllPosts())
      } else {
        dispatch(getCategoryPosts(category))
      }
    }
  }
} 
export default connect(mapStateToProps, mapDispatchToProps)(PostsList);