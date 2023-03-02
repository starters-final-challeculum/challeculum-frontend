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

  const statusClassName = status === 'GROUND_COMPLETED'
    ? 'bg-neutral-300'
    : status === 'GROUND_ONGOING'
      ? 'bg-rose-300'
      : 'bg-indigo-200';
  return (
    <ListCard key={id} className="grid grid-cols-10" onClick={navigateGroundDetail}>
      <ImageBox className="items-center">
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
      <ThirdBox>
        <div className={`text-center w-24 p-3 rounded-2xl ${statusClassName}`}>
          {statusMessage}
        </div>
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
col-span-2 m-2 h-24
`;
const FirstBox = tw.div`
col-span-4 m-2
`;
const SecondBox = tw.div`
col-span-2 m-2
`;
const ThirdBox = tw.div`
col-span-2 m-2 flex justify-center items-center text-xl text-gray-800
`;
