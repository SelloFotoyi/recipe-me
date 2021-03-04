import React from 'react';
import RecipeGrid from './RecipeGrid';

const SearchPage = ({navSearch, recipes}) => {
  return (
    <div className='search-page'>
      <h1 className='search-page__title'>Results for ...</h1>
      <RecipeGrid recipes={recipes} />
    </div>
  );
};

export default SearchPage;
