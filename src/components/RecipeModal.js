import React from 'react';

const RecipeModal = ({recipe}) => {
  return (
    <div className='modal-container'>
      <div className='recipe-modal'>
        <div className='recipe-modal__img-div'>
          <img src={recipe.image} alt='recipe-img' />
        </div>
        <h2>{recipe.title}</h2>
        <p>{recipe.summary}</p>
        {recipe.diet.length > 0 &&
          recipe.diet.map((diet) => <span key={diet.index}>{diet}</span>)}
        <p>
          <span> {`Serving: ${title.serving}`} </span>,{' '}
          <span>{`Calories: ${recipe.calories}`} </span>
        </p>
        <p>{`Ready in: ${recipe.readyIn} mins`} </p>
        <ul>
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient.key}>{ingredient}</li>
          ))}
        </ul>
        <ol>
          {recipe.instructions.map((instruction) => (
            <li key={instruction.key}>{instruction}</li>
          ))}
        </ol>
        <div className=''></div>
      </div>
    </div>
  );
};

export default RecipeModal;
