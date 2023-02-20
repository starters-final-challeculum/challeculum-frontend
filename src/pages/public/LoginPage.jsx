import React from 'react';
import { LoginForm } from '../../components/public/loginPage/LoginForm';
import { withLayout } from '../../components/common/layout/Layout';
import { GoogleLoginButton } from '../../components/public/loginPage/GoogleLoginButton';
import { NaverLoginButton } from '../../components/public/loginPage/NaverLoginButton';

function LoginPage() {
  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8 mx-auto w-1/2">
      <LoginForm />
      <GoogleLoginButton />
      <NaverLoginButton />
    </div>
  );
}

export default withLayout(LoginPage);
