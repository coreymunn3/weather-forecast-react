import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DayJS from 'react-dayjs';
import Skeleton from 'react-loading-skeleton';
// state
import weatherContext from '../../context/weather/weatherContext';

const Header = () => {
  const { currentWeather, loading } = useContext(weatherContext);

  if (loading) {
    return <Skeleton height={52} />;
  }
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

      <div className='navbar-menu'>
        <div className='navbar-start'>
          <Link className='navbar-item' to='/about'>
            About
          </Link>
        </div>

        <div className='navbar-end'>
          <div className='navbar-item has-text-primary'>
            <DayJS
              element='span'
              format='hh:mm A'
              date={currentWeather.last_updated}
            ></DayJS>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
