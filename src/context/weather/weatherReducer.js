export default (state, action) => {
  switch (action.type) {
    case 'GET_WEATHER':
      return {
        ...state,
        currentWeather: action.payload.current,
        forecastWeather: action.payload.forecast,
        alert: action.payload.alert,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'SET_LOCATION':
      return {
        ...state,
        location: action.payload,
      };
    case 'WEATHER_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
