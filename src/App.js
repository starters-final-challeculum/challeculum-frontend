import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { publicRoutes, PublicRoutes } from './router/PublicRoutes';
import { privateRoutes, PrivateRoutes } from './router/PrivateRoutes';
import { commonRoutes, CommonRoutes } from './router/CommonRoutes';

export default function App() {
  const isAuthenticated = !!localStorage.getItem('Authorization');

  return (
    <BrowserRouter>
      <CommonRoutes routes={commonRoutes} />
      <PrivateRoutes routes={privateRoutes} isAuthenticated={isAuthenticated} redirectPath="/login" />
      <PublicRoutes routes={publicRoutes} isAuthenticated={isAuthenticated} />
    </BrowserRouter>
  );
}
