import React from 'react';
import { useGlobalContext } from '../../../hooks/useGlobalContext';

export function GroundFilter() {
  const context = useGlobalContext();

  const handleFilterChange = (key, value) => {
    const filterMap = new Map([
      ['status', context.status],
      ['platform', context.platform],
      ['category_id', context.categoryId],
    ]);
    console.log(context.filter);
    if (value === '') {
      filterMap.delete(key);
    } else {
      filterMap.set(key, value);
    }
    context.setFilter(context.generateFilterString(filterMap));
  };

  return (
    <>
      <div className="relative mx-3">
        <select
          onChange={(event) => {
            handleFilterChange('platform', event.target.value);
            context.setPlatform(event.target.value);
          }}
          value={context.platform}
          className="rounded-full px-2 py-3 text-gray-800 font-medium focus:outline-none hover:bg-gray-100"
        >
          <option value="">플랫폼</option>
          <option value="UDEMY">유데미</option>
          <option value="INFLEARN">인프런</option>
          <option value="FASTCAMPUS">패스트캠퍼스</option>
        </select>
      </div>
      <div className="relative mx-2">
        <select
          onChange={(event) => {
            handleFilterChange('status', event.target.value);
            context.setStatus(event.target.value);
          }}
          value={context.status}
          className="rounded-full px-2 py-3 text-gray-800 font-medium focus:outline-none hover:bg-gray-100"
        >
          <option value="all">전체</option>
          <option value="standby">모집중</option>
          <option value="ongoing">진행중</option>
          <option value="completed">종료됨</option>
        </select>
      </div>
    </>
  );
}
