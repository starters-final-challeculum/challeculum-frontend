import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../../common/axios-config';

function GroundDetailContainer() {
  const param = useParams();
  const [ground, setGround] = useState({});

  const getGround = () => {
    api.get(`/ground/${param.groundId}`).then((response) => {
      setGround(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    getGround();
  }, []);

  // 참여 신청시 userGround table 생성, 취소 신청시 is_attending false 변경
  return (
    <div>
      그라운드 상세 조회 화면 :
      <div>
        제목 :
        {ground.title}
      </div>
      <div>카테고리 정보 :</div>
      <div>
        강의정보 :
        {ground.information}
      </div>
      <div>
        level:
        {ground.level}
      </div>
      <div>
        시작일 :
        {ground.startAt}
      </div>
      <div>
        종료일 :
        {ground.endAt}
      </div>
      <div>미션 현황 보기 - 리스트와 달성율</div>
      <button type="submit">참여하기/취소하기</button>
      <div>
        남은 자리 :
        {ground.maxCapacity}
      </div>
    </div>
  );
}

export default GroundDetailContainer;
