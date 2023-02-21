import React, { useEffect, useState } from 'react';
import MyGroundCardList from '../../components/common/mainPage/MyGroundCardList';
import GroundList from '../../components/common/mainPage/GroundList';
import { withLayout } from '../../components/common/layout/Layout';
import { CategoryTabBar } from '../../components/common/mainPage/CategoryTabBar';
import { useSearch } from '../../hooks/useSearch';

function MainPage() {
  const categoryMap = new Map();
  categoryMap.set('CATEGORY_IT', '1');
  categoryMap.set('CATEGORY_LANGUAGE', '2');
  categoryMap.set('CATEGORY_DESIGN', '3');
  categoryMap.set('CATEGORY_MARKETING', '4');
  categoryMap.set('CATEGORY_SCHOOL', '5');
  categoryMap.set('CATEGORY_CERTIFICATION', '6');

  const isAuthenticated = !!localStorage.getItem('Authorization');
  const context = useSearch();

  const filterMap = new Map([
    ['status', context.status],
    ['platform', context.platform],
    ['category_id', context.category],
  ]);

  const handleTabClick = (tab) => {
    context.setCategory(tab);
    context.setFilter(context.generateFilterString(filterMap));
  };

  return (
    <div>
      { isAuthenticated
        && (
        <div className="mb-8">
          <h3 className="text-2xl my-8"> 참여중인 그라운드 </h3>
          <MyGroundCardList />
        </div>
        )}
      <CategoryTabBar
        tabs={categoryMap}
        activeCategory={context.category}
        onTabClick={handleTabClick}
      />
      <GroundList />
    </div>
  );
}

export default withLayout(MainPage);
