import React, { useReducer } from 'react';
import axios from 'axios';
import weatherContext from './WeatherContext';
import weatherReducer from './weatherReducer';
// import types

const WeatherState = (props) => {
  // 1. initial state
  const initialState = {
    location: null,
    background: null,
    currentWeather: null,
    forecastWeather: null,
    historyWeather: null,
    weatherAlert: null,
    selectedDayWeather: null,
    error: null,
  };
  // 2. activate useReducer hook
  const { state, dispatch } = useReducer(weatherReducer, initialState);

  // pull out API key
  weatherApiKey = process.env.WEATHER_API_KEY;

  // 3. Methods
  const getCurrentAndForecast = async (location) => {
    try {
      const res = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${location}&days=3`
      );
      // dispatch
    } catch (error) {
      // error.response.msg
    }
  };

  // get historical

  // 4. Return the provider
  return (
    <weatherContext.Provider
      value={{
        location: state.location,
        currentWeather: state.currentWeather,
        forecastWeather: state.forecastWeather,
        historyWeather: state.historyWeather,
        weatherAlert: state.weatherAlert,
        selectedDayWeather: state.selectedDayWeather,
        error: state.error,
        getCurrentAndForecast,
      }}
    >
      {props.children}
    </weatherContext.Provider>
  );
};

export default WeatherState;
