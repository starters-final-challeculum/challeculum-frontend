import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/with-token/Home';
import { LoginPage } from '../pages/without-token/LoginPage';
import { RegisterPage } from '../pages/without-token/RegisterPage';
import { TempPage } from '../pages/without-token/TempPage';
import { NotFound } from '../pages/error/404';

export default function WithoutTokenRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route key={1} path="/" exact element={<Home />} />
        <Route key={2} path="/login" exact element={<LoginPage />} />
        <Route key={3} path="/register" exact element={<RegisterPage />} />
        <Route key={4} path="/oauth/redirect" exact element={<TempPage />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
