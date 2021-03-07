import React, {useState, useEffect} from 'react';
import {Route, useHistory} from 'react-router-dom';
import axios from 'axios';
import './css/App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import SearchPage from './components/SearchPage';
import Footer from './components/Footer';
import SearchPlus from './components/SearchPlus';
import Menu from './components/Menu';
import Explore from './components/Explore';

function App() {
  const [query, setQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navSearch, setNavSearch] = useState(false);
  const [recipes, setRecipes] = useState([]);
  let history = useHistory();

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
              <Home
                navSearch={navSearch}
                setNavSearch={setNavSearch}
                setQuery={setQuery}
              />
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

      <Route path='/menu' component={Menu} />

      <Route path='/trivia'>
        <Explore query='trivia' />
      </Route>

      <Route path='/jokes'>
        <Explore query='jokes' />
      </Route>
    </div>
  );
}

export default App;
