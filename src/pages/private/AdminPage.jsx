import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { withLayout } from '../../components/common/layout/Layout';
import api from '../../common/axios-config';
import AdminTabBar from '../../components/private/adminPage/AdminTabBar';

function AdminPage() {
  const [info, setInfo] = useState({});
  const [mission, setMission] = useState([]);
  const [waitingMissionCount, setWaitingMissionCount] = useState(0);
  const navigate = useNavigate();

  const getInfo = () => {
    api.get('/user').then((response) => {
      setInfo(response.data);
    });
  };

  const getMission = async () => {
    try {
      const response = await api.get('user/me/all');
      setMission(response.data);
      const count = response.data.filter((m) => m.isAccepted === 'WAITING').length;
      setWaitingMissionCount(count);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInfo();
    getMission();
  }, []);

  useEffect(() => {
    console.log(waitingMissionCount);
  }, [waitingMissionCount]);

  if (info.role !== 'ROLE_ADMIN') {
    navigate('/');
    return null;
  }

  return (
    <>
      <div className="text-2xl m-5">
        안녕하세요, 관리자
        {' '}
        {info.nickname}
        님!
        <p>
          오늘 검토 할 미션은
          {' '}
          {waitingMissionCount}
          개 입니다.
        </p>
      </div>
      <br />
      <AdminTabBar />
    </>

  );
}
export default withLayout(AdminPage);
