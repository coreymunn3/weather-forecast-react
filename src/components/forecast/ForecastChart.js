import React, { useContext } from 'react';
import dayjs from 'dayjs';
import {
  ComposedChart,
  BarChart,
  Area,
  Bar,
  Line,
  XAxis,
  YAxis,
  ReferenceLine,
  Label,
  Legend,
  Tooltip,
} from 'recharts';
import PropTypes from 'prop-types';
import styles from './ForecastChart.module.scss';
// context
import weatherContext from '../../context/weather/weatherContext';

const ForecastChart = ({ width }) => {
  const {
    chartWeather: { chartData, chartDate, chanceRain, chanceSnow },
    clearChart,
  } = useContext(weatherContext);

  // transpose data for better labels
  const chartDataAdjusted = chartData.map((hour) => {
    return {
      hour: hour.time.substring(hour.time.length - 5),
      is_day: hour.is_day,
      temp: hour.temp_f,
      'feels like': hour.feelslike_f,
      'rain chance': hour.chance_of_rain,
      'snow chance': hour.chance_of_snow,
    };
  });
  // find height based on width
  const height = width > 650 ? 300 : 200;
  // find current hour for reference line
  const thisHour = dayjs(new Date()).format('HH:00');
  // determine if chart date is current day
  const isToday = dayjs(new Date()).format('YYYY-MM-DD') === chartDate;
  // create date text for titles
  const titleDate = dayjs(chartDate).format('dddd');
  // colors
  const axisStroke = '#c2c2c2';
  const referenceStroke = '#333';
  const tempColor = '#ffcd45';
  const feelsLikeColor = '#333';

  return (
    <div className={styles.chartsContainer}>
      <div className={styles.control}>
        <button className='delete' onClick={() => clearChart()}></button>
      </div>
      <div className={styles.chart}>
        <h2>Temperatures on {titleDate}</h2>
        <ComposedChart
          width={width}
          height={height + 20}
          data={chartDataAdjusted}
        >
          <Legend verticalAlign='top' />
          <defs>
            <linearGradient id='colorTemps' x1='0' x2='0' y1='0' y2='1'>
              <stop offset='5%' stopColor={tempColor} stopOpacity={0.8} />
              <stop offset='95%' stopColor={tempColor} stopOpacity={0} />
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
          {isToday && (
            <ReferenceLine
              x={thisHour}
              stroke={referenceStroke}
              strokeWidth={2}
            >
              <Label value='Now' position='insideTopLeft'></Label>
            </ReferenceLine>
          )}
          <Tooltip labelFormatter={(value, name) => `${value} oclock`} />
          <Area
            type='monotone'
            dataKey='temp'
            stroke={tempColor}
            fill='url(#colorTemps)'
          />
          <Line
            type='monotone'
            dataKey='feels like'
            stroke={feelsLikeColor}
            fill='url(#colorTemps)'
            dot={false}
          ></Line>
        </ComposedChart>
      </div>
      {chanceRain && (
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
            {isToday && (
              <ReferenceLine
                x={thisHour}
                stroke={referenceStroke}
                strokeWidth={2}
              >
                <Label value='Now' position='insideTopLeft'></Label>
              </ReferenceLine>
            )}
            <Tooltip />
            <Bar dataKey='rain chance' fill='#4792ed' />
          </BarChart>
        </div>
      )}
      {chanceSnow && (
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
            {isToday && (
              <ReferenceLine
                x={thisHour}
                stroke={referenceStroke}
                strokeWidth={2}
              >
                <Label value='Now' position='insideTopLeft'></Label>
              </ReferenceLine>
            )}
            <Tooltip />
            <Bar dataKey='snow chance' fill='#4792ed' />
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
