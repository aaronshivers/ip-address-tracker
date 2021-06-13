import React from 'react';
import PropTypes from 'prop-types';
import './Result.scss';

const Result = ({ label, value }) => (
  <li className="result">
    <div className="result--label">{label}</div>
    <div className="result--value">{value}</div>
  </li>
);

Result.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Result;
