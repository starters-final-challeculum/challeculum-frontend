import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import api from '../../../common/axios-config';

function MyGroundList() {
  const [info, setInfo] = useState(null);
  const [ground, setGround] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/user');
        setInfo(response.data);
        const userId = response.data?.id;

        if (userId) {
          const groundResponse = await api.get(`/my/ground/${userId}`);
          setGround(groundResponse.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const onCancelHandler = (event) => {
    console.log('참여 신청 취소');
    api.patch(`/userground/${event.target.id}`).then((response) => {
      console.log(response);
    });
  };
  return (
    <GroundListContainer>
      {ground.map((item) => (
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
          <Button id={item.groundId} onClick={onCancelHandler}>참여 취소</Button>
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
