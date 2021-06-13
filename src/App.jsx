import React, { useState } from 'react';
import Form from './components/Form';
import Address from './components/Address';
import useFetch from './hooks/useFetch';
import Title from './components/Title';
import Map from './components/Map';

const apiKey = 'at_14HxwhGsCePL6iZgTACelttKdz8Mn';

const App = () => {
  const [ipAddress, setIpAddress] = useState('8.8.8.8');

  const url = `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${ipAddress}`;

  const {
    data, loading,
  } = useFetch(url);

  return (
    <>
      <Title />
      <Form ipAddress={ipAddress} setIpAddress={setIpAddress} />
      {
        loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <Address
              data={{
                ip: data.ip,
                isp: data.isp,
                location: {
                  city: data.location.city,
                  postalCode: data.location.city,
                  region: data.location.region,
                  timezone: data.location.timezone,
                },
              }}
            />
            <Map
              position={[data.location.lat, data.location.lng]}
              style={{ height: '500px' }}
            />
          </>
        )
      }
    </>
  );
};

export default App;
