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
      <div className='footer-grid'>
        <div className='footer-grid__item'>
          <ul>
            <span>Explore</span>
            <li>Unit converter</li>
            <li>Food Jokes</li>
            <li>A.P.I</li>
          </ul>
        </div>
        <div className='footer-grid__item'>
          <ul>
            <span>Info</span>
            <li>Site's author</li>
            <li>Github</li>
          </ul>
        </div>
        <div className='footer-grid__item socials'>
          <span>Socials</span>
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
