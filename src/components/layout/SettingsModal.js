import React, { useState, useContext } from 'react';
import weatherContext from '../../context/weather/weatherContext';

const SettingsModal = ({ modalActive, toggleModal }) => {
  // global state
  const {
    location: { name, region },
    setLocation,
    getWeather,
  } = useContext(weatherContext);
  // local state
  const [city, setCity] = useState(name);
  const [state, setState] = useState(region);

  const handleSubmit = async () => {
    // set new location
    setLocation(city, state);
    // pull weather data for new location
    const locationFull = `${city} ${state}`;
    await getWeather(locationFull);
    // close the modal
    toggleModal(!modalActive);
  };

  return (
    <div className='container'>
      <div className={`modal ${modalActive ? 'is-active' : ''}`}>
        <div className='modal-background'></div>
        <div className='modal-content'>
          <div className='box'>
            <h2 className='title is-4 has-text-black has-text-centered'>
              Settings
            </h2>

            <div className='field is-horizontal'>
              <div className='field-label'>
                <label className='label'>City</label>
              </div>
              <div className='field-body'>
                <div className='field'>
                  <p className='control is-expanded'>
                    <input
                      className='input is-small'
                      type='text'
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className='field is-horizontal'>
              <div className='field-label'>
                <label className='label'>State</label>
              </div>
              <div className='field-body'>
                <div className='field'>
                  <p className='control is-expanded'>
                    <input
                      className='input is-small'
                      type='text'
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    />
                  </p>
                </div>
              </div>
            </div>
            {/* <div className='field is-horizontal'>
              <div className='field-label is-small'>
                <label className='label'>Measurements</label>
              </div>
              <div className='field-body'>
                <div className='field is-narrow'>
                  <p className='control'>
                    <label className='radio'>
                      <input type='radio' name='measurement' /> Imperial
                    </label>
                    <label className='radio'>
                      <input type='radio' name='measurement' /> Metric
                    </label>
                  </p>
                </div>
              </div>
            </div> */}
            <div className='field is-horizontal'>
              <div className='field-label is-small'></div>
              <div className='field-body'>
                <div className='field'>
                  <p className='control'>
                    <button
                      className='button is-primary is-small is-fullwidth'
                      onClick={() => handleSubmit()}
                    >
                      Save
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className='modal-close is-large'
          aria-label='close'
          onClick={toggleModal}
        ></button>
      </div>
    </div>
  );
};

export default SettingsModal;
