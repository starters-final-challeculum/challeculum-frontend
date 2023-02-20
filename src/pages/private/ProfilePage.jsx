import React from 'react';
import { withLayout } from '../../components/common/layout/Layout';
import ProfileTabBar from '../../components/private/profilePage/ProfileTabBar';
import Cards from '../../components/private/profilePage/Cards';

function ProfilePage() {
  return (
    <>
      <Cards />
      <ProfileTabBar />
    </>

  );
}
export default withLayout(ProfilePage);
