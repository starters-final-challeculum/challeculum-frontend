import React from 'react';
import tw from 'tailwind-styled-components/';
import { FaUserCircle } from 'react-icons/fa';
import { GiLaurelCrown } from 'react-icons/gi';

const ListItem = tw.li`flex items-center justify-between py-4 px-6`;
const UserIcon = tw(FaUserCircle)`text-3xl mr-4 text-gray-500`;
const CrownIcon = tw(GiLaurelCrown)`text-3xl mr-4 text-yellow-500`;

const Nickname = tw.div`text-lg font-bold text-white`;
const MissionScore = tw.div`text-sm text-gray-400`;

export function UserRow({ nickname, missionScore }) {
  return (
    <ListItem>
      <div className="flex items-center">
        <UserIcon />
        <div>
          <Nickname>{nickname}</Nickname>
          <MissionScore>{`Mission Score: ${missionScore}`}</MissionScore>
        </div>
      </div>
      <CrownIcon />
    </ListItem>
  );
}
