import React, { useState } from 'react';
import UserTab from './UserTab';
import GroundTab from './GroundTab';
import MissionTab from './MissionTab';
import LectureTab from './LectureTab';
import CommentTab from './CommentTab';

function AdminTabBar() {
  const tabs = ['유저', '그라운드', '미션', '강의', '댓글'];
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
            className={`flex-grow py-2 px-4 border-b-2 border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-500 focus:outline-none ${
              activeTab === tab ? 'border-gray-900 text-black-900 text-xl font-medium' : ''
            }`}
            onClick={() => handleClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {activeTab === '유저' && <UserTab />}
        {activeTab === '그라운드' && <GroundTab />}
        {activeTab === '미션' && <MissionTab />}
        {activeTab === '강의' && <LectureTab />}
        {activeTab === '댓글' && <CommentTab />}
      </div>
    </div>
  );
}

export default AdminTabBar;
