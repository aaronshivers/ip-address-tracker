import React, { useEffect, useState } from 'react';
import Form from '../Form';
import Results from '../Results';
import useFetch from '../../hooks/useFetch';
import Title from '../Title';
import Map from '../Map';
import './App.scss';
import Loading from '../Loading';
import Error from '../Error';

const apiKey = 'at_14HxwhGsCePL6iZgTACelttKdz8Mn';

const App = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [ip, setIp] = useState('');
  const [isp, setIsp] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [region, setRegion] = useState('');
  const [timezone, setTimezone] = useState('');

  const url = `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${ipAddress}`;

  const {
    data, loading, error,
  } = useFetch(url);

  useEffect(() => {
    if (data) {
      setLatitude(data.location.lat);
      setLongitude(data.location.lng);
      setIp(data.ip);
      setIsp(data.isp);
      setCity(data.location.city);
      setPostalCode(data.location.postalCode);
      setRegion(data.location.region);
      setTimezone(data.location.timeZone);
    }
  }, [data]);

  if (error) {
    return (
      <Error message={error} />
    );
  }

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <>
      <div className="background">
        <Title />
        <Form
          ipAddress={ipAddress}
          setIpAddress={setIpAddress}
        />
        <Results
          data={{
            ip, isp, city, postalCode, region, timezone,
          }}
        />
      </div>
      <Map
        position={[latitude, longitude]}
        style={{ height: '500px' }}
      />
    </>
  );
};

export default App;
