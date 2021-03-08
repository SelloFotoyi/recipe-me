import React from 'react';
import Footer from './Footer';
import SearchForm from './SearchForm';
import {FontAwesome, FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGrinTongue} from '@fortawesome/free-regular-svg-icons';

const Home = ({setQuery, navSearch, setNavSearch}) => {
  window.addEventListener('scroll', () => {
    let barHeight = window.scrollY;
    let windowHeight = window.innerHeight;
    let halfWindowHeight = Math.ceil(windowHeight / 2);
    if (barHeight >= windowHeight) {
      setNavSearch(true);
    } else if (barHeight <= windowHeight) {
      setNavSearch(false);
    }
  });

  return (
    <div className='home'>
      <section className='home-search'>
        <h1 className='home__title'>Recipe Me!</h1>
        <SearchForm navSearch={navSearch} setQuery={setQuery} />
        <p className='home__suggestor'>e.g, pasta, chicken, etc...</p>
      </section>
      <main className='home-main'>
        <h1 className='home-main__title'>Welcome to Recipe Me!</h1>
        <section className='main-sub'>
          <div className='main-sub__info'>
            <div className='main-sub__info__title'>
              <span className='marker'></span>
              <h3>Consice recipes</h3>
            </div>
            <p>
              Every detail you could ever need to prepare your next meal. The
              recipes' architecture is natural and logical, making it easy to
              follow. Just don't forget to compare your end result with the
              provided recipe image... for the same reason you're probably here
              in the first place.
            </p>
          </div>
          <div className='main-sub__img-div'>
            <img src='/img/main-sub-img_1.jpg' alt='img-2' />
          </div>
        </section>
        <section className='main-sub'>
          <div className='main-sub__info'>
            <div className='main-sub__info__title'>
              <span className='marker'></span>
              <h3>Search with your ingredients</h3>
            </div>
            <p>
              You want to prepare a meal without having to scavenger hunt for
              all ingredients? <i>Recipe Me!</i> got you. You can search for
              recipes which iclude what you already have, ingredients-wise. The
              more ingredients you have, the less you might have to add on to
              your list...simple math.
            </p>
          </div>
          <div className='main-sub__img-div'>
            <img src='/img/main-sub-img_2.jpg' alt='img-2' />
          </div>
        </section>
        <section className='main-sub'>
          <div className='main-sub__info'>
            <div className='main-sub__info__title'>
              <span className='marker'></span>
              <h3>There's something for everyone!</h3>
            </div>
            <p>
              <i>Recipe Me!</i> utilizes a smart{' '}
              <a
                href='https://spoonacular.com/food-api/'
                target='_blank'
                rel='noopener noreferrer'
                className='footer-flex__item__link'
                style={{fontWeight: 'bold', textDecoration: 'underline'}}
              >
                {' '}
                Spoonacular food API
              </a>{' '}
              which caters for different meal and diet types. Dinner, gluten
              free, dessert, ketogenic, snacks, lacto-vegetarian, breakfast,
              pescatarian...the list goes on... and on. The aim is for you to
              easily find your next meal, without reaching out for your EpiPen.
              So, please check out recipes' intolerences before you cook up your
              meal.
            </p>
          </div>
          <div className='main-sub__img-div'>
            <img src='/img/main-sub-img_3.jpg' alt='img-2' />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
