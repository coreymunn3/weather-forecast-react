import React, { useContext, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import weatherContext from '../../context/weather/weatherContext';
// components
import ForecastItem from './ForecastItem';
import ForecastChart from './ForecastChart';
// styles
import styles from './Forecast.module.scss';

const Forecast = () => {
  // global weather state
  const {
    forecastWeather: { forecastday },
    chartWeather: { visible, date, hours },
    loading,
  } = useContext(weatherContext);

  return (
    <section className='section'>
      <div className={styles.forecastContainer}>
        {/* {loading && (
          TODO: Render 3 skeleton cards
        )} */}
        {!loading &&
          forecastday.map((forecast, idx) => (
            <ForecastItem key={idx} forecast={forecast} />
          ))}
      </div>
      {visible && <ForecastChart />}
    </section>
  );
};

export default Forecast;
