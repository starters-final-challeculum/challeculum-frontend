import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import api from '../../../common/axios-config';
import GroundMissionList from '../../common/groundDetailPage/GroundMissionList';
import { groundStatus } from '../../../common/global-constants';
import useFetchData from '../../../hooks/useFetchData';

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
          <p className="text-gray-300 text-4xl">
            {info.missionScore}
          </p>
        </div>
      </Card>
      <Card>
        <div className="p-6 text-center">
          <h5 className="mb-3 text-2xl font-bold text-white">미션 수행률</h5>
          <p className="text-gray-300 text-4xl">
            {!Number.isNaN(mission) && Number.isFinite(mission) ? `${mission}%` : '데이터가 없습니다'}
          </p>
        </div>
      </Card>
      <Card>
        <div className="p-6 text-center">
          <h5 className="mb-3 text-2xl font-bold text-white">내 포인트</h5>
          <p className="text-gray-300 text-4xl">
            {`${info.point}P`}
          </p>
        </div>
      </Card>
    </CardContainer>

  );
}

const CardContainer = tw.div`
    p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 mb-8
    `;
const Card = tw.div`
  bg-gray-800 border rounded-lg
`;
const Title = tw.h1`text-3xl my-8`;
export default Cards;
