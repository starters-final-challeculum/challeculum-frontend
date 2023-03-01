import React from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from '../../components/public/loginPage/LoginForm';
import { withLayout } from '../../components/common/layout/Layout';
import { GoogleLoginButton } from '../../components/public/loginPage/GoogleLoginButton';
import { NaverLoginButton } from '../../components/public/loginPage/NaverLoginButton';

function LoginPage() {
  return (
    <div className="m-20 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
        <LoginForm />
        <GoogleLoginButton />
        <NaverLoginButton />
        <div className="text-center mt-8">
          계정이 없으신가요 ?
          <Link to="/register" className="text-lg text-blue-700"> 가입하기</Link>
        </div>
      </div>
    </div>
  );
}

export default withLayout(LoginPage);
