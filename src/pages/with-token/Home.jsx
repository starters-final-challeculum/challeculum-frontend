import React from 'react';
import Layout from '../../components/Layout';
import CurrentGround from '../../components/CurrentGround';
import Search from '../../components/Search';
import GroundList from '../../components/GroundList';

function Home() {
  return (
    <Layout>
      <a href="/login">로그인</a>
      <a href="/register">회원가입</a>
      <CurrentGround />
      <Search />
      <GroundList />
    </Layout>
  );
}
export default Home;
