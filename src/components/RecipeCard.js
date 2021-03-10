import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import RecipeModal from './RecipeModal';
import Error from './Error';

const RecipeCard = ({recipe, setError}) => {
  const axios = require('axios');
  const history = useHistory();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toModal, setToModal] = useState(false);
  const [detailedRecipe, setDetailedRecipe] = useState({});

  useEffect(() => {
    if (isModalOpen) {
      axios
        .get(
          `https://api.spoonacular.com/recipes/${recipe.id}/information?includeNutrition=true`,
          {
            params: {
              apiKey: process.env.REACT_APP_API_KEY,
            },
          }
        )

        .then((info) => {
          let ingredients = [];
          if (info.data.extendedIngredients.length > 0) {
            info.data.extendedIngredients.map((ingredient) => {
              ingredients.push(ingredient.originalString);
            });
          }

          let instructions = [];
          if (info.data.analyzedInstructions[0].steps.length > 0) {
            info.data.analyzedInstructions[0].steps.map((step) => {
              instructions.push(step.step);
            });
          }

          setDetailedRecipe({
            id: recipe.id,
            image: info.data.image,
            title: info.data.title,
            summary: info.data.summary,
            diets: info.data.diets,
            servings: info.data.servings,
            calories: info.data.nutrition.nutrients[0].amount,
            readyInMinutes: info.data.readyInMinutes,
            ingredients: ingredients,
            instructions: instructions,
          });
          setToModal(true);
        })
        .catch((error) => {
          setError(error.message);
          history.push('./error');
        });
    }
  }, [isModalOpen]);

  return (
    <>
      <div
        className='recipe-card'
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <div className='recipe-card__img-div'>
          <img src={recipe.image} alt='recipe-img' />
        </div>
        <h4 className='recipe-card__title'>{recipe.title}</h4>
      </div>
      {isModalOpen && toModal && (
        <RecipeModal
          recipe={detailedRecipe}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          setToModal={setToModal}
        />
      )}
    </>
  );
};

export default RecipeCard;
