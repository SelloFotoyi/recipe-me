import React from 'react';

const Spinner = () => {
  return (
    <div className='spinner'>
      <img
        src='https://media.giphy.com/media/3o7bu8sRnYpTOG1p8k/giphy.gif'
        style={{width: '200px', margin: 'auto', display: 'block'}}
        alt='Loading...'
      />
    </div>
  );
};
export default Spinner;
