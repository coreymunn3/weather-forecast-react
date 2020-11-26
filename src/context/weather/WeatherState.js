import React, { useReducer } from 'react';
import axios from 'axios';
import WeatherContext from './weatherContext';
import weatherReducer from './weatherReducer';

const WeatherState = (props) => {
  const initialState = {
    location: {
      name: 'Washington',
      region: 'District of Columbia',
    },
    currentWeather: {
      temp_f: null,
    },
    forecastWeather: null,
    alert: null,
    background: null,
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(weatherReducer, initialState);

  // key
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  // actions & methods
  const setLoading = () => {
    dispatch({
      type: 'SET_LOADING',
    });
  };

  // get weather from api
  const getWeather = async (location) => {
    try {
      setLoading();
      const res = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=3`
      );
      console.log(
        `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=3`
      );
      dispatch({
        type: 'GET_WEATHER',
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: 'WEATHER_ERROR',
        payload: error.message,
      });
    }
  };

  const setLocation = (city, state) => {
    dispatch({
      type: 'SET_LOCATION',
      payload: {
        name: city,
        region: state,
      },
    });
  };

  // return the provider
  return (
    <WeatherContext.Provider
      value={{
        location: state.location,
        currentWeather: state.currentWeather,
        forecastWeather: state.forecastWeather,
        alert: state.alert,
        background: state.background,
        loading: state.loading,
        error: state.error,
        setLoading,
        getWeather,
        setLocation,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
