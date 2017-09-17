import * as api from '../utils/api'

export const GET_POST_COMMENTS = "GET_POST_COMMENTS"
export const ADD_COMMENT = "ADD_COMMENT"
export const GET_COMMENT = "GET_COMMENT"
export const VOTE_COMMENT = "VOTE_COMMENT"
export const UPDATE_COMMENT = "UPDATE_COMMENT"
export const DELETE_COMMENT = "DELETE_COMMENT"

export const getPostCommentsSuccessfully = comments => 
(
  {
    type: GET_POST_COMMENTS,
    comments
  }
)

export const getPostComments = postId => dispatch => (
  api
    .getPostComments(postId)
    .then(comments => dispatch(getPostCommentsSuccessfully(comments)))
)

export const addCommentSuccessfully = comment => 
(
  {
    type: ADD_COMMENT,
    comment
  }
)

export const addComment = comment => dispatch => (
  api
    .addComment(comment)
    .then(comment => dispatch(addCommentSuccessfully(comment)))
)

export const getCommentSuccessfully = comment => 
(
  {
    type: GET_COMMENT,
    comment
  }
)

export const getComment = id => dispatch => (
  api
    .getComment(id)
    .then(comment => dispatch(getCommentSuccessfully(comment)))
)

export const voteCommentSuccessfully = comment =>
( 
  {
    type: VOTE_COMMENT,
    comment
  }

)

export const voteComment = id => dispatch => 
(
  api
    .voteComment(id, option)
    .then(comment => dispatch(voteCommentSuccessfully(comment)))
)

export const updateCommentSuccessfully = comment =>
( 
  {
    type: UPDATE_COMMENT,
    comment
  }

)

export const updateComment = comment => dispatch => 
(
  api
    .updateComment(comment)
    .then(comment => dispatch(updateCommentSuccessfully(comment)))
)

export const deleteCommentSuccessfully = comment =>
( 
  {
    type: DELETE_COMMENT,
    comment
  }

)

export const deleteComment = comment => dispatch => 
(
  api
    .updateComment(comment)
    .then(comment => dispatch(deleteCommentSuccessfully(comment)))
)