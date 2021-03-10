import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import Nav from './Nav';
import Spinner from './Spinner';

const SearchPlus = ({setRecipes, setError, isLoading, setIsLoading}) => {
  const axios = require('axios');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ingredient, setIngredient] = useState({
    id: uuidv4(),
    text: '',
    live: true,
  });
  const [ingredients, setIngredients] = useState([]);
  const [searchPlus, setSearchPlus] = useState(false);
  let history = useHistory();

  const overlayClose = (e) => {
    if (e.target.classList.contains('modal-container')) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (!ingredient.live) {
      setIngredients(ingredients.filter((ingred) => !ingred.live));
    }
  }, [ingredient]);

  const addIngredient = (e) => {
    e.preventDefault();
    if (ingredient.text) {
      setIngredients([...ingredients, ingredient]);
    }
    setIngredient({...ingredient, id: uuidv4(), text: ''});
  };

  useEffect(() => {
    if (searchPlus) {
      setIsLoading(true);
    }
    if (ingredients.length > 0) {
      setIsLoading(true);
      let ingredientsParam = '';
      ingredients.map((ingr) => {
        if (ingredientsParam) {
          ingredientsParam = `${ingredientsParam}+${ingr.text}`;
        } else {
          ingredientsParam = ingr.text;
        }
      });
      axios
        .get('https://api.spoonacular.com/recipes/findByIngredients?', {
          params: {
            ingredients: ingredientsParam,
            apiKey: '389912dfeb104476b76c3bcc567edda3',
            number: 50,
          },
        })
        .then((res) => {
          let ingredientsResults = res.data;
          if (ingredientsResults.length == 0) {
            setError('');
            setIsLoading(false);
            history.push('/error');
          } else {
            setRecipes(ingredientsResults);
            setIsLoading(false);
            history.push('/search-page');
          }
        })
        .catch((error) => {
          setError(error.message);
          console.log(error.message);
          setIsLoading(false);
          history.push('./error');
        });
      setIngredients([]);
      setIsModalOpen(false);
    }
  }, [searchPlus]);

  return (
    <div className='search-plus'>
      <section className='main-sub search-plus'>
        <div className='main-sub__info'>
          <div className='main-sub__info__title'>
            <h3 style={{width: '100%', textAlign: 'center'}}>
              What's in your fridge?
            </h3>
          </div>
          <p>
            <i>Recipe Me! Search+</i> feature assists you in narrowing down your
            search, based on the ingredients you already have. Hit the search
            button to start entering your ingredients in the pop-up, then the
            proceed button to search for correponding recipes. Made an error
            (typo, etc)? click on an ingredient to remove it from the list.
            How's that for second chances?
          </p>
          <button className='btn' onClick={() => setIsModalOpen(true)}>
            Search
          </button>
        </div>
        <div className='main-sub__img-div' style={{height: '45vh'}}>
          <img src='/img/fridge.jpg' alt='img-2' />
        </div>
      </section>
      {isModalOpen &&
        (isLoading ? (
          <Spinner />
        ) : (
          <section className='modal-container' onClick={overlayClose}>
            <div className='search-plus__pop-up'>
              <form onSubmit={addIngredient}>
                <input
                  placeholder='add ingredient...'
                  type='text'
                  value={ingredient.text}
                  onChange={(e) => {
                    setIngredient({
                      ...ingredient,
                      text: e.target.value,
                    });
                  }}
                  className='search-plus__pop-up__input'
                />
                <input type='submit' value='Add' className='btn' />
              </form>

              {ingredients && (
                <ul className='ingredients-lister'>
                  {ingredients.map((ingred) => {
                    return (
                      <li
                        key={ingred.id}
                        onClick={() => {
                          setIngredients(
                            ingredients.filter((ing) => ing !== ingred)
                          );
                        }}
                      >
                        {ingred.text}
                      </li>
                    );
                  })}
                </ul>
              )}

              <button className='btn' onClick={() => setSearchPlus(true)}>
                Proceed
              </button>
            </div>
          </section>
        ))}
    </div>
  );
};

export default SearchPlus;
