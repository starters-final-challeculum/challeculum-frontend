import React from 'react';

export function CategoryTabBar({ tabs, activeTab, onTabClick }) {
  const handleClick = (tab) => {
    onTabClick(tab);
  };

  const isActivated = (tab) => activeTab === tab;

  return (
    <div className="flex mb-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`flex-grow py-2 px-4 border-b-2 border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-500 focus:outline-none ${
            isActivated(tab) ? 'border-indigo-500 text-indigo-600' : ''
          }`}
          onClick={() => handleClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
