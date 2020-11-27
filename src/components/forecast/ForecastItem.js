import React from 'react';
import PropTypes from 'prop-types';
import DayJS from 'react-dayjs';
// styles
import {
  forecastItem,
  tempHighLow,
  high,
  low,
} from './ForecastItem.module.scss';

const ForecastItem = ({ forecast: { date, day, hour } }) => {
  const conditionSummary = `${day.condition.text} with a ${
    day.mintemp_f < 32
      ? day.daily_chance_of_snow +
        '% chance of snow and ' +
        day.daily_chance_of_rain +
        '% chance of rain'
      : day.daily_chance_of_rain + '% chance of rain'
  }`;

  return (
    <div className={`card ${forecastItem}`}>
      <div className='card-image'>
        <figure className='image is-4by3'>
          <img
            src='https://bulma.io/images/placeholders/1280x960.png'
            alt='Placeholder image'
          />
        </figure>
      </div>
      <div className='card-content'>
        <p className='subtitle is-6 has-text-centered'>
          <DayJS format={'dddd, MMM D'}>{date}</DayJS>
        </p>
        <p>{conditionSummary}</p>
        <div className={tempHighLow}>
          <p className={high}>{day.maxtemp_f.toFixed(0)}</p>
          <p className={low}>{day.mintemp_f.toFixed(0)}</p>
        </div>
      </div>
    </div>
  );
};

ForecastItem.propTypes = {
  forecast: PropTypes.object.isRequired,
};

export default ForecastItem;
