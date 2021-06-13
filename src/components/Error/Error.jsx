import React from 'react';
import PropTypes from 'prop-types';
import './Error.scss';

const Error = ({ message }) => (
  <div className="error">
    <div className="error--message">
      <p>{message}</p>
      <p>You probably need to enable trackers.</p>
    </div>
  </div>
);

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
