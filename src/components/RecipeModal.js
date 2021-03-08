import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

const RecipeModal = ({recipe, isModalOpen, setIsModalOpen, setToModal}) => {
  const {htmlToText} = require('html-to-text');
  const overlayClose = (e) => {
    if (e.target.classList.contains('modal-container')) {
      setIsModalOpen(false);
      setToModal(false);
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
              setToModal(false);
            }}
          >
            &times;
          </span>
        </div>
        <h2>{recipe.title}</h2>
        <p className='recipe-modal__summary'>
          {htmlToText(recipe.summary, {wordwrap: false})}
        </p>
        <p className='recipe-modal__diets'>
          {recipe.diets.length > 0 &&
            recipe.diets.map((diet) => (
              <span className='recipe-modal__diets__item' key={uuidv4()}>
                {diet}{' '}
              </span>
            ))}
        </p>

        <p>
          <span>
            {' '}
            {`Servings: ${recipe.servings}`}
            <br />
            <br />
            {`Calories: ${recipe.calories}`}{' '}
          </span>
        </p>
        <p>
          Ready in:{' '}
          <span
            style={{fontWeight: 'bold'}}
          >{` ${recipe.readyInMinutes} `}</span>
          MINS
        </p>
        <ul className='recipe-modal__list'>
          <h3>Ingredients</h3>
          {recipe.ingredients.map((ingredient) => (
            <li key={uuidv4()}>{ingredient}</li>
          ))}
        </ul>
        <ol className='recipe-modal__list'>
          <h3>Instructions</h3>
          {recipe.instructions.map((instruction) => (
            <li key={uuidv4()}>{instruction}</li>
          ))}
        </ol>
        <div className=''></div>
      </div>
    </div>
  );
};

export default RecipeModal;
