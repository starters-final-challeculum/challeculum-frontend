import React from 'react';
import { useNavigate } from 'react-router-dom';
import tw from 'tailwind-styled-components';

import coursera from '../../../static/images/coursera.png';
import udemy from '../../../static/images/udemy.png';
import inflearn from '../../../static/images/inflearn.png';

const platformImages = {
  PLATFORM_COURSERA: coursera,
  PLATFORM_UDEMY: udemy,
  PLATFORM_INFLEARN: inflearn,
};

export function GroundElement({
  id, groundTitle, lectureTitle, deposit, startAt, endAt, status, numOfParticipants, platform,
}) {
  const navigate = useNavigate();
  const navigateGroundDetail = () => {
    navigate(`/ground/${id}`);
  };
  const platformImage = platformImages[platform];

  let statusMessage;
  if (status === 'GROUND_COMPLETED') {
    statusMessage = '완료';
  } else if (status === 'GROUND_ONGOING') {
    statusMessage = '진행 중';
  } else if (status === 'GROUND_STANDBY') {
    statusMessage = '모집 중';
  }
  return (
    <ListCard key={id} className="grid grid-cols-10" onClick={navigateGroundDetail}>
      <ImageBox>
        <img src={platformImage} alt={platform} />
      </ImageBox>
      <FirstBox>
        <Info>
          {lectureTitle}
        </Info>
        <div className="text-lg font-semibold mb-2">{groundTitle}</div>
        <Info>
          {startAt}
          {' '}
          ~
          {endAt}
        </Info>
      </FirstBox>
      <SecondBox>
        <br />
        <Info>
          예치금 :
          {' '}
          {deposit}
        </Info>
        <Info>
          현재 참여 인원 :
          {' '}
          {numOfParticipants}
        </Info>
      </SecondBox>
      <ThirdBox className="text-xl text-gray-800">
        {statusMessage}
      </ThirdBox>
    </ListCard>
  );
}

const ListCard = tw.div`
  bg-white p-4 my-4 rounded-lg shadow-md
`;
const Info = tw.div`
text-gray-700
`;
const ImageBox = tw.div`
col-span-2 m-2
`;
const FirstBox = tw.div`
col-span-4 m-2
`;
const SecondBox = tw.div`
col-span-2 m-2
`;
const ThirdBox = tw.div`
col-span-2 m-2 flex justify-center items-center
`;
