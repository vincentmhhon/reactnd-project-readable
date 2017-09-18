import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCategories, selectCategory } from '../actions/Category';
import {getCategoryPosts, getAllPosts } from '../actions/Post';

class CategoriesList extends Component {
  componentWillMount() {
    this.props.getCategories();
  }

  render() {
    const { categories } = this.props;
    return (      
      <p>
        <div><b>Categories</b></div>
        <div>
          <Link to="/" onClick={e => {
                                   this.props.selectCategory('All');
                                }}
          >
            All
          </Link>
        </div>

        {categories.map(category =>
        <div>
          <Link key={`${category.path}`} to={`/${category.path}`} onClick={e => {
                                                        this.props.selectCategory(`${category.path}`);
                                                      }}
          
          >
             {category.name}
          </Link>
          &nbsp;
        </div>          
        )}
      </p>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    selectCategory
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
export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);
