import React from 'react';
import Container from '../../components/common/layout/Container';
import GroundForm from '../../components/private/createGroundPage/GroundForm';
import { withLayout } from '../../components/common/layout/Layout';

function CreateGroundPage() {
  return (
    <Container>
      <GroundForm />
    </Container>
  );
}
export default withLayout(CreateGroundPage);
