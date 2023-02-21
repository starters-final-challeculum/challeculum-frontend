import React from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';
import { useSearch } from '../../../hooks/useSearch';

export function Search({ onSearchButtonClick }) {
  const context = useSearch();
  const handleSortByToggle = () => {
    context.setSortBy((prevSortBy) => (prevSortBy === 'asc' ? 'desc' : 'asc'));
  };
  return (
    <>
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-1/2 mx-3">
        <input
          onChange={(event) => {
            context.setKeyword(event.target.value);
          }}
          type="text"
          className="w-full bg-gray-100 text-gray-800 font-medium focus:outline-none"
          placeholder="그라운드 검색"
          value={context.keyword}
        />
        <button
          className="text-gray-500 focus:outline-none ml-4"
          onClick={onSearchButtonClick}
        >
          <FaSearch />
        </button>
      </div>
      <div className="relative mx-2">
        <select
          onChange={(event) => {
            context.setOrderBy(event.target.value);
          }}
          value={context.orderBy}
          className="py-2 px-4 rounded-3xl font-medium hover:bg-gray-100"
        >
          <option value="created_at">최신순</option>
          <option value="deposit">예치금순</option>
          <option value="start_at">시작일순</option>
        </select>
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
          <FaBars />
        </span>
      </div>
      <div className="mr-4 mx-2">
        <button
          className="bg-gray-100 rounded-full px-4 py-2 text-gray-800 font-medium focus:outline-none"
          onClick={handleSortByToggle}
        >
          {context.sortBy === 'asc' ? '⬆️' : '⬇️'}
        </button>
      </div>
    </>
  );
}
