import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';

const Error = ({error}) => {
  return (
    <div className='error'>
      {error == 'Network Error' ? (
        <h2 className='error__spec'>
          <FontAwesomeIcon
            icon={faExclamationTriangle}
            className='error__spec__icon'
          />
          <br />
          <br />
          Network error. Please check your connection and try again.
        </h2>
      ) : (
        <h2 className='error__spec'>
          <FontAwesomeIcon
            icon={faExclamationTriangle}
            className='error__spec__icon'
          />
          <br />
          <br />
          No results for your search. Please try again.
        </h2>
      )}
    </div>
  );
};

export default Error;
