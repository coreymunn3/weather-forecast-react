import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DayJS from 'react-dayjs';
import weatherContext from '../../context/weather/weatherContext';
import imageContext from '../../context/image/imageContext';
// styles
import { forecastItem, tempHighLow } from './ForecastItem.module.scss';

const ForecastItem = ({ forecast: { date, day, hour } }) => {
  // global state
  const { getForecastWeatherImage } = useContext(imageContext);
  const {
    chartWeather: { chartDate },
    showChart,
    setChartData,
  } = useContext(weatherContext);

  // local state for image
  const [backgroundImage, setBackgroundImage] = useState(
    'https://bulma.io/images/placeholders/480x480.png'
  );

  // set image on component mount
  useEffect(() => {
    const getImage = async () => {
      const url = await getForecastWeatherImage(day.condition.code);
      setBackgroundImage(url);
    };
    getImage();
  }, [day]);

  const conditionSummary = `${day.condition.text} with a ${
    day.mintemp_f < 32
      ? day.daily_chance_of_snow +
        '% chance of snow and ' +
        day.daily_chance_of_rain +
        '% chance of rain'
      : day.daily_chance_of_rain + '% chance of rain'
  }`;

  // click handler to toggle chart & data displayed
  const handleClick = () => {
    // push data to chart state
    setChartData(
      date,
      hour,
      day.daily_chance_of_rain,
      day.daily_chance_of_snow
    );
    // show the chart
    showChart();
  };

  return (
    <div
      className={`card ${
        chartDate === date ? 'card-active' : ''
      } ${forecastItem}`}
      onClick={handleClick}
    >
      <div className='card-image'>
        <figure className='image is-square'>
          <img src={backgroundImage} alt='weather' />
        </figure>
      </div>
      <div className='card-content'>
        <p className='subtitle is-6 has-text-centered'>
          <DayJS format={'ddd, MMM D'}>{date}</DayJS>
        </p>
        <p>{conditionSummary}</p>
        <div className={tempHighLow}>
          <p className='has-text-primary has-text-weight-bold'>
            {day.maxtemp_f.toFixed(0)}
          </p>
          <p className='has-text-grey-light'>{day.mintemp_f.toFixed(0)}</p>
        </div>
      </div>
    </div>
  );
};

ForecastItem.propTypes = {
  forecast: PropTypes.object.isRequired,
};

export default ForecastItem;
