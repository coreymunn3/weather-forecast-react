import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// state
import weatherContext from '../../context/weather/weatherContext';

const Header = () => {
  const { location } = useContext(weatherContext);
  return (
    <nav
      className='navbar is-transparent'
      role='navigation'
      aria-label='main navigation'
    >
      <div className='navbar-brand'>
        <a className='navbar-item' href='/#'>
          <span className='icon'>
            <i className='fas fa-cloud-sun fa-2x'></i>
          </span>
        </a>

        <a
          href='/#'
          role='button'
          className='navbar-burger burger is-active'
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>

      <div id='navbarBasicExample' className='navbar-menu is-active'>
        <div className='navbar-start'>
          <Link className='navbar-item' to='/'>
            Home
          </Link>
          <Link className='navbar-item' to='/guide'>
            How To
          </Link>
          <Link className='navbar-item' to='/about'>
            About
          </Link>
        </div>

        <div className='navbar-end'>
          <div className='navbar-item'>
            <div className='buttons'>
              <button className='button is-primary is-rounded'>
                <span className='icon'>
                  <i className='fas fa-cog'></i>
                </span>
                <span>{location}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
