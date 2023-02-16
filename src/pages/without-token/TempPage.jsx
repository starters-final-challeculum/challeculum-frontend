import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

// import Cookies from 'js-cookie';

export function TempPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    localStorage.setItem('Authorization', `${searchParams.get('grantType')} ${searchParams.get('accessToken')}`);
    localStorage.setItem('RefreshToken', searchParams.get('refreshToken'));
    navigate('/');
  }, []);
  return (
    <>
      TempPage
    </>
  );
}
