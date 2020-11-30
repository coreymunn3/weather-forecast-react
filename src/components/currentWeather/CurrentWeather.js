import React, { useContext, useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import weatherContext from '../../context/weather/weatherContext';
import imageContext from '../../context/image/imageContext';
// components
import Settings from '../layout/Settings';
import SettingsModal from '../layout/SettingsModal';
// styles
import { weatherHelper, helperItem } from './CurrentWeather.module.scss';

const CurrentWeather = () => {
  // global weather state from context
  const {
    location: { name, region },
    currentWeather: {
      temp_f,
      wind_mph,
      wind_dir,
      humidity,
      feelslike_f,
      condition,
    },
    loading,
  } = useContext(weatherContext);

  // global image state from context
  const { getCurrentWeatherImage } = useContext(imageContext);
  // get current weather image when condition is updated
  useEffect(() => {
    if (condition.code !== null) {
      getCurrentWeatherImage(condition.code);
    }
  }, [condition]);

  // modal state
  const [modalActive, setModalActive] = useState(false);
  const toggleModal = () => {
    setModalActive(!modalActive);
  };

  // storing height of element for skeleton render
  const [skelHeight, setSkelHeight] = useState(0);
  // get height of element on render
  useEffect(() => {
    const height = document.querySelector('.hero').clientHeight;
    const TEMP_F_HEIGHT = 54;
    setSkelHeight(height + TEMP_F_HEIGHT);
  }, []);

  if (loading) {
    return <Skeleton height={skelHeight} />;
  }
  return (
    <section className='hero is-primary is-bold'>
      <Settings toggleModal={toggleModal} />
      <SettingsModal modalActive={modalActive} toggleModal={toggleModal} />
      <div className='hero-body'>
        <div className='container has-text-centered'>
          <h2 className='subtitle is-3'>{`${name.toUpperCase()}, ${region.toUpperCase()}`}</h2>
          <h1 className='title is-1'>{temp_f}</h1>
          <p>Degrees Farenheit</p>
        </div>
      </div>
      <div className={weatherHelper}>
        <div className={helperItem}>
          <span className='icon'>
            <i className='fas fa-thermometer-half fa-2x'></i>
          </span>
          <h3>{`${feelslike_f}F`}</h3>
          <p>Real Feel</p>
        </div>
        <div className={helperItem}>
          <span className='icon'>
            <i className='fas fa-tint fa-2x'></i>
          </span>
          <h3>{`${humidity}%`}</h3>
          <p>Humidity pct</p>
        </div>
        <div className={helperItem}>
          <span className='icon'>
            <i className='fas fa-wind fa-2x'></i>
          </span>
          <h3>{`${wind_mph}`}</h3>
          <p>Wind MPH</p>
        </div>
        <div className={helperItem}>
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
