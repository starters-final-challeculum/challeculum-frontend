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
          className={`flex-grow py-2 px-4 border-transparent text-gray-500 hover:text-black focus:outline-none rounded-3xl m-2${
            isActivated(value.id) ? 'border-gray-900 text-black text-2xl font-medium bg-gray-200 rounded-3xl' : ''
          }`}
          onClick={() => handleClick(value.id)}
        >
          {value.name}
        </button>
      ))}
    </div>
  );
}
