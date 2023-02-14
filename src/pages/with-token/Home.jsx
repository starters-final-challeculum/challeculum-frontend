import React from 'react';
import Layout from '../../components/Layout';
import CurrentGround from '../../components/CurrentGround';
import Search from '../../components/Search';
import GroundList from '../../components/GroundList';

function Home() {
  return (
    <Layout>
      <CurrentGround />
      <Search />
      <GroundList />
    </Layout>
  );
}
export default Home;
