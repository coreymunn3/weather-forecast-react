import React, { useContext, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import weatherContext from '../../context/weather/weatherContext';
// import imageContext from '../../context/image/imageContext';
// components
import ForecastItem from './ForecastItem';
import ForecastChart from './ForecastChart';
// styles
import styles from './Forecast.module.scss';

const Forecast = () => {
  // global weather state
  const {
    forecastWeather: { forecastday },
    loading,
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
        {/* {loading && (
          TODO: Render 3 skeleton cards
        )} */}
        {!loading &&
          forecastday.map((forecast, idx) => (
            <ForecastItem forecast={forecast} key={idx} loading={loading} />
          ))}
      </div>
      <ForecastChart />
    </section>
  );
};

export default Forecast;
