import React, { useContext } from 'react';
import Skeleton from 'react-loading-skeleton';
import dayjs from 'dayjs';
// global state
import weatherContext from '../../context/weather/weatherContext';
// styles
import styles from './WeatherAlert.module.scss';

const WeatherAlert = () => {
  const { alert, loading } = useContext(weatherContext);

  console.log(typeof alert);
  console.log(Object.keys(alert).length);
  const alertIsEmpty = Object.keys(alert).length === 0;
  console.log(alertIsEmpty);
  if (!alertIsEmpty && loading) {
    return <Skeleton height={35} />;
  }
  return (
    !alertIsEmpty && (
      <div className={styles.alert}>
        {`${alert.event} - expires ${dayjs(alert.expires).format('MM/DD/YY')}`}
      </div>
    )
  );
};

export default WeatherAlert;
