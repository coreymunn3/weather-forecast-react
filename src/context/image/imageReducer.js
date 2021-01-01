import {
  SET_CURRENT_LOADING,
  SET_CURRENTWEATHERIMAGE,
  IMAGE_ERROR,
} from '../types.js';

const imageReducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENTWEATHERIMAGE:
      return {
        ...state,
        currentWeatherImage: action.payload.urls.raw,
        currentLoading: false,
      };
    case IMAGE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_CURRENT_LOADING:
      return {
        ...state,
        currentLoading: true,
      };
    default:
      return state;
  }
};
export default imageReducer;
