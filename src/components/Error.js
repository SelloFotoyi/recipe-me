import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';

const Error = ({error}) => {
  return (
    <div>
      {error == 'Network Error' ? (
        error == 'Request failed with status code 402' ? (
          <h2 className='error__spec'>
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              className='error__spec__icon'
            />
            <br />
            <br />
            This application utilizes a limited API key. The daily set maximum
            HTTP requests limit has been reached. Please contact the
            application's author (info on the footer) for more details. Thank
            you.
          </h2>
        ) : (
          <h2 className='error__spec'>
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              className='error__spec__icon'
            />
            <br />
            <br />
            Network error. Please check your connection and try again.
          </h2>
        )
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
