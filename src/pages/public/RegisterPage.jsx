import React from 'react';
import { RegisterForm } from '../../components/public/registerPage/RegisterForm';
import Container from '../../components/common/layout/Container';
import { withLayout } from '../../components/common/layout/Layout';

function RegisterPage() {
  return (
    <Container>
      <RegisterForm />
    </Container>
  );
}

export default withLayout(RegisterPage);
