import React, { useContext } from 'react';
import Skeleton from 'react-loading-skeleton';
import weatherContext from '../../context/weather/weatherContext';
// components
import ForecastItem from './ForecastItem';
// styles
import styles from './Forecast.module.scss';

const Forecast = () => {
  // global state
  const {
    forecastWeather: { forecastday },
    loading,
  } = useContext(weatherContext);

  // HOW TO RENDER SKELETON IF ELEMENT DIMENSIONS UNKNOWN?
  // if (loading) {
  //   return (
  //     <section className='section'>
  //       <div className={styles.forecastContainer}>
  //         <Skeleton height={50} width={200} />
  //         <Skeleton height={50} width={200} />
  //         <Skeleton height={50} width={200} />
  //       </div>
  //     </section>
  //   );
  // }
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
