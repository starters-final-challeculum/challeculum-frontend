import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { withLayout } from '../../components/common/layout/Layout';
import api from '../../common/axios-config';
import AdminTabBar from '../../components/private/adminPage/AdminTabBar';

function AdminPage() {
  const [info, setInfo] = useState({});
  const navigate = useNavigate();

  const getInfo = () => {
    api.get('/user').then((response) => {
      setInfo(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    getInfo();
  }, []);

  if (info.role !== 'ROLE_ADMIN') {
    navigate('/');
    return null;
  }

  return (
    <>
      <div className="text-2xl">
        안녕하세요, 관리자
        {' '}
        {info.nickname}
        님!
      </div>
      <br />
      <AdminTabBar />
    </>

  );
}
export default withLayout(AdminPage);
