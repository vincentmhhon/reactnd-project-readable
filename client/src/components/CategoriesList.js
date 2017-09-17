import React from 'react';
import FilterLink from './FilterLink';

const CategoriesLink = ({categories}) => (
  <p>
    {categories.map(category =>
      <FilterLink filter={category.path}>
        {category.name}&nbsp;
      </FilterLink>
    )}
  </p>
);

export default CategoriesLink;

