import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/with-token/Home';
import GroundDetailPage from '../pages/with-token/GroundDetailPage';
import CreateGroundPage from '../pages/with-token/CreateGroundPage';
import { NotFound } from '../pages/error/404';
import Profile from '../pages/with-token/Profile';

function WithTokenRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/groundDetail/:groundId" element={<GroundDetailPage />} />
        <Route path="/createGround" element={<CreateGroundPage />} />
        <Route path="/profile" exact element={<Profile />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default WithTokenRouter;
