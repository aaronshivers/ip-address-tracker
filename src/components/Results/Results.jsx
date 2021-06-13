import React from 'react';
import PropTypes from 'prop-types';
import Result from '../Result';
import './Results.scss';

const Results = ({
  data: {
    ip, isp, city, postalCode, region, timezone,
  },
}) => (
  <ul>
    <Result label="ip address" value={ip} />
    <Result label="location" value={`${city} ${region} ${postalCode}`} />
    <Result label="timezone" value={`UTC ${timezone}`} />
    <Result label="isp" value={isp} />
  </ul>
);

Results.defaultProps = {
  data: {
    ip: '',
    isp: '',
    city: '',
    postalCode: '',
    region: '',
    timezone: '',
  },
};

Results.propTypes = {
  data: PropTypes.exact({
    ip: PropTypes.string,
    isp: PropTypes.string,
    city: PropTypes.string,
    postalCode: PropTypes.string,
    region: PropTypes.string,
    timezone: PropTypes.string,
  }),
};

export default Results;
