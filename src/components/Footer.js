import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

import {
  faGithub,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-flex'>
        <div className='footer-flex__item'>
          <ul>
            <span>Explore</span>
            <li>
              <Link className='footer-flex__item__link' to='/trivia'>
                Food Trivia
              </Link>
            </li>
            <li>
              <Link className='footer-flex__item__link' to='/jokes'>
                Food Jokes
              </Link>
            </li>
          </ul>
        </div>
        <div className='footer-flex__item'>
          <ul>
            <span>Info</span>
            <li>
              {' '}
              <a
                href='https://sellofotoyi.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
                className='footer-flex__item__link'
              >
                Author{' '}
              </a>{' '}
            </li>
            <li>
              {' '}
              <a
                href='https://sellofotoyi.github.io/recipe-me'
                target='_blank'
                rel='noopener noreferrer'
                className='footer-flex__item__link'
              >
                {' '}
                Github
              </a>{' '}
            </li>
            <li>
              {' '}
              <a
                href='https://spoonacular.com/food-api/'
                target='_blank'
                rel='noopener noreferrer'
                className='footer-flex__item__link'
              >
                {' '}
                A.P.I
              </a>{' '}
            </li>
          </ul>
        </div>
        <div className='footer-flex__item socials'>
          <ul>
            <li className='footer-icon'>
              <a
                href='https://www.linkedin.com/in/sello-fotoyi-79132672/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon icon={faLinkedinIn} className='footer-icon' />
              </a>
            </li>
            <li className='footer-icon'>
              <a
                href='https://github.com/SelloFotoyi'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon icon={faGithub} className='footer-icon' />
              </a>
            </li>
            {/* <li className='footer-icon'>
              <a href='' target='_blank' rel='noopener noreferrer'></a>
              <FontAwesomeIcon icon={faTwitter} className='footer-icon' />
            </li> */}
          </ul>
        </div>
      </div>
      <p>&copy; Sello Fotoyi | 2021</p>
    </footer>
  );
};

export default Footer;
