import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DayJS from 'react-dayjs';
import imageContext from '../../context/image/imageContext';
// styles
import { forecastItem, tempHighLow } from './ForecastItem.module.scss';

const ForecastItem = ({ forecast: { date, day, hour } }) => {
  // global state
  const { forecastWeatherImages } = useContext(imageContext);
  const imageUrls = forecastWeatherImages[date];

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
        <figure className='image is-square'>
          <img
            src={
              imageUrls
                ? imageUrls.small
                : 'https://bulma.io/images/placeholders/480x480.png'
            }
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
          <p className='has-text-primary has-text-weight-bold'>
            {day.maxtemp_f.toFixed(0)}
          </p>
          <p className='has-text-grey-lighter'>{day.mintemp_f.toFixed(0)}</p>
        </div>
      </div>
    </div>
  );
};

ForecastItem.propTypes = {
  forecast: PropTypes.object.isRequired,
};

export default ForecastItem;
