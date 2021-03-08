import React from 'react';
import RecipeGrid from './RecipeGrid';
import Footer from './Footer';

const SearchPage = ({recipes, setError}) => {
  return (
    <div className='search-page'>
      <h2 className='search-page__title'>Search results</h2>
      <RecipeGrid recipes={recipes} setError={setError} />
      <Footer />
    </div>
  );
};

export default SearchPage;
