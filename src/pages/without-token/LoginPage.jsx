import React from 'react';
import { LoginForm } from '../../components/LoginForm';

export function LoginPage() {
  return (
    <div>
      <LoginForm />
      <a href="http://localhost:8090/oauth2/authorization/google?redirect_uri=http://localhost:3000/oauth/redirect">구글 로그인</a>
      <br />
      <a href="http://localhost:8090/oauth2/authorization/naver?redirect_uri=http://localhost:3000/oauth/redirect">네이버 로그인</a>
      <br />
    </div>
  );
}
