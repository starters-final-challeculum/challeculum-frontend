import { useEffect, useState } from 'react';
import api from '../common/axios-config';
import { useSearch } from './useSearch';

function useFetchData(url, page) {
  const [data, setData] = useState([]);
  const context = useSearch();
  useEffect(() => {
    const fetchData = async () => {
      const params = {
        page,
        filter: context.filter ? context.filter : undefined,
        keyword: context.keyword ? context.keyword : undefined,
        sortBy: context.sortBy,
        orderBy: context.orderBy,
      };
      console.log(params);
      // console.log(params);
      const result = await api.get(url, { params });
      setData(result.data);
    };
    fetchData();
  }, [url, context]);
  return data;
}

export default useFetchData;
