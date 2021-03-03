import React, {useState} from 'react';
import Footer from './Footer';

const Home = ({setQuery}) => {
  const [search, setSearch] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='home'>
      <section className='home-search'>
        <h1 className='home__title'>Recipe Me</h1>
        <form onSubmit={onSubmit} className='home-form'>
          <input
            className='home-form__input'
            placeholder='Search for recipes...'
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <label for='search-input'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </label>
        </form>
        <input
          style={{display: 'none'}}
          type='submit'
          name='submit'
          id='search-input'
        />
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
