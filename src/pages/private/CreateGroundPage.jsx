import React from 'react';
import GroundForm from '../../components/private/createGroundPage/GroundForm';
import { withLayout } from '../../components/common/layout/Layout';

function CreateGroundPage() {
  return (
    <GroundForm />
  );
}
export default withLayout(CreateGroundPage);
