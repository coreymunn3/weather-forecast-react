const imageReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CURRENTWEATHERIMAGE':
      return {
        ...state,
        currentWeatherImage: action.payload.urls.raw,
        currentLoading: false,
      };
    case 'SET_FORECASTWEATHERIMAGES':
      return {
        ...state,
        forecastWeatherImages: action.payload,
        forecastLoading: false,
      };
    case 'IMAGE_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'SET_CURRENT_LOADING':
      return {
        ...state,
        currentLoading: true,
      };
    case 'SET_FORECAST_LOADING':
      return {
        ...state,
        forecastLoading: true,
      };
    default:
      return state;
  }
};
export default imageReducer;
