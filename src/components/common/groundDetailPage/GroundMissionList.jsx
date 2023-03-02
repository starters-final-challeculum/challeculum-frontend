import React from 'react';
import tw from 'tailwind-styled-components';
import MissionCard from './MissionCard';

const ListContainer = tw.div`
  flex flex-nowrap overflow-x-auto  mx-4 bg-gray-200 p-4 rounded-lg mx-8
`;

const List = tw.div`
  flex space-x-4
`;

function GroundMissionList({ status, fetchMissionList }) {
  const missionList = fetchMissionList();
  return (
    <ListContainer>
      {missionList.length === 0 ? (<h1 className="text-3xl py-4">오늘의 미션이 없네요 🥹</h1>) : (
        <List>
          {missionList.map((mission) => (
            <MissionCard
              key={mission.missionId}
              status={status}
              mission={mission}
            />
          ))}
        </List>
      )}

    </ListContainer>
  );
}

export default GroundMissionList;
