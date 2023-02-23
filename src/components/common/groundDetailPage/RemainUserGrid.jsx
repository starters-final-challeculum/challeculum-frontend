import React from 'react';

import tw from 'tailwind-styled-components';
import { GridUserCard } from './GridUserCard';
import { dummyUsers } from '../../../common/mock-datas';

const Container = tw.div`max-h-80 overflow-y-auto bg-gray-700 p-4`;

const Grid = tw.div`grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5`;

export function RemainUserGrid({ ground, fetchUserList, fetchReward }) {
  const users = fetchUserList();
  const reward = fetchReward();
  return (
    <>
      <Container>
        <Grid>
          {users.map(({ username, success }, index) => (
            <GridUserCard key={index} username={username} success={success} />
          ))}
        </Grid>
      </Container>
      <div>{!!users}</div>
      <div>{reward}</div>
    </>

  );
}
