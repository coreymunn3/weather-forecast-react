import React, { useContext, useEffect, Fragment } from 'react';
import { useToasts } from 'react-toast-notifications';
// components
//import WeatherAlert from '../alert/WeatherAlert'; - defunct due to api change
import CurrentWeather from '../currentWeather/CurrentWeather';
import Forecast from '../forecast/Forecast';
// state
import weatherContext from '../../context/weather/weatherContext';

const Home = () => {
  // init toast
  const { addToast } = useToasts();
  // pull out state
  const {
    location: {
      citystate: { name, region },
    },
    setLatLon,
    getCityStateFromLatLon,
    getWeather,
  } = useContext(weatherContext);

  // get user location on mount
  useEffect(() => {
    const getUserLocation = async () => {
      // if the user has browser location enabled...
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(async (pos) => {
          // add coords to state: latlon: {lat, lon}
          setLatLon(pos.coords.latitude, pos.coords.longitude);
          // send request reverse geocode lat lon with google api and save
          await getCityStateFromLatLon(
            pos.coords.latitude,
            pos.coords.longitude
          );
          // after a few seconds, notify user of success
          addToast('Location Updated Automatically', {
            appearance: 'success',
            autoDismiss: true,
          });
        });
      } else {
        // notify user of auto-location update failure
        addToast('Location Unavailable, please set manually', {
          appearance: 'error',
          autoDismiss: true,
        });
      }
    };
    getUserLocation();
  }, []);

  // add weather data to state when location info changes
  useEffect(() => {
    const locationFull = `${name} ${region}`;
    const getData = async () => {
      await getWeather(locationFull);
    };
    getData();
  }, [name, region]);

  return (
    <Fragment>
      {/* <WeatherAlert /> */}
      <CurrentWeather />
      <Forecast />
    </Fragment>
  );
};

export default Home;
