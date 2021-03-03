import React, {useState} from 'react';

const Nav = ({mobileMenuOpen, setMobileMenuOpen}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div className='mobile-nav-bar home'>
        <div class='mobile-nav-bar__logo'>RM</div>
        <div
          class='menu-btn '
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span
            class={`menu-btn__burger ${mobileMenuOpen ? 'open' : ''}`}
          ></span>
        </div>
      </div>

      <nav class={`nav ${mobileMenuOpen ? 'open' : ''}`}>
        <ul class='nav__menu'>
          <li class='nav__menu__item'>
            <a href='#' class='nav__menu__item__link logo'>
              RM
            </a>
          </li>
          <li class='nav__menu__item'>
            <a href='./index.html' class='nav__menu__item__link active'>
              Home
            </a>
          </li>
          <li class='nav__menu__item'>
            <a href='./about.html' class='nav__menu__item__link'>
              Menu
            </a>
          </li>
          <li class='nav__menu__item'>
            <a href='./projects.html' class='nav__menu__item__link'>
              Search+
            </a>
          </li>
          <li class='nav__menu__item'>
            <a href='./contact.html' class='nav__menu__item__link'>
              Join
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
