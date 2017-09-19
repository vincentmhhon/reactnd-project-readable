import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllPosts,getCategoryPosts, setPost } from '../actions/Post';
import { formatTimestamp } from '../utils/helper';

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
    const posts = this.props.posts;
    const selectCategory = this.props.selectCategory;
    if (posts) {
      return (         
        <div>
          <div><b>{selectCategory} Posts</b></div>
          <table id="posts">
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
              <Link className="button" to={`/post/edit/${post.id}`} onClick={e => {
                                                                      this.props.setPost(post);
                                                                    }} >
                Edit</Link>
              </td>
              <td>
               <Link to={`/posts/${post.id}`}>{post.title}</Link>
              </td>
              <td>
               {post.author}
              </td>
              <td>
                {post.voteScore}
              </td>
              <td>
                {formatTimestamp(`${post.timestamp}`)}
              </td>
            </tr>
          )}
          </tbody>
          </table>
          <br />
          <Link className="button" to='/post/new' onClick={e => {
                                                        this.props.newPost();
                                                      }}
          >
          Add Post
          </Link>
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
    }
  }
} 
export default connect(mapStateToProps, mapDispatchToProps)(PostsList);