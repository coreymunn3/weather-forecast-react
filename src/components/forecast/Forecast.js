import React, { useContext, useEffect, useState } from 'react';
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
    chartWeather: { visible },
    loading,
  } = useContext(weatherContext);

  // finding the width of the forecast container
  // via https://usehooks.com/useWindowSize
  const [forecastWidth, setForecastWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      const forecastContainer = document.getElementById('forecast-container');
      setForecastWidth(forecastContainer.clientWidth);
    };
    // set event listener on window and call function
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className='section'>
      <div id='forecast-container' className={styles.forecastContainer}>
        {/* {loading && (
          TODO: Render 3 skeleton cards
        )} */}
        {!loading &&
          forecastday.map((forecast, idx) => (
            <ForecastItem key={idx} forecast={forecast} />
          ))}
      </div>
      {visible && <ForecastChart width={forecastWidth} />}
    </section>
  );
};

export default Forecast;
