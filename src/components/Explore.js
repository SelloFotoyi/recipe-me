import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInfoCircle, faLaughBeam} from '@fortawesome/free-solid-svg-icons';
import randomColor from 'randomcolor';
import Spinner from './Spinner';

const Explore = ({query, setError, isLoading, setIsLoading}) => {
  const axios = require('axios');
  const history = useHistory();
  const [next, setNext] = useState(true);
  const [misc, setMisc] = useState('');
  const [themeColor, setThemeColor] = useState(randomColor());

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://api.spoonacular.com/food/${query}/random`, {
        params: {
          apiKey: '389912dfeb104476b76c3bcc567edda3',
        },
      })
      .then((res) => {
        setIsLoading(false);
        setMisc(res.data.text);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
        history.push('/error');
      });
    setThemeColor(randomColor());
  }, [next]);
  return (
    <div className='explorer' style={{backgroundColor: themeColor}}>
      {isLoading ? (
        <Spinner />
      ) : (
        <section className='explorer__box'>
          <p>{misc}</p>
          <div>
            {query === 'trivia' ? (
              <FontAwesomeIcon
                icon={faInfoCircle}
                className='icon'
                style={{color: themeColor}}
              />
            ) : (
              <FontAwesomeIcon
                icon={faLaughBeam}
                className='icon'
                style={{color: themeColor}}
              />
            )}

            <button
              onClick={() => setNext(!next)}
              style={{backgroundColor: themeColor}}
            >
              Next
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default Explore;
