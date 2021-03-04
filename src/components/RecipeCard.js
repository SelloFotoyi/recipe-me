import React, {useState} from 'react';
import RecipeModal from './RecipeModal';

const RecipeCard = ({recipe}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
        <div className='recipe-card__time'> {`${recipe.readyIn} MIN`}</div>
        <h4 className='recipe-card__title'>{recipe.title}</h4>
      </div>
      {isModalOpen && (
        <RecipeModal
          recipe={recipe}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
};

export default RecipeCard;
