import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { NotFound } from '../error/404';
import { LoginPage } from './LoginPage';
import { RegisterPage } from './RegisterPage';
import { OAuthRedirectPage } from './OAuthRedirectPage';

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
