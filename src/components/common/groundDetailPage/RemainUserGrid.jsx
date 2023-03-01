import React from 'react';

import tw from 'tailwind-styled-components';
import { GridUserCard } from './GridUserCard';
import { dummyUsers } from '../../../common/mock-datas';

const Container = tw.div`max-h-96 overflow-y-auto bg-gray-300 p-4 rounded-2xl mb-8`;

const Grid = tw.div`grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5`;

export function RemainUserGrid({ fetchUserList, fetchReward }) {
  const users = fetchUserList();
  const reward = fetchReward();
  return (
    <Container>
      <div className="py-2 px-4 rounded-lg font-medium bg-gray-600 mb-4 w-1/5 text-white">
        예상 획득 포인트 :
        {reward}
        {' '}
        Point
      </div>
      <Grid>
        {users.map(({ username, isSuccess }, index) => (
          <GridUserCard key={index} username={username} success={isSuccess} />
        ))}
      </Grid>
    </Container>

  );
}
