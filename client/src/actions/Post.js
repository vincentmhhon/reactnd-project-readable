import * as api from '../utils/api';

export const GET_ALL_POSTS = "GET_ALL_POSTS";
export const GET_CATEGORY_POSTS = "GET_CATEGORY_POSTS";
export const GET_POST = "GET_POST";
export const VOTE_POST = "VOTE_POST";
export const DELETE_POST = "DELETE_POST";
export const ADD_POST = "ADD_POST";
export const UPDATE_POST = "UPDATE_POST";

export const getAllPostsSuccessfully = (posts) => 
(
  {
    type: GET_ALL_POSTS,
    posts
  }
);

export const getAllPosts = () => (dispatch) => (
  api
    .getAllPosts()
    .then(posts => dispatch(getAllPostsSuccessfully(posts)))
);

export const getCategoryPostsSuccessfully = (posts) => 
(
  {
    type: GET_CATEGORY_POSTS,
    posts
  }
);

export const getCgetCategoryPosts = () => (dispatch) => (
  api
    .getCategoryPost
    .then(posts => dispatch(getCategoryPostsSuccessfully(posts)))
);


export const getPostSuccessfully = (post) => 
(
  {
    type: GET_POST,
    post
  }
);

export const getPost = (id) => (dispatch) => (
  api
    .getPost(id)
    .then(post => dispatch(getPostSuccessfully(post)))

);

export const votePostSuccessfully = (post) =>
( 
  {
    type: VOTE_POST,
    post
  }

);

export const votePost = (id , option) => (dispatch) => 
(
  api
    .votePost(id, option)
    .then(post => dispatch(votePostSuccessfully(post)))
);

export const deletePostSuccessfully = post =>
( 
  {
    type: DELETE_POST,
    post
  }

);

export const deletePost = (id) => (dispatch) => 
(
  api
    .deletePost(id)
    .then(post => dispatch(deletePostSuccessfully(post)))
);

export const addPostSuccessfully = (post) =>
( 
  {
    type: ADD_POST,
    post
  }

);

export const addPost = (post) => (dispatch) => 
(
  api
    .addPost(post)
    .then(post => dispatch(addPostSuccessfully(post)))
);

export const updatePostSuccessfully = (post) =>
(
  {
    type: UPDATE_POST,
    payload: post
  }
);

export const updatePost = (post) => (dispatch) => 
(
  api
    .updatePost(post)
    .then(post => dispatch(updatePostSuccessfully(post)))
);