import React, {
  useContext,
  useEffect,
  useState,
  useRef,
  Fragment,
} from 'react';
import Skeleton from 'react-loading-skeleton';
import weatherContext from '../../context/weather/weatherContext';
// components
import ForecastItem from './ForecastItem';
import ForecastChart from './ForecastChart';
// styles
import styles from './Forecast.module.scss';

const Forecast = () => {
  // global weather state
  const {
    forecastWeather: { forecastday },
    chartWeather: { visible },
    loading,
  } = useContext(weatherContext);

  // finding the width of the forecast container
  // via https://usehooks.com/useWindowSize
  const [forecastWidth, setForecastWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const forecastContainer = document.getElementById('forecast-container');
      setForecastWidth(forecastContainer.clientWidth);
    };
    // set event listener on window and call function
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // scroll to end when forecast day clicked
  // from: https://stackoverflow.com/questions/37620694/how-to-scroll-to-bottom-in-react
  const lastEl = useRef(null);
  useEffect(() => {
    if (visible) lastEl.current.scrollIntoView({ behavior: 'smooth' });
  }, [visible]);

  return (
    <section className='section'>
      <div id='forecast-container' className={styles.forecastContainer}>
        {loading && forecastWidth < 650 && (
          <Fragment>
            <Skeleton
              height={163.5}
              width={forecastWidth}
              style={{ marginBottom: '1rem' }}
              key='1'
            />
            <Skeleton
              height={163.5}
              width={forecastWidth}
              style={{ marginBottom: '1rem' }}
              key='2'
            />
            <Skeleton
              height={163.5}
              width={forecastWidth}
              style={{ marginBottom: '1rem' }}
              key='3'
            />
          </Fragment>
        )}
        {!loading &&
          forecastday.map((forecast, idx) => (
            <ForecastItem key={idx} forecast={forecast} />
          ))}
      </div>
      {visible && <ForecastChart width={forecastWidth} />}
      <div ref={lastEl}></div>
    </section>
  );
};

export default Forecast;
