import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Footer from './Footer';
import SearchForm from './SearchForm';

const Home = ({setQuery}) => {
  const [search, setSearch] = useState('');

  return (
    <div className='home'>
      <section className='home-search'>
        <h1 className='home__title'>Recipe Me</h1>
        <SearchForm />
        <p className='suggestor'>e.g, pasta, chicken, etc...</p>
      </section>
      <main className='home-main'>
        <h1 className='home-main__title'>Welcome to Recipe Me!</h1>
        <section className='main-sub'>
          <div className='main-sub__info'>
            <div className='main-sub__info__title'>
              <span className='marker'></span>
              <h3>Est incididunt duis ea enim ea.</h3>
            </div>
            <p>
              Labore ipsum ullamco aliquip dolor proident eiusmod veniam
              reprehenderit. Sint aute duis anim sunt labore consectetur ut
              minim reprehenderit irure. Consequat nostrud veniam velit ipsum
              est proident quis mollit labore laboris sint. Veniam anim anim
              enim id non magna labore Lorem ullamco consequat laborum anim
              magna proident.
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
              <h3>Est incididunt duis ea enim ea.</h3>
            </div>
            <p>
              Labore ipsum ullamco aliquip dolor proident eiusmod veniam
              reprehenderit. Sint aute duis anim sunt labore consectetur ut
              minim reprehenderit irure. Consequat nostrud veniam velit ipsum
              est proident quis mollit labore laboris sint. Veniam anim anim
              enim id non magna labore Lorem ullamco consequat laborum anim
              magna proident.
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
              <h3>Est incididunt duis ea enim ea.</h3>
            </div>
            <p>
              Labore ipsum ullamco aliquip dolor proident eiusmod veniam
              reprehenderit. Sint aute duis anim sunt labore consectetur ut
              minim reprehenderit irure. Consequat nostrud veniam velit ipsum
              est proident quis mollit labore laboris sint. Veniam anim anim
              enim id non magna labore Lorem ullamco consequat laborum anim
              magna proident.
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
