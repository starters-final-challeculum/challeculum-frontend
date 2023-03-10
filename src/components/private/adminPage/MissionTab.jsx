import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import api from '../../../common/axios-config';

function MissionTab() {
  const [mission, setMission] = useState([]);

  const getMission = async () => {
    api.get('user/me/mission').then((response) => {
      console.log(response.data);
      setMission(response.data);
    });
  };

  useEffect(() => {
    getMission();
  }, []);

  const onUpdateHandler = async (event) => {
    const { userId, missionId } = JSON.parse(event.target.value);

    api.put(`/user/${userId}/mission/${missionId}`, {
      isAccepted: 'ACCEPTED',
    })
      .then((response) => {
        console.log(response);
        alert('수정완료');
        getMission();
      });
  };

  const onRejectHandler = async (event) => {
    const { userId, missionId } = JSON.parse(event.target.value);

    api.put(`/user/${userId}/mission/${missionId}`, {
      isAccepted: 'REJECTED',
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
              <ListCard key={item.missionId} className="grid grid-cols-8">
                <FirstBox className="col-span-3">
                  <div className="text-2xl font-semibold">
                    {item.isAccepted}
                  </div>
                  <Info>
                    {item.ground.groundTitle}
                  </Info>
                  <Info>
                    마감 :
                    {item.submitAt}
                  </Info>
                  <Info>
                    제출 :
                    {item.submitAt}
                  </Info>
                  <Info>
                    {item.nickname}
                  </Info>
                </FirstBox>
                <SecondBox className="col-span-3">
                  <img src={item.imageUrl} alt="이미지를 찾을 수 없습니다." />
                </SecondBox>
                <ThirdBox className="col-span-2">
                  {item.isAccepted === 'WAITING' && (
                  <Button value={JSON.stringify(item)} userId={item.userId} onClick={onUpdateHandler}>
                    미션 승인
                  </Button>
                  )}
                  {item.isAccepted === 'ACCEPTED' && (
                  <Button value={JSON.stringify(item)} onClick={onRejectHandler} className="bg-red-600">
                    미션 승인 취소
                  </Button>
                  )}
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
    text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2
`;
export default MissionTab;
