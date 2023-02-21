import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import { useNavigate } from 'react-router-dom';
import api from '../../../common/axios-config';

function GroundListByMe() {
  const [ground, setGround] = useState('');
  const navigate = useNavigate();

  const getGround = async () => {
    api.get('/ground/byme').then((response) => {
      setGround(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    getGround();
  }, []);

  const onCreateHandler = () => {
    console.log('등록된 강의인지 체크 필요');
    navigate('/create-ground');
  };

  const onDeleteHandler = async (event) => {
    console.log('status 확인 필요!');
    api.delete(`/ground/${event.target.id}`).then((response) => {
      console.log(response);
    });
  };

  return (
    <GroundListContainer>
      <Button onClick={onCreateHandler}>그라운드 생성</Button>
      {ground && ground.map((item) => (
        <GroundListCard key={item.groundId}>
          <div>강의 플랫폼(이미지)</div>
          <div className="text-lg font-semibold">{item.title}</div>
          <div className="text-gray-700">
            {item.startAt}
            ~
            {item.endAt}
          </div>
          <div className="text-gray-700">
            현재참여인원
            /
            {item.maxCapacity}
          </div>
          <div className="text-gray-700">
            {item.deposit}
          </div>
          <Button id={item.groundId} onClick={onDeleteHandler}>그라운드 생성 취소</Button>
        </GroundListCard>
      ))}
    </GroundListContainer>

  );
}
const GroundListContainer = tw.div`
  bg-gray-200 p-4 rounded-lg
    `;
const GroundListCard = tw.div`
  bg-white p-4 my-4 rounded-lg shadow-md
`;
const Button = tw.button`
  text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2
`;

export default GroundListByMe;
