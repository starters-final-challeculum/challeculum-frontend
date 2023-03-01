import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import api from '../../../common/axios-config';

function MyGroundList() {
  const [ground, setGround] = useState([]);

  const getMyGround = async () => {
    await api.get('/ground/me').then((response) => {
      setGround(response.data);
      console.log(response.data);
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
    <GroundListContainer>
      {ground.map((item) => (
        <GroundListCard key={item.groundId}>
          <div>
            {item.categoryName}
          </div>
          <div className="text-lg font-semibold">{item.groundTitle}</div>
          <div className="text-gray-700">
            {item.startAt}
            ~
            {item.endAt}
          </div>
          <div className="text-gray-700">
            현재참여인원:
            {item.numOfParticipants}
          </div>
          <div className="text-gray-700">
            {item.deposit}
          </div>
          <div className="text-gray-700">
            {item.status}
          </div>
          <div className="flex justify-end">
            <Button id={item.groundId} onClick={onCancelHandler}>참여 취소</Button>
          </div>
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
export default MyGroundList;
