import React from 'react';
import Form from './components/Form';
import Address from './components/Address';

const data = [
  {
    key: 'IP Address',
    value: '192.212.174.101',
  }, {
    key: 'location',
    value: 'Brooklyn, NY 10001',
  }, {
    key: 'timezone',
    value: 'utc -05:00',
  }, {
    key: 'isp',
    value: 'SpaceX Starlink',
  },
];

const App = () => (
  <>
    <Form />
    <Address data={data} />
  </>
);

export default App;
