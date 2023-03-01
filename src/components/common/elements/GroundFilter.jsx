import React from 'react';
import { useGlobalContext } from '../../../hooks/useGlobalContext';
import { groundStatus, platforms } from '../../../common/global-constants';

export function GroundFilter() {
  const context = useGlobalContext();

  const handleFilterChange = (key, value) => {
    const filterMap = new Map([
      ['status', context.status],
      ['platform', context.platform],
      ['category_name', context.categoryName],
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
          <option value={platforms.udemy}>유데미</option>
          <option value={platforms.inflearn}>인프런</option>
          <option value={platforms.coursera}>코세라</option>
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
          <option value="">전체</option>
          <option value={groundStatus.standby}>모집중</option>
          <option value={groundStatus.ongoing}>진행중</option>
          <option value={groundStatus.completed}>종료됨</option>
        </select>
      </div>
    </>
  );
}
