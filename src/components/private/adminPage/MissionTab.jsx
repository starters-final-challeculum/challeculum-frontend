import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import api from '../../../common/axios-config';

function MissionTab() {
  const [mission, setMission] = useState([]);

  const getMission = async () => {
    api.get('user/me/all').then((response) => {
      setMission(response.data);
    });
  };

  useEffect(() => {
    getMission();
  }, []);

  const onUpdateHandler = async (event) => {
    const missionId = event.target.id;
    const missionToUpdate = mission.find((item) => item.missionId === missionId);
    console.log(missionToUpdate);

    api.put(`/user/me/mission/${missionId}`, {
      submitAt: missionToUpdate.submitAt,
      isAccepted: 'ACCEPTED',
      imageUrl: missionToUpdate.imageUrl,
      userId: missionToUpdate.userId,
    })
      .then((response) => {
        console.log(response);
        alert('수정완료');
        getMission();
      });
  };

  const onRejectHandler = async (event) => {
    const missionId = event.target.id;
    const missionToUpdate = mission.find((item) => item.missionId === missionId);
    console.log(missionToUpdate);

    api.put(`/user/me/mission/${missionId}`, {
      submitAt: missionToUpdate.submitAt,
      isAccepted: 'REJECTED',
      imageUrl: missionToUpdate.imageUrl,
      userId: missionToUpdate.userId,
    })
      .then((response) => {
        console.log(response);
        alert('수정완료');
        getMission();
      });
  };

  return (
    <ListContainer>
      {mission
            && mission.map((item) => (
              <ListCard key={item.missionId} className="grid grid-cols-6">
                <FirstBox>
                  <div className="text-lg font-semibold">
                    상태 :
                    {item.isAccepted}
                  </div>

                  <Info>
                    제출일 :
                    {item.submitAt}
                  </Info>
                  <Info>
                    유저 ID :
                    {item.userId}
                  </Info>
                </FirstBox>
                <ThirdBox className="col-end-7">
                  {item.isAccepted === 'WAITING' && (
                  <Button id={item.missionId} onClick={onUpdateHandler}>
                    미션 승인
                  </Button>
                  )}
                  {item.isAccepted === 'ACCEPTED' && (
                  <Button id={item.missionId} onClick={onRejectHandler}>
                    미션 승인 취소
                  </Button>
                  )}
                </ThirdBox>
                <SecondBox className="col-span-5">
                  <Info>
                    url :
                    {' '}
                    {item.imageUrl}
                  </Info>
                </SecondBox>
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
    text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2
`;
export default MissionTab;
