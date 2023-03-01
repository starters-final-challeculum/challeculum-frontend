import React from 'react';

export function CategoryTabBar({ tabs, activeCategory, onTabClick }) {
  const handleClick = (categoryName) => {
    onTabClick(categoryName);
  };

  const isActivated = (category) => activeCategory === category;

  return (
    <div className="flex mb-4">
      {Array.from(tabs.entries()).map(([key, value]) => (
        <button
          key={key}
          value={value.id}
          className={`flex-grow py-2 px-4 border-b-2 border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-500 focus:outline-none ${
            isActivated(key) ? 'border-gray-900 text-black-900 text-xl font-medium' : ''
          }`}
          onClick={() => handleClick(value.id)}
        >
          {value.name}
        </button>
      ))}
    </div>
  );
}
