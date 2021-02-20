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

export default (state, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        currentWeather: action.payload.current,
        forecastWeather: action.payload.forecast,
        alert: action.payload.alerts,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_LOCATION:
      return {
        ...state,
        location: {
          ...state.location,
          citystate: action.payload,
        },
      };
    case SET_LAT_LON:
      return {
        ...state,
        location: {
          ...state.location,
          latlon: action.payload,
        },
      };
    case WEATHER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SHOW_CHART:
      return {
        ...state,
        chartWeather: {
          ...state.chartWeather,
          visible: true,
        },
      };
    case CLEAR_CHART:
      return {
        ...state,
        chartWeather: {
          ...state.chartWeather,
          visible: false,
          chartDate: null,
          chartData: null,
          chanceRain: 0,
          chanceSnow: 0,
        },
      };
    case SET_CHART_DATA:
      return {
        ...state,
        chartWeather: {
          ...state.chartWeather,
          chartDate: action.payload.date,
          chartData: action.payload.data,
          chanceRain: action.payload.chanceRain,
          chanceSnow: action.payload.chanceSnow,
        },
      };
    default:
      return state;
  }
};
