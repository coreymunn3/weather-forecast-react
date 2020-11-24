import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DayJS from 'react-dayjs';
// state
import weatherContext from '../../context/weather/weatherContext';

const Header = () => {
  const { currentWeather } = useContext(weatherContext);

  return (
    <nav
      className='navbar is-dark'
      role='navigation'
      aria-label='main navigation'
    >
      <div className='navbar-brand'>
        <a className='navbar-item' href='/#'>
          <span className='icon'>
            <i className='fas fa-cloud-sun fa-2x'></i>
          </span>
        </a>
      </div>

      <div className='navbar-menu is-active'>
        <div className='navbar-start'>
          <Link className='navbar-item' to='/'>
            Home
          </Link>
          <Link className='navbar-item' to='/about'>
            About
          </Link>
        </div>

        <div className='navbar-end'>
          <div className='navbar-item'>
            <span>As Of</span>
            <DayJS
              element='span'
              format='MM-DD-YY HH:MM'
              date={currentWeather.last_updated}
            ></DayJS>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
