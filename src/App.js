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
import ScrollToTop from './components/ScrollToTop';
import Error from './components/Error';
import Spinner from './components/Spinner';

function App() {
  const [query, setQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navSearch, setNavSearch] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  let history = useHistory();

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      axios
        .get('https://api.spoonacular.com/recipes/complexSearch?', {
          params: {
            query: query,
            apiKey: '389912dfeb104476b76c3bcc567edda3',
            number: 50,
          },
        })
        .then((res) => {
          let resRecipes = res.data.results;
          if (resRecipes.length === 0) {
            setError('');
            history.push('/error');
          } else {
            setRecipes(resRecipes);
            history.push('/search-page');
          }
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setIsLoading(false);
          history.push('./error');
        });
    }
  }, [query]);

  return (
    <div className='App'>
      <ScrollToTop />
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
            {!mobileMenuOpen &&
              (isLoading ? (
                <Spinner />
              ) : (
                <Home
                  navSearch={navSearch}
                  setNavSearch={setNavSearch}
                  setQuery={setQuery}
                />
              ))}
          </>
        )}
      />
      <Route path='/search-page'>
        <SearchPage recipes={recipes} setError={setError} />
      </Route>

      <Route path='/search-plus'>
        <SearchPlus
          recipes={recipes}
          setRecipes={setRecipes}
          setError={setError}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </Route>

      <Route path='/menu'>
        <Menu
          setError={setError}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </Route>

      <Route path='/trivia'>
        <Explore query='trivia' setError={setError} />
      </Route>

      <Route path='/jokes'>
        <Explore query='jokes' setError={setError} />
      </Route>

      <Route path='/error'>
        <Error error={error} />
      </Route>
    </div>
  );
}

export default App;
