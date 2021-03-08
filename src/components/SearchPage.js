import React from 'react';
import RecipeGrid from './RecipeGrid';

const SearchPage = ({recipes, setError}) => {
  return (
    <div className='search-page'>
      <h2 className='search-page__title'>Search results</h2>
      <RecipeGrid recipes={recipes} setError={setError} />
    </div>
  );
};

export default SearchPage;
