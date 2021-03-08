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

function App() {
  const [query, setQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navSearch, setNavSearch] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');
  let history = useHistory();

  useEffect(() => {
    if (query) {
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
        })
        .catch((error) => {
          setError(error.message);
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
        <SearchPage recipes={recipes} setError={setError} />
      </Route>

      <Route path='/search-plus'>
        <SearchPlus
          recipes={recipes}
          setRecipes={setRecipes}
          setError={setError}
        />
      </Route>

      <Route path='/menu'>
        <Menu setError={setError} />
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
