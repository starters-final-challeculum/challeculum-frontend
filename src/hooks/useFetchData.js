import { useEffect, useState } from 'react';
import api from '../common/axios-config';
import { useGlobalContext } from './useGlobalContext';

function useFetchData(url, params) {
  const [data, setData] = useState([]);
  const context = useGlobalContext();
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(url, { params });
      setData(result.data);
    };
    fetchData();
  }, [url, context]);
  return data;
}

export default useFetchData;
