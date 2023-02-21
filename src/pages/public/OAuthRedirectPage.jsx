import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { withLayout } from '../../components/common/layout/Layout';

function OAuthRedirectPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    localStorage.setItem('Authorization', `${searchParams.get('grantType')} ${searchParams.get('accessToken')}`);
    localStorage.setItem('RefreshToken', searchParams.get('refreshToken'));
    navigate('/main');
  }, []);
  return (
    <> </>
  );
}

export default withLayout(OAuthRedirectPage);
