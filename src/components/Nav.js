import React, {useState} from 'react';
import SearchForm from './SearchForm';
import {Link} from 'react-router-dom';

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
        <Link to='/' className='mobile-nav-bar__logo'>
          RM
        </Link>
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
            <Link to='/' className='nav__menu__item__link logo'>
              RM
            </Link>
          </li>
          <li className='nav__menu__item'>
            <Link to='/' className='nav__menu__item__link active'>
              Home
            </Link>
          </li>
          <li className='nav__menu__item'>
            <Link to='/menu' className='nav__menu__item__link'>
              Menu
            </Link>
          </li>
          <li className='nav__menu__item'>
            <Link to='/search-plus' className='nav__menu__item__link'>
              Search+
            </Link>
          </li>
          <li className='nav__menu__item'>
            <Link to='/join' className='nav__menu__item__link'>
              Join
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
