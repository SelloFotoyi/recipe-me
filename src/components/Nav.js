import React, {useState} from 'react';
import SearchForm from './SearchForm';

const Nav = ({mobileMenuOpen, setMobileMenuOpen, navSearch, setNavSearch}) => {
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (navSearch) {
      setNavSearch(!navSearch);
    }
  };

  return (
    <>
      <div className='mobile-nav-bar home'>
        <div className='mobile-nav-bar__logo'>RM</div>
        {navSearch && <SearchForm navSearch={navSearch} />}

        <div className='menu-btn ' onClick={toggleMobileMenu}>
          <span
            className={`menu-btn__burger ${mobileMenuOpen ? 'open' : ''}`}
          ></span>
        </div>
      </div>

      <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className='nav__menu'>
          <li className='nav__menu__item'>
            <a href='#' className='nav__menu__item__link logo'>
              RM
            </a>
          </li>
          <li className='nav__menu__item'>
            <a href='./index.html' className='nav__menu__item__link active'>
              Home
            </a>
          </li>
          <li className='nav__menu__item'>
            <a href='./about.html' className='nav__menu__item__link'>
              Menu
            </a>
          </li>
          <li className='nav__menu__item'>
            <a href='./projects.html' className='nav__menu__item__link'>
              Search+
            </a>
          </li>
          <li className='nav__menu__item'>
            <a href='./contact.html' className='nav__menu__item__link'>
              Join
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
