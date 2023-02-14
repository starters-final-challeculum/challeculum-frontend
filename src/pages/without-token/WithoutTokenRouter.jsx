import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';

export default function WithoutTokenRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route key={1} path="/" element={<Home />} /> */}
        {/* <Route key={2} path="/profile" element={<ProfilePage />} /> */}
        {/* <Route key={3} path="/ground/:id" element={<GroundDetailPage />} /> */}
        {/* <Route key={4} path="/create-ground" element={<CreateGroundPage />} /> */}
        {/* <Route element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
