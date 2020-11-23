import React, { useReducer } from 'react';
import axios from 'axios';
import WeatherContext from './weatherContext';
import weatherReducer from './weatherReducer';

const WeatherState = (props) => {
  const initialState = {
    location: 'Washington, DC',
    currentWeather: {
      last_updated_epoch: 1606138209,
      last_updated: '2020-11-23 08:30',
      temp_c: 13,
      temp_f: 55.4,
      is_day: 0,
      condition: {
        text: 'Light rain',
        icon: '//cdn.weatherapi.com/weather/64x64/night/296.png',
        code: 1183,
      },
      wind_mph: 4.3,
      wind_kph: 6.8,
      wind_degree: 270,
      wind_dir: 'W',
      pressure_mb: 1012,
      pressure_in: 30.4,
      precip_mm: 1,
      precip_in: 0.04,
      humidity: 88,
      cloud: 100,
      feelslike_c: 11.1,
      feelslike_f: 52,
      vis_km: 6.4,
      vis_miles: 3,
      uv: 1,
      gust_mph: 21.9,
      gust_kph: 35.3,
    },
    forecastWeather: null,
    background: null,
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(weatherReducer, initialState);

  // actions & methods

  return (
    <WeatherContext.Provider
      value={{
        location: state.location,
        currentWeather: state.currentWeather,
        forecastWeather: state.forecastWeather,
        background: state.background,
        loading: state.loading,
        error: state.error,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
