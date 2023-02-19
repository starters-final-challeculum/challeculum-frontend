import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/common/Home';
import NotFound from '../pages/error/NotFoundPage';
import MainPage from '../pages/common/MainPage';

export const commonRoutes = [
  {
    path: '/',
    component: Home,
    props: [],
  },
  {
    path: '/main',
    component: MainPage,
    props: [],
  },
  {
    path: '/not-found',
    component: NotFound,
    props: [],
  },
];

export function CommonRoutes({ routes, ...rest }) {
  return (
    <Routes>
      {routes.map(({ path, component: Component, props }) => (
        <Route key={path} path={path} element={<Component {...props} />} {...rest} />
      ))}
    </Routes>
  );
}
