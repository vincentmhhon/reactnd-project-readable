import React, { Component, PropTypes } from 'react';

class PostDetails extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillUnmount() {
    this.props.resetMe();
  }

  componentDidMount() {
    this.props.fetchPost(this.props.postId);
  }

  render() {
    return (
      <div className="container">
        <h3>{post.title}</h3>
        <h6>Category: {post.category}</h6>
        <p>{post.body}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activePost: state.activePost
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => {
      dispatch(getCategories())
    },
    selectCategory: (category) => {
      dispatch(selectCategory(category))
      if (category === 'All' || category === '' || category === undefined) {        
        dispatch(getAllPosts())
      } else {
        dispatch(getCategoryPosts(category))
      }

    },
  };
}; 

export default PostDetails;
