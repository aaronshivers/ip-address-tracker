import React, { useState } from 'react';
import Form from '../Form';
import Results from '../Results';
import useFetch from '../../hooks/useFetch';
import Title from '../Title';
import Map from '../Map';
import './App.scss';
import Loading from '../Loading';

const apiKey = 'at_14HxwhGsCePL6iZgTACelttKdz8Mn';

const App = () => {
  const [ipAddress, setIpAddress] = useState('');

  const url = `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${ipAddress}`;

  const {
    data, loading,
  } = useFetch(url);

  return (
    <>
      {
        loading ? (
          <Loading />
        ) : (
          <>
            <div className="background">
              <Title />
              <Form
                ipAddress={ipAddress}
                setIpAddress={setIpAddress}
              />
              <Results
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
            </div>
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
