import React, { useEffect, useState } from 'react';
import useFetchData from '../../../hooks/useFetchData';
import { GroundElement } from './GroundElement';
import { useGlobalContext } from '../../../hooks/useGlobalContext';

function GroundList() {
  const context = useGlobalContext();
  const [fetchData, setFetchData] = useState([]);
  const [page, setPage] = useState(1);
  const fetchDataHandler = useFetchData('/ground', {
    page,
    filter: context.filter ? context.filter : undefined,
    keyword: context.keyword ? context.keyword : undefined,
    sortBy: context.sortBy,
    orderBy: context.orderBy,
  });

  useEffect(() => {
    setFetchData(fetchDataHandler);
  }, [fetchDataHandler, context]);

  return (
    <div className="h-screen overflow-y-scroll">
      <div className="mb-3 bg-gradient-to-br from-red-300 to-blue-200 rounded-3xl p-4">
        {fetchData.map((item) => (
          <GroundElement
            key={item.groundId}
            id={item.groundId}
            groundTitle={item.groundTitle}
            lectureTitle={item.lectureTitle}
            deposit={item.deposit}
            startAt={item.startAt}
            endAt={item.endAt}
            status={item.status}
            numOfParticipants={item.numOfParticipants}
          />
        ))}
      </div>
    </div>
  );
}

export default GroundList;
