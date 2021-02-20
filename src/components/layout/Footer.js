import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  return (
    <footer className='footer'>
      <div className='content has-text-centered'>
        <p>
          {'Forecaster created by '}
          <strong>Corey</strong> &copy; 2021
        </p>
        {location.pathname === '/' && <Link to='/about'>About this App</Link>}
        <p>
          <a href='https://github.com/coreymunn3' target='_blank'>
            Corey's Github
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
