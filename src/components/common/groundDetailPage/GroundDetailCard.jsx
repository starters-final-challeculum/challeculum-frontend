import React from 'react';
import {
  faWallet, faUsers, faCalendarAlt, faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import tw from 'tailwind-styled-components';

const Card = tw.div`
  bg-white shadow-lg rounded-lg px-6 py-8 mb-12
`;

const Title = tw.h1`
  text-2xl font-medium mb-4
`;

const Subtitle = tw.h2`
  text-lg font-medium text-gray-500 mb-4
`;

const Paragraph = tw.p`
  text-gray-700 text-base mb-6 h-40 overflow-auto
`;

const IconText = tw.div`
  flex items-center font-normal text-gray-700 text-lg mb-2
`;

const Info = tw.div`
  bg-emerald-700 text-white rounded-lg p-4
`;

function GroundDetailCard({
  ground, fetchIsAvailableGround, createUserGround, cancelUserGround,
}) {
  const available = fetchIsAvailableGround;
  const ClickHandle = () => {
    if (available) {
      createUserGround().then(() => {
        alert('OK');
      }).catch(() => {
        alert('Fail');
      });
    } else {
      cancelUserGround();
    }
  };
  return (
    <Card>
      <Title>{ground.title}</Title>
      <Subtitle>{ground.lectureId}</Subtitle>
      <Paragraph>{ground.information}</Paragraph>
      <div className="flex items-center justify-between text-gray-700 text-sm mb-2">
        <IconText>
          <FontAwesomeIcon icon={faWallet} className="mr-2" />
          <span>
            예치금:
            {ground.deposit}
          </span>
        </IconText>
        <IconText>
          <FontAwesomeIcon icon={faUsers} className="mr-2" />
          <span>
            수용가능 인원:
            {' '}
            {ground.minCapacity}
            {' '}
            -
            {' '}
            {ground.maxCapacity}
          </span>
        </IconText>
        <IconText>
          <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
          <span>
            기간:
            {ground.startAt}
            {' '}
            -
            {ground.endAt}
          </span>
        </IconText>
        <IconText>
          <FontAwesomeIcon icon={faExclamationTriangle} className="mr-2" />
          <span>
            면제횟수:
            {ground.missionFailLimit}
          </span>
        </IconText>
        <IconText>
          <button
            className="bg-gray-200 p-1 rounded-2xl"
            onClick={ClickHandle}
          >
            {available ? '참여하기' : '참여취소'}
          </button>
        </IconText>
      </div>
      {/* <Info> */}
      {/*  <p>그라운드 미션 정보</p> */}
      {/* </Info> */}
    </Card>
  );
}

export default GroundDetailCard;
