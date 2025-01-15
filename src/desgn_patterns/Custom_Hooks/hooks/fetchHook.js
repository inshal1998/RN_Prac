import {useEffect, useState} from 'react';

export const fetchHook = endpoint => {
  const [data, setdata] = useState([]);
  const [error, seterror] = useState('');
  const [isLoading, setisLoading] = useState(true);

  const fetchData = async () => {
    try {
      if (!endpoint) return seterror('Please Share Endpoint');
      const resposne = await (await fetch(endpoint)).json();
      if (resposne.data) {
        setdata(resposne.data);
        setisLoading(false);
      }
    } catch (error) {
      seterror(error);
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    error,
    isLoading,
  };
};
