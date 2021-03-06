import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import Nav from './Nav';

const SearchPlus = ({recipes, setRecipes}) => {
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

    //  console.log(ingredients);
  }, [ingredient]);

  const removeIngredient = (id) => {
    setIngredients(ingredients.filter((ingredient) => ingredient.id !== id));
  };

  const addIngredient = (e) => {
    e.preventDefault();
    if (ingredient.text) {
      setIngredients([...ingredients, ingredient]);
      console.log(ingredients);
    }
    setIngredient({...ingredient, id: uuidv4(), text: ''});
    console.log(ingredient);
  };

  useEffect(() => {
    if (ingredients.length > 0) {
      let ingredientsParam = '';
      ingredients.map((ingr) => {
        if (ingredientsParam) {
          ingredientsParam = `${ingredientsParam}+${ingr.text}`;
        } else {
          ingredientsParam = ingr.text;
        }
      });
      console.log(ingredientsParam);
      console.log(ingredients);
      axios
        .get('https://api.spoonacular.com/recipes/findByIngredients?', {
          params: {
            ingredients: ingredientsParam,
            apiKey: '389912dfeb104476b76c3bcc567edda3',
            number: 10,
          },
        })
        .then((res) => {
          let ingredientsResults = res.data;
          setRecipes(ingredientsResults);

          history.push('/search-page');
        })
        .catch((error) => {
          console.log(error);
        });
      setIngredients([]);
      setIsModalOpen(false);
    }
  }, [searchPlus]);

  return (
    <div className='search-plus'>
      <section className='main-sub'>
        <div className='main-sub__info'>
          <div className='main-sub__info__title'>
            <span className='marker'></span>
            <h3>What's in your fridge?</h3>
          </div>
          <p>
            Labore ipsum ullamco aliquip dolor proident eiusmod veniam
            reprehenderit. Sint aute duis anim sunt labore consectetur ut minim
            reprehenderit irure. Consequat nostrud veniam velit ipsum est
            proident quis mollit labore laboris sint. Veniam anim anim enim id
            non magna labore Lorem ullamco consequat laborum anim magna
            proident.
          </p>
          <button className='btn' onClick={() => setIsModalOpen(true)}>
            Search
          </button>
        </div>
        <div className='main-sub__img-div'>
          <img src='/img/main-sub-img_1.jpg' alt='img-2' />
        </div>
      </section>
      {isModalOpen && (
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
                        console.log(ingredients.length);
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
      )}
    </div>
  );
};

export default SearchPlus;
