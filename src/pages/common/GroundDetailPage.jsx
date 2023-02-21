import React from 'react';
import GroundDetailContainer from '../../components/common/groundDetailPage/GroundDetailContainer';
import Container from '../../components/common/layout/Container';
import { withLayout } from '../../components/common/layout/Layout';

function GroundDetailPage() {
  return (
    <Container>
      <GroundDetailContainer />
    </Container>
  );
}
export default withLayout(GroundDetailPage);
