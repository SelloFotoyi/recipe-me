import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import RecipeGrid from './RecipeGrid';
import Footer from './Footer';
import Spinner from './Spinner';

const Menu = ({setError, isLoading, setIsLoading}) => {
  const axios = require('axios');
  const [tag, setTag] = useState('');
  const [randomRecipes, setRandomRecipes] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetchRandom('');
  }, []);

  useEffect(() => {
    if (tag) {
      setRandomRecipes([]);
      fetchRandom(tag);
    }
  }, [tag]);

  const fetchRandom = (tag) => {
    if (tag) {
      setIsLoading(true);
      axios
        .get('https://api.spoonacular.com/recipes/random', {
          params: {
            tags: tag,
            apiKey: '389912dfeb104476b76c3bcc567edda3',
            number: 20,
          },
        })
        .then((res) => {
          if (res.data.recipes.length == 0) {
            setError('');
            history.push('/error');
          } else {
            setRandomRecipes(res.data.recipes);
          }
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          history.push('/error');
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
          if (res.data.recipes.length == 0) {
            setError('');
            history.push('/error');
          } else {
            setRandomRecipes(res.data.recipes);
          }
        })
        .catch((error) => {
          setError(error.message);
          history.push('/error');
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
        {isLoading ? <Spinner /> : <RecipeGrid recipes={randomRecipes} />}
      </main>
    </div>
  );
};

export default Menu;
