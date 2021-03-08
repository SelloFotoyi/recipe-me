import React from 'react';
import RecipeCard from './RecipeCard';
import {Link} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';

const RecipeGrid = ({recipes, setError}) => {
  return (
    <div className='recipe-grid'>
      {recipes &&
        recipes.map((recipe) => (
          <div className='recipe-grid-item' key={uuidv4()}>
            <RecipeCard recipe={recipe} setError={setError} />
          </div>
        ))}
    </div>
  );
};

export default RecipeGrid;
