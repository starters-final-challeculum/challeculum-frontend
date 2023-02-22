import React from 'react';
import MyGroundCardList from '../../components/common/mainPage/MyGroundCardList';
import GroundList from '../../components/common/mainPage/GroundList';
import { withLayout } from '../../components/common/layout/Layout';
import { CategoryTabBar } from '../../components/common/mainPage/CategoryTabBar';
import { useGlobalContext } from '../../hooks/useGlobalContext';

function MainPage() {
  const categoryMap = new Map();
  categoryMap.set('1', 'CATEGORY_IT');
  categoryMap.set('2', 'CATEGORY_LANGUAGE');
  categoryMap.set('3', 'CATEGORY_DESIGN');
  categoryMap.set('4', 'CATEGORY_MARKETING');
  categoryMap.set('5', 'CATEGORY_SCHOOL');
  categoryMap.set('6', 'CATEGORY_CERTIFICATION');

  const isAuthenticated = !!localStorage.getItem('Authorization');
  const context = useGlobalContext();

  const handleTabClick = (categoryId) => {
    const filterMap = new Map([
      ['status', context.status],
      ['platform', context.platform],
      ['category_id', categoryId],
    ]);
    context.setFilter(context.generateFilterString(filterMap));
    context.setCategoryId(categoryId);
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
        activeCategory={context.categoryId}
        onTabClick={handleTabClick}
      />
      <GroundList />
    </div>
  );
}

export default withLayout(MainPage);
