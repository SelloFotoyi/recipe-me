import React, {useState} from 'react';

const RecipeModal = ({recipe, isModalOpen, setIsModalOpen}) => {
  const overlayClose = (e) => {
    if (e.target.classList.contains('modal-container')) {
      setIsModalOpen(false);
    }
  };

  return (
    <div className={`modal-container`} onClick={overlayClose}>
      <div className={`recipe-modal`}>
        <div className='recipe-modal__img-div'>
          <img src={recipe.image} alt='recipe-img' />
          <span
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            &times;
          </span>
        </div>
        <h2>{recipe.title}</h2>
        <p>{recipe.summary}</p>
        <p>
          {recipe.diet.length > 0 &&
            recipe.diet.map((diet) => (
              <span key={diet.index}>| {diet} | </span>
            ))}
        </p>

        <p>
          <span> {`Serving: ${recipe.serving}`} </span>,{' '}
          <span>{`Calories: ${recipe.calories}`} </span>
        </p>
        <p>
          Ready in:{' '}
          <span style={{fontWeight: 'bold'}}>{` ${recipe.readyIn} `}</span>
          MINS
        </p>
        <ul className='recipe-modal__list'>
          <h3>Ingredients</h3>
          {recipe.ingredients.map((ingredient) => (
            <li key={Math.floor(Math.random() * 100000000)}>{ingredient}</li>
          ))}
        </ul>
        <ol className='recipe-modal__list'>
          <h3>Instructions</h3>
          {recipe.instructions.map((instruction) => (
            <li key={Math.floor(Math.random() * 100000000)}>{instruction}</li>
          ))}
        </ol>
        <div className=''></div>
      </div>
    </div>
  );
};

export default RecipeModal;
