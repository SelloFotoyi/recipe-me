import React from 'react';
import RecipeGrid from './RecipeGrid';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const SearchPage = ({recipes, setError, isLoading}) => {
  return (
    <div className='search-page'>
      <ScrollToTop />
      <h2 className='search-page__title'>Search results</h2>
      <RecipeGrid recipes={recipes} setError={setError} isLoading={isLoading} />
      <Footer />
    </div>
  );
};

export default SearchPage;
