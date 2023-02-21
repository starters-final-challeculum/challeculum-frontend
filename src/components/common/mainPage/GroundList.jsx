import React, { useEffect, useState } from 'react';
import useFetchData from '../../../hooks/useFetchData';

function GroundList() {
  const [fetchData, setFetchData] = useState([]);
  const fetchDataHandler = useFetchData('/ground');

  useEffect(() => {
    setFetchData(fetchDataHandler);
  }, [fetchDataHandler]);

  return (
    <div className="h-screen overflow-y-scroll shadow-md hover:shadow-lg">
      <div className="bg-gradient-to-br from-red-300 to-blue-200 rounded-3xl p-4">
        {fetchData.map((item) => (
          <div key={item.id} className="bg-white p-4 my-4 rounded-lg shadow-md">
            <div className="text-lg font-semibold">{item.title}</div>
            <div className="text-gray-700">
              <div>
                Level:
                {item.level}
              </div>
              <div>
                Capacity:
                {item.minCapacity}
                {' '}
                ~
                {item.maxCapacity}
              </div>
              <div>
                Deposit:
                {item.deposit}
              </div>
              <div>
                Period:
                {item.startAt}
                {' '}
                ~
                {item.endAt}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroundList;
