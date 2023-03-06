import React from 'react';
import { faCalendarAlt, faUsers, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import tw from 'tailwind-styled-components';
import { useNavigate } from 'react-router-dom';
import { groundStatus } from '../../../common/global-constants';

const Card = tw.div`
  bg-white shadow-lg rounded-lg px-6 py-8 mb-12
`;

const Title = tw.h1`
  text-2xl font-medium mb-4
`;

const Subtitle = tw.h2`
  text-lg font-medium text-gray-500 mb-4
`;

const Content = tw.p`
  text-gray-700 text-base mb-6 h-40 overflow-auto
`;

const IconText = tw.div`
  flex items-center font-normal text-gray-700 text-lg mb-2
`;

const Info = tw.div`
  bg-emerald-700 text-white rounded-lg p-4
`;
const Paragraph = tw.div`overflow-y-auto h-40`;

function GroundDetailCard({
  ground, fetchIsAvailableGround, createUserGround, cancelUserGround, createUserLecture,
}) {
  const available = fetchIsAvailableGround();

  const ClickHandle = () => {
    if (available) {
      createUserGround()
        .then(() => {
          alert('그라운드 참여 신청 되었습니다.');
          window.location.reload();
        })
        .catch(({ response }) => {
          if (response.data.errorCode === 2005) {
            const confirm = window.confirm(response.data.detail);
            if (confirm) {
              createUserLecture(ground.lectureId);
              alert('내가 수강하는 강의 등록 완료 되었습니다.');
              window.location.reload();
            }
          }
        });
    } else {
      cancelUserGround().then(() => {
        alert('그라운드 참여 취소 처리 되었습니다');
        window.location.reload();
      });
    }
  };
  return (
    <Card>
      <Title>{ground.groundTitle}</Title>
      <Subtitle>
        강의명 :
        {ground.lectureTitle}
      </Subtitle>
      <Subtitle>
        강사 :
        {ground.instructor}
      </Subtitle>
      <Paragraph>
        <Content>{ground.information}</Content>
      </Paragraph>
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
            최소 인원:
            {' '}
            {ground.minCapacity}
            {' '}
          </span>
        </IconText>
        <IconText>
          <FontAwesomeIcon icon={faUsers} className="mr-2" />
          <span>
            현재 참여 인원:
            {' '}
            {ground.numOfParticipants}
            {' '}
          </span>
        </IconText>
        <IconText>
          <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
          <span>
            {ground.startAt}
            {' '}
            -
            {ground.endAt}
          </span>
        </IconText>
        <IconText>
          {ground.status === groundStatus.standby && (
          <button
            className="bg-gray-200 p-2 rounded-2xl hover:bg-gray-300"
            onClick={ClickHandle}
          >
            {available ? '참여하기' : '참여취소'}
          </button>
          )}
        </IconText>
      </div>
      {/* <Info> */}
      {/*  <p>그라운드 미션 정보</p> */}
      {/* </Info> */}
    </Card>
  );
}

export default GroundDetailCard;
