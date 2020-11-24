import React from 'react';

const SettingsModal = ({ modalActive, toggleModal }) => {
  return (
    <div className={`modal ${modalActive ? 'is-active' : ''}`}>
      <div className='modal-background'></div>
      <div className='modal-content'>
        <div className='box'>
          <h2>Test</h2>
        </div>
      </div>
      <button
        className='modal-close is-large'
        aria-label='close'
        onClick={toggleModal}
      ></button>
    </div>
  );
};

export default SettingsModal;
