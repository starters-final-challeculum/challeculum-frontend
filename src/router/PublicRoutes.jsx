import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/public/LoginPage';
import RegisterPage from '../pages/public/RegisterPage';
import OAuthRedirectPage from '../pages/public/OAuthRedirectPage';

export const publicRoutes = [
  {
    path: '/login',
    component: LoginPage,
    props: [],
  },
  {
    path: '/register',
    component: RegisterPage,
    props: [],
  },
  {
    path: '/oauth/redirect',
    component: OAuthRedirectPage,
    props: [],
  },
];
export function PublicRoutes({
  isAuthenticated, routes, ...rest
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
              <Navigate to={{ pathname: '/main' }} />
            ) : (
              <Component {...props} />
            )
          }
        />
      ))}
    </Routes>
  );
}
