import React from 'react';
import { LoginForm } from '../../components/public/loginPage/LoginForm';
import { withLayout } from '../../components/common/layout/Layout';
import { GoogleLoginButton } from '../../components/public/loginPage/GoogleLoginButton';
import { NaverLoginButton } from '../../components/public/loginPage/NaverLoginButton';

function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
        <LoginForm />
        <GoogleLoginButton />
        <NaverLoginButton />
      </div>
    </div>
  );
}

export default withLayout(LoginPage);
