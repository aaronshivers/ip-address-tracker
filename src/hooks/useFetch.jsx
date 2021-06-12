import { useCallback, useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(undefined);

    try {
      const response = await fetch(url);

      if (response.ok) {
        const result = response.json();
        setData(result);
      }
    } catch (e) {
      setError(new Date());
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
