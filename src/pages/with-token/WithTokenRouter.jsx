import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../without-token/Home';
import { NotFound } from '../error/404';

export default function WithTokenRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route key={1} path="/" element={<Home />} />
        {/* <Route key={2} path="/profile" element={<ProfilePage />} /> */}
        {/* <Route key={3} path="/ground/:id" element={<GroundDetailPage />} /> */}
        {/* <Route key={4} path="/create-ground" element={<CreateGroundPage />} /> */}
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
