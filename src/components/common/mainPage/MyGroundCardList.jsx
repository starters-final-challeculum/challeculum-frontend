import React from 'react';
import { useNavigate } from 'react-router-dom';
import { button } from '@material-tailwind/react';
import useFetchData from '../../../hooks/useFetchData';

function MyGroundCardList() {
  const fetchData = useFetchData('/ground/me');
  console.log(fetchData);
  const navigate = useNavigate();

  const today = new Date().toISOString().slice(0, 10);

  return (
    <div className="hide-scroll flex flex-nowrap overflow-x-auto">
      {fetchData.map((item) => {
        const dDay = Math.floor((new Date(item.endAt) - new Date()) / (1000 * 60 * 60 * 24));
        return (
          <button onClick={() => {
            navigate(`/ground/${item.groundId}`);
          }}
          >
            <div key={item.groundId} className="w-64 flex-shrink-0 mr-4">
              <div className="bg-white rounded-lg shadow-lg">
                <div className="p-4">
                  <div className="text-xl font-bold mb-2">{item.groundTitle}</div>
                  <div className="mb-2">
                    <span className={`text-gray-700 font-bold mr-2 ${dDay >= 0 ? 'text-gray-700' : 'text-red-700'}`}>
                      {dDay >= 0 ? `종료까지 ${dDay}일 남음` : '종료'}
                    </span>
                  </div>
                  <div className="mb-2">
                    <span className="text-gray-700 font-bold mr-2">오늘의 미션</span>
                    <span className="text-green-700">
                      {item.missionList.filter((mission) => mission.missionAt === today).map((mission) => (
                        <div key={mission.id}>
                          <span>{mission.assignment}</span>
                        </div>
                      ))}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default MyGroundCardList;
