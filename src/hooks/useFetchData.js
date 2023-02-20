import { useEffect, useState } from 'react';
import api from '../common/axios-config';

function useFetchData(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(url);
      setData(result.data);
    };
    fetchData();
  }, [url]);

  return data;
}

export default useFetchData;
