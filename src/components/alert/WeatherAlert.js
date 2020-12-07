import React, { useState, useContext, Fragment } from 'react';
import Skeleton from 'react-loading-skeleton';
import dayjs from 'dayjs';
// components
import AlertModal from './AlertModal';
// global state
import weatherContext from '../../context/weather/weatherContext';
// styles
import styles from './WeatherAlert.module.scss';

const WeatherAlert = () => {
  const { alert, loading } = useContext(weatherContext);
  const alertIsEmpty = Object.keys(alert).length === 0;

  // local state to manage modal
  const [modalActive, setModalActive] = useState(false);

  const toggleModal = () => {
    setModalActive(!modalActive);
  };

  if (!alertIsEmpty && loading) {
    return <Skeleton height={35} />;
  }
  return (
    !alertIsEmpty && (
      <Fragment>
        <div
          className={`${styles.alert} has-background-warning`}
          onClick={toggleModal}
        >
          <span className='icon'>
            <i className='fas fa-exclamation-triangle'></i>
          </span>
          <span>
            {`${alert.event} - expires ${dayjs(alert.expires).format(
              'MM/DD/YY'
            )}`}
          </span>
        </div>
        <AlertModal
          modalActive={modalActive}
          setModalActive={setModalActive}
          alert={alert}
        />
      </Fragment>
    )
  );
};

export default WeatherAlert;
