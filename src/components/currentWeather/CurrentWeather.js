import React, { useContext, useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import weatherContext from '../../context/weather/weatherContext';
// components
import Settings from '../layout/Settings';
import SettingsModal from '../layout/SettingsModal';

const CurrentWeather = () => {
  // global state from context
  const {
    location: { name, region },
    currentWeather: { temp_f, wind_mph, wind_dir, humidity, feelslike_f },
    loading,
  } = useContext(weatherContext);

  // modal state
  const [modalActive, setModalActive] = useState(false);
  // storing height of element for skeleton render
  const [height, setHeight] = useState(0);

  const toggleModal = () => {
    setModalActive(!modalActive);
  };

  // get height of element on render
  useEffect(() => {
    const skelHeight = document.querySelector('.hero').clientHeight;
    setHeight(skelHeight);
  }, []);

  if (loading) {
    // find height of hero to render proper skeleton

    return <Skeleton height={height + 54} />;
  }
  return (
    <section className='hero is-primary is-medium is-bold'>
      <Settings toggleModal={toggleModal} />
      <SettingsModal modalActive={modalActive} toggleModal={toggleModal} />
      <div className='hero-body'>
        <div className='container has-text-centered'>
          <h2 className='subtitle is-3'>{`${name.toUpperCase()}, ${region.toUpperCase()}`}</h2>
          <h1 className='title is-1'>{temp_f}</h1>
          <h2 className='subtitle'>Degrees Farenheit</h2>
        </div>
      </div>
      <div className='weather-helper'>
        <div className='helper-item'>
          <span className='icon'>
            <i className='fas fa-thermometer-half fa-2x'></i>
          </span>
          <h3>{`${feelslike_f}F`}</h3>
          <p>Real Feel</p>
        </div>
        <div className='helper-item'>
          <span className='icon'>
            <i className='fas fa-tint fa-2x'></i>
          </span>
          <h3>{`${humidity}%`}</h3>
          <p>Humidity pct</p>
        </div>
        <div className='helper-item'>
          <span className='icon'>
            <i className='fas fa-wind fa-2x'></i>
          </span>
          <h3>{`${wind_mph}`}</h3>
          <p>Wind MPH</p>
        </div>
        <div className='helper-item'>
          <span className='icon'>
            <i className='fas fa-compass fa-2x'></i>
          </span>
          <h3>{wind_dir}</h3>
          <p>Wind Direction</p>
        </div>
      </div>
    </section>
  );
};

export default CurrentWeather;
