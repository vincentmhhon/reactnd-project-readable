import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCategories } from '../actions/Category';

class CategoriesList extends Component {
  componentWillMount() {
    this.props.getCategories();
  }

  render() {
    const { categories } = this.props;
    return (
      <p>
        {categories.map(category =>
          <Link to={`/post/${category.path}`}>
             {category.name}
          </Link>
        )}
      </p>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => {
      dispatch(getCategories())
    }
  }
} 
export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);
