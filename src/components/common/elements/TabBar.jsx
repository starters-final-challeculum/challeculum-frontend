import React, { useState } from 'react';

function TabBar({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`flex-grow py-2 px-4 border-b-2 border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-500 focus:outline-none ${
            activeTab === tab ? 'border-indigo-500 text-indigo-600' : ''
          }`}
          onClick={() => handleClick(tab)}
        >
          {tab}
        </button>

      ))}
    </div>
  );
}

export default TabBar;
