import React from 'react';
// components
import CurrentWeather from '../currentWeather/CurrentWeather';
import Forecast from '../forecast/Forecast';

const Home = () => {
  return (
    <div>
      <CurrentWeather />
      <Forecast />
    </div>
  );
};

export default Home;
