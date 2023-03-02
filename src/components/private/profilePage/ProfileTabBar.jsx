import React, { useState } from 'react';
import MyInfo from './MyInfo';
import GroundListByMe from './GroundListByMe';
import MyGroundList from './MyGroundList';
import MyLectureList from './MyLectureList';
import AddMyLecture from './AddMyLecture';

function ProfileTabBar() {
  const tabs = ['내 정보', '내가 만든 그라운드', '내가 참여중인 그라운드', '현재 수강중인 강의', '강의 등록하기'];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="flex">
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
        {activeTab === '내 정보' && <MyInfo />}
        {activeTab === '내가 만든 그라운드' && <GroundListByMe />}
        {activeTab === '내가 참여중인 그라운드' && <MyGroundList />}
        {activeTab === '현재 수강중인 강의' && <MyLectureList />}
        {activeTab === '강의 등록하기' && <AddMyLecture />}

      </div>
    </div>
  );
}

export default ProfileTabBar;
