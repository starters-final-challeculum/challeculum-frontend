import React from 'react';
import tw from 'tailwind-styled-components';
import MissionCard from './MissionCard';

const ListContainer = tw.div`
  flex flex-nowrap overflow-x-auto pb-4
`;

const List = tw.div`
  flex space-x-4
`;

function GroundMissionList({ ground, fetchMissionList, createUserMission }) {
  const missionList = fetchMissionList();
  return (
    <ListContainer>
      <List>
        {missionList.map((mission) => (
          <MissionCard
            key={mission.id}
            ground={ground}
            mission={mission}
            createUserMission={createUserMission}
          />
        ))}
      </List>
    </ListContainer>
  );
}

export default GroundMissionList;
