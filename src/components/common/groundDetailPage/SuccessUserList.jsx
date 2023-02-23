import React from 'react';
import tw from 'tailwind-styled-components';
import { UserRow } from './UserRow';

const Container = tw.div`w-full h-80 overflow-y-auto bg-gray-700`;

const List = tw.ul`divide-y divide-gray-600`;

export function SuccessUserList({ ground, fetchSuccessUserList }) {
  const users = fetchSuccessUserList();
  return (
    <Container>
      <List>
        {users.map(({ nickname, missionScore }, index) => (
          <UserRow key={index} nickname={nickname} missionScore={missionScore} />
        ))}
      </List>
    </Container>
  );
}
