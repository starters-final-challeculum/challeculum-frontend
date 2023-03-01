import React from 'react';
import MyGroundCardList from '../../components/common/mainPage/MyGroundCardList';
import GroundList from '../../components/common/mainPage/GroundList';
import { withLayout } from '../../components/common/layout/Layout';
import { CategoryTabBar } from '../../components/common/mainPage/CategoryTabBar';
import { useGlobalContext } from '../../hooks/useGlobalContext';
import { categoryMap } from '../../common/global-constants';
import useFetchData from '../../hooks/useFetchData';

function MainPage() {
  const context = useGlobalContext();
  const isAuthenticated = !!localStorage.getItem('Authorization');
  const groundList = isAuthenticated ? useFetchData('/ground/me') : undefined;

  const handleTabClick = (categoryName) => {
    const filterMap = new Map([
      ['status', context.status],
      ['platform', context.platform],
      ['category_name', categoryName || ''],
    ]);
    context.setFilter(context.generateFilterString(filterMap));
    context.setCategoryName(categoryName);
  };

  return (
    <div>
      { groundList === [] ? (
        <div className="mb-8">
          <MyGroundCardList groundList={groundList} />
        </div>
      ) : null}
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
