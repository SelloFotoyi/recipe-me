import React from 'react';

const RecipeCard = ({recipe}) => {
  return (
    <div className='recipe-card'>
      <div className='recipe-card__img-div'>
        <img src={recipe.image} alt='recipe-img' />
      </div>
      <div className='recipe-card__time'> {`${recipe.readyIn} MIN`}</div>
      <h4 className='recipe-card__title'>{recipe.title}</h4>
    </div>
  );
};

export default RecipeCard;
