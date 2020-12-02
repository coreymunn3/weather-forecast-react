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
      condition: { code: null },
    },
    forecastWeather: {
      forecastday: [],
    },
    chartWeather: {
      visible: false,
      chartDate: null,
      chartData: null,
    },
    alert: null,
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(weatherReducer, initialState);

  // key
  const WEATHER_KEY = process.env.REACT_APP_WEATHER_API_KEY;

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
        `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_KEY}&q=${location}&days=3`
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

  const showChart = () => {
    dispatch({
      type: 'SHOW_CHART',
    });
  };

  const setChartData = (date, data) => {
    dispatch({
      type: 'SET_CHART_DATA',
      payload: {
        date,
        data,
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
        chartWeather: state.chartWeather,
        alert: state.alert,
        loading: state.loading,
        error: state.error,
        setLoading,
        getWeather,
        setLocation,
        showChart,
        setChartData,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
