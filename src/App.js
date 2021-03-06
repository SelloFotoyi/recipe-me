import React, {useState, useEffect} from 'react';
import {Route, useHistory} from 'react-router-dom';
import './css/App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import SearchPage from './components/SearchPage';
import Footer from './components/Footer';
import RecipeModal from './components/RecipeModal';
import axios from 'axios';
import SearchPlus from './components/SearchPlus';

function App() {
  const [query, setQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navSearch, setNavSearch] = useState(false);
  const [recipes, setRecipes] = useState([]);
  let history = useHistory();

  // useEffect(() => {
  //   recipes.map((recipe) => {
  //     console.log(recipe);
  //   });
  // }, [recipes]);

  useEffect(() => {
    if (query) {
      axios
        .get('https://api.spoonacular.com/recipes/complexSearch?', {
          params: {
            query: query,
            apiKey: '389912dfeb104476b76c3bcc567edda3',
            number: 5,
          },
        })
        .then((res) => {
          let complexSearchResults = res.data.results;
          setRecipes(complexSearchResults);
          history.push('/search-page');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [query]);

  return (
    <div className='App'>
      <Nav
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        navSearch={navSearch}
        setNavSearch={setNavSearch}
      />
      <Route
        path='/'
        exact
        render={(props) => (
          <>
            {!mobileMenuOpen && (
              <Home navSearch={navSearch} setQuery={setQuery} />
            )}
          </>
        )}
      />

      <Route path='/search-page'>
        <SearchPage recipes={recipes} />
      </Route>
      <Route path='/search-plus'>
        <SearchPlus recipes={recipes} setRecipes={setRecipes} />
      </Route>
    </div>
  );
}

export default App;
