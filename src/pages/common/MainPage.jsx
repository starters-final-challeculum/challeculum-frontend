import React, { useState } from 'react';
import MyGroundCardList from '../../components/common/mainPage/MyGroundCardList';
import GroundList from '../../components/common/mainPage/GroundList';
import { withLayout } from '../../components/common/layout/Layout';
import { CategoryTabBar } from '../../components/common/mainPage/CategoryTabBar';

function MainPage() {
  const categoryMap = new Map();
  categoryMap.set('CATEGORY_IT', '0');
  categoryMap.set('CATEGORY_LANGUAGE', '1');
  categoryMap.set('CATEGORY_DESIGN', '2');
  categoryMap.set('CATEGORY_MARKETING', '3');
  categoryMap.set('CATEGORY_SCHOOL', '4');
  categoryMap.set('CATEGORY_CERTIFICATION', '5');
  const keys = [...categoryMap.keys()];

  const [category, setCategory] = useState(keys[0]);
  const isAuthenticated = !!localStorage.getItem('Authorization');

  const handleTabClick = (tab) => {
    setCategory(tab);
  };

  return (
    <div>
      <CategoryTabBar tabs={keys} activeCategory={category} onTabClick={handleTabClick} />
      { isAuthenticated
        && (
        <div className="mb-8">
          <h3 className="text-2xl my-8"> 참여중인 그라운드 </h3>
          <MyGroundCardList />
        </div>
        )}
      <GroundList />
    </div>
  );
}

export default withLayout(MainPage);
