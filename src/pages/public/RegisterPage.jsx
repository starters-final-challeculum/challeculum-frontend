import React from 'react';
import { withLayout } from '../../components/common/layout/Layout';
import { RegisterForm } from '../../components/public/registerPage/RegisterForm';

function RegisterPage() {
  return (
    <div className="m-20 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
        <RegisterForm />
      </div>
    </div>
  );
}

export default withLayout(RegisterPage);
