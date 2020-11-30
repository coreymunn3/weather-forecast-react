const imageReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CURRENTWEATHERIMAGE':
      return {
        ...state,
        currentWeatherImage: action.payload.urls.raw,
      };
    case 'SET_FORECASTWEATHERIMAGES':
      return {
        ...state,
        forecastWeatherImages: action.payload,
      };
    case 'IMAGE_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default imageReducer;
