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
    case 'SHOW_CHART':
      return {
        ...state,
        chartWeather: {
          ...state.chartWeather,
          visible: true,
        },
      };
    case 'CLEAR_CHART':
      return {
        ...state,
        chartWeather: {
          ...state.chartWeather,
          visible: false,
          chartDate: null,
          chartData: null,
          willRain: 0,
          willSnow: 0,
        },
      };
    case 'SET_CHART_DATA':
      return {
        ...state,
        chartWeather: {
          ...state.chartWeather,
          chartDate: action.payload.date,
          chartData: action.payload.data,
          willRain: action.payload.willRain,
          willSnow: action.payload.willSnow,
        },
      };
    default:
      return state;
  }
};
