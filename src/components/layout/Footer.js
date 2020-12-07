import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='content has-text-centered'>
        <p>
          {'Forecaster created by '}
          <strong>Corey Munn</strong> &copy; 2020
        </p>
        <Link to='/about'>About this App</Link>
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
