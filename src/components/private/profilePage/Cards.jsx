import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import api from '../../../common/axios-config';

function Cards() {
  const [info, setInfo] = useState({});
  const [mission, setMission] = useState('');
  const [onGoing, setOnGoing] = useState('');

  const getInfo = () => {
    api.get('/user').then((response) => {
      setInfo(response.data);
      console.log(response.data);
    });
  };

  const getMission = () => {
    api.get('/mission/success-rate').then((response) => {
      setMission(response.data);
      console.log(response.data);
    });
  };
  const getOnGoing = () => {
    api.get('/mission/ongoing').then((response) => {
      setOnGoing(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    getInfo();
    getMission();
    getOnGoing();
  }, []);

  return (
    <CardContainer>
      <Card>
        <div className="p-6 text-center">
          <h5 className="mb-3 text-2xl font-bold text-white">미션 점수</h5>
          <p className="text-gray-300 text-6xl">
            {info.missionScore}
          </p>
        </div>
      </Card>
      <Card>
        <div className="p-6 text-center">
          <h5 className="mb-3 text-2xl font-bold text-white">미션 수행률</h5>
          <p className="text-gray-300 text-6xl">
            {mission}
            {' '}
            %
          </p>
        </div>
      </Card>
      <Card>
        <div className="px-4 py-1 text-center">
          <div className="font-bold text-xl mt-4 mb-2 text-white">오늘의 미션</div>
          {onGoing && onGoing.map((item) => (
            <div key={item.id} className="text-white">
              {item.assignment}
              <div className="text-gray-300">
                {item.missionAt}
              </div>
              <div className="text-gray-400">
                {item.groundTitle}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </CardContainer>

  );
}

const CardContainer = tw.div`
    p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5
    `;
const Card = tw.div`
  bg-gray-800 border rounded-lg
`;
export default Cards;
