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
            <li>Food Trivia</li>
            <li>Food Jokes</li>
          </ul>
        </div>
        <div className='footer-flex__item'>
          <ul>
            <span>Info</span>
            <li>Author</li>
            <li>Github</li>
            <li>A.P.I</li>
          </ul>
        </div>
        <div className='footer-flex__item socials'>
          <ul>
            <li className='footer-icon'>
              <FontAwesomeIcon icon={faLinkedinIn} className='footer-icon' />
            </li>
            <li className='footer-icon'>
              <FontAwesomeIcon icon={faGithub} className='footer-icon' />
            </li>
            <li className='footer-icon'>
              <FontAwesomeIcon icon={faTwitter} className='footer-icon' />
            </li>
          </ul>
        </div>
      </div>
      <p>&copy; Sello Fotoyi | 2021</p>
    </footer>
  );
};

export default Footer;
