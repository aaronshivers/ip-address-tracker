import React from 'react';
import PropTypes from 'prop-types';
import AddressItem from './AddressItem';

const Address = ({ data }) => (
  <ul>
    {
      data.map(({ key, value }) => (
        <AddressItem key={key} label={key} value={value} />
      ))
    }
  </ul>
);

Address.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Address;
