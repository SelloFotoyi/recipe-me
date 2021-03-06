import React from 'react';
import RecipeCard from './RecipeCard';
import {Link} from 'react-router-dom';

const RecipeGrid = ({recipes}) => {
  return (
    <div className='recipe-grid'>
      {recipes &&
        recipes.map((recipe) => (
          <div
            className='recipe-grid-item'
            key={Math.floor(Math.random() * 100000000)}
          >
            <RecipeCard recipe={recipe} />
          </div>
        ))}
    </div>
  );
};

export default RecipeGrid;
