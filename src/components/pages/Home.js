import React, { useContext, useEffect, Fragment } from 'react';
// components
import CurrentWeather from '../currentWeather/CurrentWeather';
import Forecast from '../forecast/Forecast';
// state
import weatherContext from '../../context/weather/weatherContext';

const Home = () => {
  const { location, getWeather } = useContext(weatherContext);
  // add weather data to state
  useEffect(() => {
    const locationFull = `${location.name} ${location.region}`;
    const getData = async () => {
      await getWeather(locationFull);
    };
    getData();
  }, []);

  return (
    <Fragment>
      <CurrentWeather />
      <Forecast />
    </Fragment>
  );
};

export default Home;
