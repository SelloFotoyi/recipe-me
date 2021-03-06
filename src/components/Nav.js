import React, {useState} from 'react';
import SearchForm from './SearchForm';
import {Link, useLocation} from 'react-router-dom';

const Nav = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  navSearch,
  setNavSearch,
  setQuery,
}) => {
  const location = useLocation();
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (navSearch) {
      setNavSearch(!navSearch);
    }
  };

  return (
    <>
      <div className='mobile-nav-bar home'>
        <a href='/' className='mobile-nav-bar__logo'>
          RM
        </a>
        {navSearch && <SearchForm navSearch={navSearch} setQuery={setQuery} />}

        <div className='menu-btn ' onClick={toggleMobileMenu}>
          <span
            className={`menu-btn__burger ${mobileMenuOpen ? 'open' : ''}`}
          ></span>
        </div>
      </div>

      <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className='nav__menu'>
          <li className={`nav__menu__item`} onClick={toggleMobileMenu}>
            <a href='/' className='nav__menu__item__link logo'>
              RM
            </a>
          </li>
          {navSearch && (
            <SearchForm navSearch={navSearch} setQuery={setQuery} />
          )}
          <li className={`nav__menu__item `} onClick={toggleMobileMenu}>
            <a
              href='/'
              className={`nav__menu__item__link ${
                location.pathname === '/' ? 'active' : ''
              }`}
            >
              Home
            </a>
          </li>
          <li className='nav__menu__item' onClick={toggleMobileMenu}>
            <Link
              to='/menu'
              className={`nav__menu__item__link ${
                location.pathname === '/menu' ? 'active' : ''
              }`}
            >
              Menu
            </Link>
          </li>
          <li
            className={`nav__menu__item ${
              location.pathname === '/search-plus' ? 'active' : ''
            }`}
            onClick={toggleMobileMenu}
          >
            <Link
              to='/search-plus'
              className={`nav__menu__item__link ${
                location.pathname === '/search-plus' ? 'active' : ''
              }`}
            >
              Search+
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
