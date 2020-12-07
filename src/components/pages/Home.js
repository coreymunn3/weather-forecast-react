import React, { useContext, useEffect, Fragment } from 'react';
// components
import WeatherAlert from '../alert/WeatherAlert';
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
      <WeatherAlert />
      <CurrentWeather />
      <Forecast />
    </Fragment>
  );
};

export default Home;
