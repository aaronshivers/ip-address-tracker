import React from 'react';
import Arrow from '../assets/images/icon-arrow.svg'
import '../styles/form.scss'

const Form = () => {
  const onFormSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.location.value);
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input type="text" name='location' />
      <button className='button' type='submit'>
        <Arrow />
      </button>
    </form>
  );
};

export default Form;
