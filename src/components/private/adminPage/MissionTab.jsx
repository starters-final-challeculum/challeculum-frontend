import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import api from '../../../common/axios-config';

function MissionTab() {
  const [mission, setMission] = useState('');

  const getMission = async () => {
    api.get('user/me/all').then((response) => {
      setMission(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    getMission();
  }, []);

  return (
    <ListContainer>
      {mission && mission.map((item) => (
        <ListCard key={item.groundId} className="grid grid-cols-6">
          <FirstBox>
            <Info>
              {item.categoryName}
            </Info>
            <div className="text-lg font-semibold">{item.groundTitle}</div>
            <Info>
              {item.information}
            </Info>
          </FirstBox>
          <SecondBox>
            <Info>
              생성한 유저 :
              {item.createUserId}
            </Info>
            <Info>
              생성일 :
              {item.createdAt}
            </Info>
          </SecondBox>
          <ThirdBox>
            <Button>미션 승인</Button>
          </ThirdBox>
        </ListCard>
      ))}
    </ListContainer>

  );
}
const ListContainer = tw.div`
  bg-gray-200 p-4 rounded-lg
    `;
const ListCard = tw.div`
  bg-white p-4 my-4 rounded-lg shadow-md
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
export default MissionTab;
