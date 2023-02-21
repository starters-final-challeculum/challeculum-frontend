import React from 'react';
import Container from '../../components/common/layout/Container';
import CurrentGround from '../../components/common/mainPage/MyGroundCardList';
import SearchBar from '../../components/common/mainPage/SearchBar';
import GroundList from '../../components/common/mainPage/GroundList';
import DetailTags from '../../components/common/mainPage/DetailTags';
import { withLayout } from '../../components/common/layout/Layout';

function PublicMainPage() {
  return (
    <Container>
      <h1>Public</h1>
      <a href="/login">로그인</a>
      <a href="/register">회원가입</a>
      <a href="/private/ProfilePage.jsx">프로필</a>
      <CurrentGround />
      <SearchBar />
      <DetailTags />
      <GroundList />
    </Container>
  );
}
export default withLayout(PublicMainPage);
