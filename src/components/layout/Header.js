import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DayJS from 'react-dayjs';
import Skeleton from 'react-loading-skeleton';
// util function
import { findNavbarBrandIcon } from '../../utils/utilFunctions';
// state
import weatherContext from '../../context/weather/weatherContext';

const Header = () => {
  // global state
  const {
    currentWeather: { condition, is_day, last_updated },
    loading,
  } = useContext(weatherContext);

  // get correct icon for navbar-brand
  const iconClass = findNavbarBrandIcon(condition.code, is_day);

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
            <i className={`${iconClass} fa-2x`}></i>
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
            <DayJS element='span' format='hh:mm A' date={last_updated}></DayJS>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
