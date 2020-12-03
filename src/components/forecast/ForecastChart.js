import React, { useContext } from 'react';
import dayjs from 'dayjs';
import {
  BarChart,
  AreaChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import PropTypes from 'prop-types';
import styles from './ForecastChart.module.scss';
// context
import weatherContext from '../../context/weather/weatherContext';

const ForecastChart = ({ width }) => {
  const {
    chartWeather: { chartData, chartDate, willRain, willSnow },
    clearChart,
  } = useContext(weatherContext);

  // transpose data for better labels
  const chartDataAdjusted = chartData.map((hour) => {
    return {
      hour: hour.time.substring(hour.time.length - 5),
      is_day: hour.is_day,
      temp: hour.temp_f,
      rainChance: hour.chance_of_rain,
      snowChance: hour.chance_of_snow,
    };
  });

  // find height based on width
  const height = width > 650 ? 300 : 200;
  // create date text for titles
  const titleDate = dayjs(chartDate).format('dddd');
  console.log(titleDate);
  // chart variables
  const axisStroke = '#c2c2c2';

  return (
    <div className={styles.chartsContainer}>
      <div className={styles.control}>
        <button className='delete' onClick={() => clearChart()}></button>
      </div>
      <div className={styles.chart}>
        <h2>Temperatures on {titleDate}</h2>
        <AreaChart width={width} height={height} data={chartDataAdjusted}>
          <defs>
            <linearGradient id='colorTemps' x1='0' x2='0' y1='0' y2='1'>
              <stop offset='5%' stopColor='#ffcd45' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#ffcd45' stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            stroke={axisStroke}
            dataKey='hour'
            interval={3}
            angle={45}
            height={40}
            textAnchor='start'
          />
          <YAxis
            stroke={axisStroke}
            width={40}
            axisLine={false}
            tickSize={0}
            type='number'
            domain={['dataMin-10', 'dataMax+10']}
            allowDecimals={false}
            interval='preserveStartEnd'
          />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='temp'
            stroke='#ffcd45'
            fill='url(#colorTemps)'
          />
        </AreaChart>
      </div>
      {willRain && (
        <div className={styles.chart}>
          <h2>Rain on {titleDate}</h2>
          <BarChart width={width} height={height} data={chartDataAdjusted}>
            <XAxis
              stroke={axisStroke}
              dataKey='hour'
              interval={3}
              angle={45}
              height={40}
              textAnchor='start'
            />
            <YAxis
              stroke={axisStroke}
              width={40}
              axisLine={false}
              tickSize={0}
              type='number'
              domain={[0, 100]}
              allowDecimals={false}
              interval='preserveStartEnd'
            />
            <Tooltip />
            <Bar dataKey='rainChance' fill='#4792ed' />
          </BarChart>
        </div>
      )}
      {willSnow && (
        <div className={styles.chart}>
          <h2>Snow on {titleDate}</h2>
          <BarChart width={width} height={height} data={chartDataAdjusted}>
            <XAxis
              stroke={axisStroke}
              dataKey='hour'
              interval={3}
              angle={45}
              height={40}
              textAnchor='start'
            />
            <YAxis
              stroke={axisStroke}
              width={40}
              type='number'
              axisLine={false}
              tickSize={0}
              domain={[0, 100]}
              allowDecimals={false}
              interval='preserveStartEnd'
            />
            <Tooltip />
            <Bar dataKey='snowChance' fill='#4792ed' />
          </BarChart>
        </div>
      )}
    </div>
  );
};

ForecastChart.propTypes = {
  width: PropTypes.number.isRequired,
};

export default ForecastChart;
