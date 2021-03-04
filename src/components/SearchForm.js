import React, {useState} from 'react';

const SearchForm = ({navSearch}) => {
  const [formQuery, setFormQuery] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        className={`${navSearch ? 'nav-form' : 'main-form'}`}
      >
        <input
          className='home-form__input'
          placeholder='Search for recipes...'
          type='text'
          value={formQuery}
          onChange={(e) => setFormQuery(e.target.value)}
        />
        <label htmlFor='search-input'>
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
    </>
  );
};

export default SearchForm;
