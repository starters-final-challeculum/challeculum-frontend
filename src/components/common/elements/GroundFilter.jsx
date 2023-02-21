import React, { useState } from 'react';
import { useSearch } from '../../../hooks/useSearch';

export function GroundFilter() {
  const context = useSearch();
  const [status, setStatus] = useState('');
  const [platform, setPlatform] = useState('');
  const [category, setCategory] = useState('');

  const filterMap = new Map([
    ['status', status],
    ['platform', platform],
    ['category', category],
  ]);
  const generateFilterString = (map) => {
    let filterString = '';
    map.forEach((filterValue, filterKey) => {
      if (filterValue !== '') {
        if (filterString !== '') {
          filterString += ',';
        }
        filterString += `${filterKey}:${filterValue}`;
      }
    });
    return filterString;
  };

  const handleFilterChange = (key, value) => {
    if (value === '') {
      filterMap.delete(key);
    } else {
      filterMap.set(key, value);
    }
    context.setFilter(generateFilterString(filterMap));
  };

  return (
    <>
      <div className="relative mx-3">
        <select
          onChange={(event) => {
            handleFilterChange('platform', event.target.value);
            setPlatform(event.target.value);
          }}
          value={platform}
          className="rounded-full px-2 py-3 text-gray-800 font-medium focus:outline-none hover:bg-gray-100"
        >
          <option value="">플랫폼</option>
          <option value="유데미">유데미</option>
          <option value="인프런">인프런</option>
        </select>
      </div>
      <div className="relative mx-3">
        <select
          onChange={(event) => {
            handleFilterChange('category', event.target.value);
            setCategory(event.target.value);
          }}
          value={category}
          className="rounded-full px-2 py-3 text-gray-800 font-medium focus:outline-none hover:bg-gray-100"
        >
          <option value="">전체</option>
          <option value="IT">IT</option>
          <option value="LANGUAGE">언어</option>
          <option value="DESIGN">디자인</option>
          <option value="MARKETING">마케팅</option>
          <option value="SCHOOL">중,고등</option>
          <option value="CERTIFICATION">자격증</option>
        </select>
      </div>
      <div className="relative mx-2">
        <select
          onChange={(event) => {
            handleFilterChange('status', event.target.value);
            setStatus(event.target.value);
          }}
          value={status}
          className="rounded-full px-2 py-3 text-gray-800 font-medium focus:outline-none hover:bg-gray-100"
        >
          <option value="waiting">모집중</option>
          <option value="ongoing">진행중</option>
          <option value="completed">종료됨</option>
        </select>
      </div>
    </>
  );
}
