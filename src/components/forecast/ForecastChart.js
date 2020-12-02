import React, { useContext } from 'react';
import {
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from 'recharts';
// context
import weatherContext from '../../context/weather/weatherContext';

const ForecastChart = () => {
  const {
    chartWeather: { chartData, chartDate, visible },
  } = useContext(weatherContext);

  // TODO: find width of container for chart size

  return (
    <React.Fragment>
      <h3 className='subtitle has-text-centered'>{chartDate}</h3>
      <ComposedChart height={150} width={327} data={chartData}>
        <CartesianGrid stroke='#f5f5f5' />
        <XAxis dataKey='time' />
        <YAxis />
        <Legend />
        <Area type='monotone' dataKey='temp_f' fill='#333' stroke='#333' />
        <Bar dataKey='chance_of_rain' fill='#413ea0' />
      </ComposedChart>
    </React.Fragment>
  );
};

export default ForecastChart;
