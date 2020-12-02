import React, { useContext } from 'react';
import {
  ComposedChart,
  LineChart,
  AreaChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import PropTypes from 'prop-types';
// context
import weatherContext from '../../context/weather/weatherContext';

const ForecastChart = ({ width }) => {
  const {
    chartWeather: { chartData, chartDate },
  } = useContext(weatherContext);

  const chartDataAdjusted = chartData.map((hour) => {
    return {
      hour: hour.time.substring(hour.time.length - 5),
      is_day: hour.is_day,
      temp: hour.temp_f,
      rainChance: hour.chance_of_rain,
      snowChance: hour.chance_of_snow,
    };
  });

  console.log(chartDataAdjusted);

  return (
    <React.Fragment>
      {/* <ComposedChart height={150} width={width} data={chartData}>
        <CartesianGrid stroke='#f5f5f5' />
        <XAxis dataKey='time' />
        <YAxis />
        <Legend />
        <Area type='monotone' dataKey='temp_f' fill='#333' stroke='#333' />
        <Bar dataKey='chance_of_rain' fill='#413ea0' />
      </ComposedChart> */}
      <AreaChart
        width={width}
        height={width > 650 ? 400 : 200}
        data={chartDataAdjusted}
      >
        <defs>
          <linearGradient id='colorTemps' x1='0' x2='0' y1='0' y2='1'>
            <stop offset='5%' stopColor='#ffcd45' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#ffcd45' stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey='hour' interval={3} angle={45} />
        <CartesianGrid strokeDasharray='1 1' />
        <Tooltip />
        <Area
          type='monotone'
          dataKey='temp'
          stroke='#ffcd45'
          fill='url(#colorTemps)'
        />
      </AreaChart>
    </React.Fragment>
  );
};

ForecastChart.propTypes = {
  width: PropTypes.number.isRequired,
};

export default ForecastChart;
