import React from 'react';
import PropTypes from 'prop-types';
import AddressItem from '../AddressItem';

const Results = ({ data }) => {
  const {
    ip, isp, location: {
      city, postalCode, region, timezone,
    },
  } = data;

  return (
    <ul>
      <AddressItem label="ip address" value={ip} />
      <AddressItem label="location" value={`${city} ${region} ${postalCode}`} />
      <AddressItem label="timezone" value={timezone} />
      <AddressItem label="isp" value={isp} />
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
