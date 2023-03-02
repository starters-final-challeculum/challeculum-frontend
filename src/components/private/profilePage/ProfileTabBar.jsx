import React, { useState } from 'react';
import MyInfo from './MyInfo';
import GroundListByMe from './GroundListByMe';
import MyGroundList from './MyGroundList';
import MyLectureList from './MyLectureList';
import AddMyLecture from './AddMyLecture';
import { groundStatus } from '../../../common/global-constants';
import GroundMissionList from '../../common/groundDetailPage/GroundMissionList';
import useFetchData from '../../../hooks/useFetchData';

function ProfileTabBar() {
  const fetchMissionList = () => useFetchData('/mission/ongoing'); // checked
  const tabs = ['진행중 그라운드', '오늘의 미션', '대기중 그라운드', '개설한 그라운드', '내 강의', '내 강의 등록하기', '내 정보'];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="flex mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`flex-grow py-2 px-4 border-transparent text-gray-500 hover:text-black focus:outline-none rounded-3xl m-2 ${
              activeTab === tab ? 'border-gray-900 text-black text-2xl font-medium bg-gray-200 rounded-3xl' : ''
            }`}
            onClick={() => handleClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {activeTab === '진행중 그라운드' && <MyGroundList />}
        {activeTab === '오늘의 미션' && <GroundMissionList status={groundStatus.ongoing} fetchMissionList={fetchMissionList} />}
        {activeTab === '대기중 그라운드' && <MyGroundList status={groundStatus.standby} />}
        {activeTab === '개설한 그라운드' && <GroundListByMe />}
        {activeTab === '내 강의' && <MyLectureList />}
        {activeTab === '내 강의 등록하기' && <AddMyLecture />}
        {activeTab === '내 정보' && <MyInfo />}

      </div>
    </div>
  );
}

export default ProfileTabBar;
