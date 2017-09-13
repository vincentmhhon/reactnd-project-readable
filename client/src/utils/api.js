import { uuidv1 } from 'uuid/v1'

const HOST = 'http://localhost:3001'

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

// GET /categories
export const getCategories = () =>
  fetch(`${HOST}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

//GET /:category/posts
export const getCategoryPost = category =>
  fetch(`${HOST}/${category}/posts`)
    .then(res => res.json())
    .then(data => data)

// GET /posts
export const getAllPosts = () =>
  fetch(`${HOST}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

// POST /posts
export const addPost = post => 
  fetch(`${HOST}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },    
    body: JSON.stringify({ 
      id: uuidv1(),
      timestamp: Date.now(),
      title: post.title,
      body: post.body,
      author: post.author, 
      category: post.category,
    })
  })
    .then(res => res.json())
    .then(data) 

// GET /posts/:id
export const getPost = id => 
  fetch(`${HOST}/posts/${id}`, { headers })
    .then(res => res.json())
    .then(data) 

// POST /posts/:id
export const votePost = (id, option) => 
  fetch(`${HOST}/posts/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },    
    body: JSON.stringify({ option })
  })
    .then(res => res.json())
    .then(data) 

// PUT /posts/:id
export const updatePost = post =>
  fetch(`${HOST}/posts/${post.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },    
    body: JSON.stringify({ 
      title: post.title, 
      body: post.body,
      timestamp: Date.now(),
    })
  })
    .then(res => res.json())
    .then(data)

// DELETE /posts/:id
export const deletePost = id => 
  fetch(`${HOST}/posts/${id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    }})
      .then(res => json())
      .then(data)

// GET /posts/:id/comments
export const getPostComments = id => 
  fetch(`${HOST}/posts/${id}/comments`, { headers })
    .then(res => res.json())
    .then(data)     


// POST /posts
export const addComment = comment => 
  fetch(`${HOST}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },    
    body: JSON.stringify({ 
      id: uuidv1(),
      timestamp: Date.now(),
      body: comment.body,
      author: comment.author, 
      parentId: comment.parentId, 
    })
  })
    .then(res => res.json())
    .then(data) 

// GET /comments/:id
export const getComment = id => 
  fetch(`${HOST}/comments/${id}`, { headers })
    .then(res => res.json())
    .then(data) 

// POST /comments/:id
export const voteComment = (id, option) => 
  fetch(`${HOST}/comments/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },    
    body: JSON.stringify({ option })
  })
    .then(res => res.json())
    .then(data) 

// PUT /comments/:id
export const updateComment = comment =>
  fetch(`${HOST}/comments/${comment.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },    
    body: JSON.stringify({ 
      body: comment.body,
      timestamp: Date.now(),
    })
  })
    .then(res => res.json())
    .then(data)

// DELETE /comments/:id
export const deleteComment = id => 
  fetch(`${HOST}/comments/${id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    }})
      .then(res => json())
      .then(data)
