import React from 'react';
import PropTypes from 'prop-types';
import Result from '../Result';
import './Results.scss';

const Results = ({ data }) => {
  const {
    ip, isp, location: {
      city, postalCode, region, timezone,
    },
  } = data;

  return (
    <ul>
      <Result label="ip address" value={ip} />
      <Result label="location" value={`${city} ${region} ${postalCode}`} />
      <Result label="timezone" value={timezone} />
      <Result label="isp" value={isp} />
    </ul>
  );
};

Results.propTypes = {
  data: PropTypes.exact({
    ip: PropTypes.string.isRequired,
    isp: PropTypes.string.isRequired,
    location: PropTypes.exact({
      city: PropTypes.string.isRequired,
      postalCode: PropTypes.string.isRequired,
      region: PropTypes.string.isRequired,
      timezone: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Results;
