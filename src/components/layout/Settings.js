import React from 'react';

const Settings = ({ toggleModal }) => {
  return (
    <div className='settings'>
      <span className='icon has-text-dark'>
        <i className='fas fa-cog fa-2x' onClick={toggleModal}></i>
      </span>
    </div>
  );
};

export default Settings;
