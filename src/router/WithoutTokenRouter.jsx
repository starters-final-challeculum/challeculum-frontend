import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { NotFound } from '../pages/error/404';
import { LoginPage } from '../pages/without-token/LoginPage';
import { RegisterPage } from '../pages/without-token/RegisterPage';
import { OAuthRedirectPage } from '../pages/without-token/OAuthRedirectPage';
import Home from '../pages/with-token/Home';

export default function WithoutTokenRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route key={1} path="/" exact element={<Home />} />
        <Route key={2} path="/login" exact element={<LoginPage />} />
        <Route key={3} path="/register" exact element={<RegisterPage />} />
        <Route key={4} path="/oauth/redirect" exact element={<OAuthRedirectPage />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
