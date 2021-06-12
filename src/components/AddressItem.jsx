import React from 'react';
import PropTypes from 'prop-types';

const AddressItem = ({ label, value }) => (
  <li>
    <div>{label}</div>
    <div>{value}</div>
  </li>
);

AddressItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default AddressItem;
