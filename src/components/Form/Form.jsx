import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Arrow from '../../assets/images/icon-arrow.svg';
import './Form.scss';

const Form = ({ ipAddress, setIpAddress }) => {
  const [value, setValue] = useState(ipAddress);

  const onInputChange = (event) => {
    setValue(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setIpAddress(value);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        name="location"
        value={value}
        onChange={onInputChange}
      />
      <button type="submit">
        <Arrow />
      </button>
    </form>
  );
};

Form.propTypes = {
  ipAddress: PropTypes.string.isRequired,
  setIpAddress: PropTypes.func.isRequired,
};

export default Form;
