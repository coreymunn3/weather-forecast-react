import React, { useContext, useEffect } from 'react';
import weatherContext from '../../context/weather/weatherContext';
// import imageContext from '../../context/image/imageContext';
// components
import ForecastItem from './ForecastItem';
// styles
import styles from './Forecast.module.scss';

const Forecast = () => {
  // global weather state
  const {
    forecastWeather: { forecastday },
  } = useContext(weatherContext);

  // global image state
  // const { getForecastWeatherImages } = useContext(imageContext);

  // call unsplash API and load forecast images into state
  // useEffect(() => {
  //   const getImages = async () => {
  //     await getForecastWeatherImages(forecastday);
  //   };
  //   getImages();
  // }, [forecastday]);

  return (
    <section className='section'>
      <div className={styles.forecastContainer}>
        {forecastday.map((forecast, idx) => (
          <ForecastItem forecast={forecast} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default Forecast;
