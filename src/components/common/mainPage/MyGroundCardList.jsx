import React from 'react';
import useFetchData from '../../../hooks/useFetchData';
import { mockCardData } from '../../../common/mock-datas';

function MyGroundCardList() {
  const fetchData = useFetchData('/userground');

  return (
    <div className="hide-scroll flex flex-nowrap overflow-x-auto">
      {mockCardData.map((item) => (
        <div key={item.groundId} className="w-64 flex-shrink-0 mr-4">
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-4">
              <div className="text-xl font-bold mb-2">{item.title}</div>
              <div className="mb-2">
                <span className="text-gray-700 font-bold mr-2">D-Day:</span>
                <span className="text-green-700">
                  {item.dDay}
                  일 남음
                </span>
              </div>
              <div className="mb-2">
                <span className="text-gray-700 font-bold mr-2">미션:</span>
                <span className="text-green-700">{item.missionToday}</span>
              </div>
              <div className="mb-2">
                <span className="text-gray-700 font-bold mr-2">보상:</span>
                <span className="text-green-700">
                  {item.expectedReward}
                  원
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default MyGroundCardList;
