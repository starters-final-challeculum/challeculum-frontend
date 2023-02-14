import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function WithTokenRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route key={1} path="/" exact element={<Home />} /> */}
        {/* <Route key={2} path="/login" exact element={<LoginPage />} /> */}
        {/* <Route key={3} path="/register" exact element={<RegisterPage />} /> */}
        {/* <Route element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
