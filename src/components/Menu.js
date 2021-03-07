import React, {useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import RecipeGrid from './RecipeGrid';

import Footer from './Footer';

const Menu = () => {
  const axios = require('axios');
  const [tag, setTag] = useState('');
  const [randomRecipes, setRandomRecipes] = useState([]);

  //   const dinnerRecipe = {
  //     id: uuidv4(),
  //     title: 'Dinnner Recipe',
  //     image:
  //       'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636',
  //   };
  //   const lunchRecipe = {
  //     id: uuidv4(),
  //     title: 'Lunch Recipe title',
  //     image:
  //       'https://www.helpguide.org/wp-content/uploads/fast-foods-candy-cookies-pastries-768.jpg',
  //   };
  //   const breakfastRecipe = {
  //     id: uuidv4(),
  //     title: 'Breakfast Recipe title',
  //     image:
  //       'https://simply-delicious-food.com/wp-content/uploads/2018/10/breakfast-board-500x500.jpg',
  //   };
  //   const dessertRecipe = {
  //     id: uuidv4(),
  //     title: 'Dessert Recipe title',
  //     image:
  //       'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dessert-main-image-molten-cake-0fbd4f2.jpg?quality=90&resize=500%2C454',
  //   };
  //   const snacksRecipe = {
  //     id: uuidv4(),
  //     title: 'Snacks Recipe title',
  //     image:
  //       'https://img.foodmanufacturing.com/files/base/indm/all/image/2018/06/mnet_156037_saltysnackslisting.png?auto=format&fit=crop&h=394&w=700',
  //   };
  //   const randomRecipe = {
  //     id: uuidv4(),
  //     title: 'Random Recipe Title',
  //     image:
  //       'https://img.buzzfeed.com/video-api-prod/assets/eb44570519264864814264f7f0a5e47a/BFV13909_BakedRatatouille-ThumbTextless1080.jpg?output-format=auto&output-quality=auto',
  //   };

  useEffect(() => {
    //  filler(randomRecipe);
    fetchRandom('');
  }, []);

  useEffect(() => {
    if (tag) {
      setRandomRecipes([]);
      fetchRandom(tag);
      //   if (tag === 'dinner') {
      //     filler(dinnerRecipe);
      //   } else if (tag === 'lunch') {
      //     filler(lunchRecipe);
      //   } else if (tag === 'breakfast') {
      //     filler(breakfastRecipe);
      //   } else if (tag === 'dessert') {
      //     filler(dessertRecipe);
      //   } else if (tag === 'snacks') {
      //     filler(snacksRecipe);
      //   }
    }
  }, [tag]);

  //   const filler = (recipe) => {
  //     let counter = 0;
  //     let recipes = [];
  //     while (counter < 20) {
  //       recipes = [...recipes, recipe];
  //       counter++;
  //     }
  //     setRandomRecipes(recipes);
  //   };

  const fetchRandom = (tag) => {
    if (tag) {
      axios
        .get('https://api.spoonacular.com/recipes/random', {
          params: {
            tags: tag,
            apiKey: '389912dfeb104476b76c3bcc567edda3',
            number: 20,
          },
        })
        .then((res) => {
          setRandomRecipes(res.data.recipes);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get('https://api.spoonacular.com/recipes/random', {
          params: {
            apiKey: '389912dfeb104476b76c3bcc567edda3',
            number: 20,
          },
        })
        .then((res) => {
          setRandomRecipes(res.data.recipes);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className='menu'>
      <aside className='menu__lister'>
        <span className='menu__lister__item' onClick={() => setTag('dinner')}>
          Dinner
        </span>

        <span className='menu__lister__item' onClick={() => setTag('lunch')}>
          Lunch
        </span>

        <span
          className='menu__lister__item'
          onClick={() => setTag('breakfast')}
        >
          Breakfast
        </span>

        <span className='menu__lister__item' onClick={() => setTag('dessert')}>
          Dessert
        </span>

        <span className='menu__lister__item' onClick={() => setTag('snacks')}>
          Snacks
        </span>
      </aside>
      <h2 className='menu__header'>
        {tag ? `Random ${tag} recipes` : `Today's random recipes`}
      </h2>
      <main className='menu__grid'>
        <RecipeGrid recipes={randomRecipes} />
      </main>
    </div>
  );
};

export default Menu;
