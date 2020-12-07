import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const AlertModal = ({ alert, modalActive, setModalActive }) => {
  const {
    areas,
    certainty,
    event,
    effective,
    expires,
    headline,
    instruction,
    severity,
  } = alert;

  return (
    <div className='container'>
      <div className={`modal ${modalActive ? 'is-active' : ''}`}>
        <div className='modal-background'></div>
        <div className='modal-content'>
          <article className='message is-warning'>
            <div className='message-header'>
              <h2 className='subtitle is-4'>{event}</h2>
            </div>
            <div className='message-body'>
              <p>
                {`Effective: ${dayjs(effective).format('MM/DD/YY hh:mm A')}`}
              </p>
              <p className='block'>{`Expires: ${dayjs(expires).format(
                'MM/DD/YY hh:mm A'
              )}`}</p>
              <p className='block'>
                <strong>{`${headline} for the areas of ${areas}`}</strong>
              </p>
              <p className='block'>{instruction}</p>
              <p>{`Certainty: ${certainty}`}</p>
              <p>{`Severity: ${severity}`}</p>
            </div>
          </article>
        </div>
        <button
          className='modal-close is-large'
          aria-label='close'
          onClick={() => setModalActive(!modalActive)}
        ></button>
      </div>
    </div>
  );
};

AlertModal.propTypes = {
  alert: PropTypes.object.isRequired,
  modalActive: PropTypes.bool.isRequired,
  setModalActive: PropTypes.func.isRequired,
};

export default AlertModal;
