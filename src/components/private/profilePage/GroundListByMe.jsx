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
    api.delete(`/ground/${event.target.id}`).then((response) => {
      console.log(response);
      alert('삭제 완료!');
      getGround();
    });
  };

  return (
    <>
      <div className="flex justify-end mb-4 mr-8">
        <Button className="mr-16 bg-gray-500" onClick={onCreateHandler}>그라운드 생성</Button>
      </div>
      <ListContainer>
        {ground.length !== 0 ? ground.map((item) => (
          <ListCard key={item.groundId}>
            <FirstBox>
              <Info>
                {item.platform}
              </Info>
              <div className="text-lg font-semibold">{item.groundTitle}</div>
              <Info>
                {item.startAt}
                {' '}
                ~
                {item.endAt}
              </Info>
            </FirstBox>
            <SecondBox>
              <Info>
                참여인원 :
                {' '}
                {item.numOfParticipants}
              </Info>
              <Info>
                예치금 :
                {' '}
                {item.deposit}
              </Info>
              <Info>
                현재 상태:
                {' '}
                {item.status}
              </Info>
            </SecondBox>
            <ThirdBox>
              <Button id={item.groundId} onClick={onDeleteHandler}>그라운드 삭제</Button>
            </ThirdBox>
          </ListCard>
        )) : (<h1 className="text-3xl py-4">데이터가 없습니다 😂</h1>)}
      </ListContainer>
    </>
  );
}
const ListContainer = tw.div`
  bg-gray-200 p-4 rounded-lg mx-8
    `;
const ListCard = tw.div`
  bg-white p-4 my-4 rounded-lg shadow-md 
  grid grid-cols-6
`;
const Info = tw.div`
text-gray-700
`;
const FirstBox = tw.div`
col-span-3
`;
const SecondBox = tw.div`
col-span-2
`;
const ThirdBox = tw.div`
col-span-1 flex justify-center items-center
`;
const Button = tw.button`
  text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2
`;

export default GroundListByMe;
