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
    <>
      {/* <h1 className="text-3xl ml-5 mb-4">그라운드에 참여하세요 !</h1> */}
      <div className="h-screen overflow-y-auto">
        <div className="bg-gray-200 rounded-lg p-4 ">
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
              platform={item.platform}
            />
          ))}
        </div>
      </div>
    </>

  );
}

export default GroundList;
