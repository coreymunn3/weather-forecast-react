import React, { useReducer } from 'react';
import axios from 'axios';
import ImageContext from './imageContext';
import imageReducer from './imageReducer';

const ImageState = (props) => {
  const initialState = {
    currentWeatherImage: null,
    // forecastWeatherImages: {},
    error: null,
    currentLoading: true,
    // forecastLoading: true,
  };

  const [state, dispatch] = useReducer(imageReducer, initialState);

  // key
  const UNPLASH_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;

  // actions and methods
  const findCollection = (conditionCode) => {
    // find a collection# based on code
    switch (conditionCode) {
      // sunny, clear
      case 1000:
        return 68223510;
      // partly cloudy
      case 1003:
        return 58866475;
      // overcase, cloudy
      case 1006:
      case 1009:
        return 65178082;
      // fog or mist
      case 1030:
      case 1135:
      case 1147:
        return 15736379;
      // some amount of rain
      case 1063:
      case 1150:
      case 1153:
      case 1180:
      case 1183:
      case 1186:
      case 1189:
      case 1192:
      case 1195:
      case 1240:
      case 1243:
      case 1246:
        return 66597772;
      // some amount of snow or ice
      case 1066:
      case 1114:
      case 1117:
      case 1210:
      case 1213:
      case 1216:
      case 1219:
      case 1222:
      case 1225:
      case 1237:
      case 1255:
      case 1258:
      case 1261:
      case 1264:
      case 1279:
      case 1282:
        return 81710044;
      // thunderstorms
      case 1087:
      case 1273:
      case 1276:
        return 71933097;
      // freezing rain of some kind
      case 1069:
      case 1072:
      case 1168:
      case 1171:
      case 1198:
      case 1201:
      case 1204:
      case 1207:
      case 1249:
      case 1252:
        return 72943586;
      default:
        return 68223510;
    }
  };

  const setLoading = (loadingType) => {
    if (loadingType === 'current') {
      dispatch({
        type: 'SET_CURRENT_LOADING',
      });
    } else if (loadingType === 'forecast') {
      dispatch({
        type: 'SET_FORECAST_LOADING',
      });
    }
  };

  const getCurrentWeatherImage = async (conditionCode) => {
    // create URL based on weather conditions
    const collection = findCollection(conditionCode);
    // get image
    try {
      setLoading('current');
      const res = await axios.get(
        `https://api.unsplash.com/photos/random?client_id=${UNPLASH_KEY}&collections=${collection}`
      );
      dispatch({
        type: 'SET_CURRENTWEATHERIMAGE',
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: 'WEATHER_ERROR',
        payload: error,
      });
    }
  };

  // set all forecast images together in one go
  // const getForecastWeatherImages = async (forecastday) => {
  //   try {
  //     setLoading('forecast');
  //     let imageUrls = {};
  //     // day in forecastday, find collecton & make request
  //     forecastday.forEach(async (day) => {
  //       // build and request URL based on the day code
  //       const conditionCode = day.day.condition.code;
  //       const collection = findCollection(conditionCode);
  //       const res = await axios.get(
  //         `https://api.unsplash.com/photos/random?client_id=${UNPLASH_KEY}&collections=${collection}`
  //       );
  //       // add to dispatch object
  //       imageUrls[day.date] = res.data.urls;
  //     });
  //     // dispatch url object
  //     dispatch({
  //       type: 'SET_FORECASTWEATHERIMAGES',
  //       payload: imageUrls,
  //     });
  //   } catch (error) {
  //     dispatch({
  //       type: 'IMAGE_ERROR',
  //       payload: error,
  //     });
  //   }
  // };

  // set single forecast image
  const getForecastWeatherImage = async (conditionCode) => {
    try {
      const collection = findCollection(conditionCode);
      const res = await axios.get(
        `https://api.unsplash.com/photos/random?client_id=${UNPLASH_KEY}&collections=${collection}`
      );
      return res.data.urls.regular;
    } catch (error) {
      console.error(error);
    }
  };

  // return the provider
  return (
    <ImageContext.Provider
      value={{
        currentWeatherImage: state.currentWeatherImage,
        // forecastWeatherImages: state.forecastWeatherImages,
        error: state.error,
        currentLoading: state.currentLoading,
        // forecastLoading: state.forecastLoading,
        getCurrentWeatherImage,
        getForecastWeatherImage,
      }}
    >
      {props.children}
    </ImageContext.Provider>
  );
};

export default ImageState;
