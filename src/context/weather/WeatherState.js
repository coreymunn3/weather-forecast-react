import React, { useReducer } from 'react';
import axios from 'axios';
import WeatherContext from './weatherContext';
import weatherReducer from './weatherReducer';
import {
  SET_LOADING,
  GET_WEATHER,
  WEATHER_ERROR,
  SET_LOCATION,
  SET_LAT_LON,
  SHOW_CHART,
  CLEAR_CHART,
  SET_CHART_DATA,
} from '../types.js';

const WeatherState = (props) => {
  const initialState = {
    location: {
      latlon: {
        lat: null,
        lon: null,
      },
      citystate: {
        name: 'New York',
        region: 'New York',
      },
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
      chanceRain: null,
      chanceSnow: null,
    },
    alert: {
      event: null,
      expires: null,
    },
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(weatherReducer, initialState);

  // keys
  const WEATHER_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const GEOCODING_KEY = process.env.REACT_APP_GEOCODING_API_KEY;

  // actions & methods
  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };

  // get weather from api
  const getWeather = async (location) => {
    try {
      setLoading();
      const res = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_KEY}&q=${location}&days=3`
      );
      dispatch({
        type: GET_WEATHER,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: WEATHER_ERROR,
        payload: error.message,
      });
    }
  };

  // reverse geocode the latitude and longitude
  const getCityStateFromLatLon = async (lat, lon) => {
    try {
      const { data } = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${GEOCODING_KEY}`
      );
      // pull out name and region
      const name = data.results[0].address_components[3].long_name;
      const region = data.results[0].address_components[4].long_name;

      dispatch({
        type: SET_LOCATION,
        payload: {
          name,
          region,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setLocation = (city, state) => {
    dispatch({
      type: SET_LOCATION,
      payload: {
        name: city,
        region: state,
      },
    });
  };

  const setLatLon = (lat, lon) => {
    dispatch({
      type: SET_LAT_LON,
      payload: {
        lat,
        lon,
      },
    });
  };

  const showChart = () => {
    dispatch({
      type: SHOW_CHART,
    });
  };

  const clearChart = () => {
    dispatch({
      type: CLEAR_CHART,
    });
  };

  const setChartData = (date, data, chanceRain, chanceSnow) => {
    dispatch({
      type: SET_CHART_DATA,
      payload: {
        date,
        data,
        chanceRain: parseInt(chanceRain) > 0 ? true : false,
        chanceSnow: parseInt(chanceSnow) > 0 ? true : false,
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
        getCityStateFromLatLon,
        setLocation,
        setLatLon,
        showChart,
        clearChart,
        setChartData,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
