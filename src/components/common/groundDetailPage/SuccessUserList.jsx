import React from 'react';
import tw from 'tailwind-styled-components';
import { UserRow } from './UserRow';

const Container = tw.div`w-full h-80 overflow-y-auto bg-gray-700 rounded-lg`;

const List = tw.ul`divide-y divide-gray-600`;

export function SuccessUserList({ fetchSuccessUserList }) {
  const users = fetchSuccessUserList();
  return (
    <Container>
      <List>
        {users.map(({ username, nickname, missionScore }, index) => (
          <UserRow key={index} username={username} nickname={nickname} missionScore={missionScore} />
        ))}
      </List>
    </Container>
  );
}
