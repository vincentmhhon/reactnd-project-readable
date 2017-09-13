import React, { Component } from 'react'
import { conect } from 'react-redux'
import { addPost } from '../action'
import ArrowRightIcon from 'react-icons/lib/fa/arrow-circle-right'
import Loading from 'react-loading'
import { Route } from 'react-router-dom'
import PostsList from './PostList'
import * as api from '../api/api'
import './App.css'

class App extends React.Component {
  state = {
    post: null,
    comment: null,
  }

  componentDidMount() {
    api..then(      
      (books) => {
        this.setState({books})
      }
    )
  }

  updateBook = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(
      () => {
        let filterState = this.state.books.filter((b) => b.id !== book.id)
        book.shelf = newShelf
        let newState = filterState.concat([book])
        this.setState({books : newState})                                    
      }
    )
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBook
            books={this.state.books}
            onUpdateBook={(book, newShelf) => {
              this.updateBook(book, newShelf)
            }}
          />
        )}
        />
        <Route path="/search" render={() => (
          <SearchBook 
           savedBooks={this.state.books}
           onUpdateBook={(book, newShelf) => {
             this.updateBook(book, newShelf)             
            }}
          />
        )}
        />
      </div>
    )
  }
}

export default BooksApp
