import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GroundDetailPage from './GroundDetailPage';
import CreateGroundPage from './CreateGroundPage';
import Home from './Home';

function WithTokenRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/groundDetail" element={<GroundDetailPage />} />
        <Route path="/createGround" element={<CreateGroundPage />} />
        {/* <Route element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default WithTokenRouter;
