import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProfilePage from '../pages/private/ProfilePage';
import CreateGroundPage from '../pages/private/CreateGroundPage';

export const privateRoutes = [
  {
    path: '/profile',
    component: ProfilePage,
    props: [],
  },
  {
    path: '/create-ground',
    component: CreateGroundPage,
    props: [],
  },
];
export function PrivateRoutes({
  isAuthenticated,
  redirectPath,
  routes,
  ...rest
}) {
  return (
    <Routes>
      {routes.map(({ path, component: Component, props }) => (
        <Route
          key={path}
          path={path}
          {...rest}
          element={
            isAuthenticated ? (
              <Component {...props} />
            ) : (
              <Navigate to={{ pathname: redirectPath }} />
            )
          }
        />
      ))}
    </Routes>
  );
}
