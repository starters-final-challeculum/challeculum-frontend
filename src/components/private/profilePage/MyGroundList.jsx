import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import api from '../../../common/axios-config';

function MyGroundList({ status }) {
  const [ground, setGround] = useState([]);

  const getMyGround = async () => {
    await api.get('/ground/me', { params: { status } }).then((response) => {
      setGround(response.data);
    });
  };

  useEffect(() => {
    getMyGround();
  }, []);

  const onCancelHandler = (event) => {
    console.log('참여 신청 취소');
    api.delete(`/user/me/ground/${event.target.id}`).then((response) => {
      console.log(response);
      alert('취소 완료!');
      getMyGround();
    });
  };
  return (
    <ListContainer>
      {ground.length !== 0 ? ground.map((item) => (
        <ListCard key={item.groundId}>
          <FirstBox>
            <Info>
              {item.categoryName}
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
              현재참여인원:
              {' '}
              {item.numOfParticipants}
            </Info>
            <Info>
              예치금:
              {' '}
              {item.deposit}
            </Info>
            <Info>
              {item.status}
            </Info>
          </SecondBox>
          <ThirdBox>
            <Button id={item.groundId} onClick={onCancelHandler}>참여 취소</Button>
          </ThirdBox>
        </ListCard>
      )) : (<h1 className="text-3xl py-4">데이터가 없습니다 😂</h1>)}
      {}
    </ListContainer>

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
export default MyGroundList;
