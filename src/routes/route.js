import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Reeco from '../components/Reeco';
import Store from '../components/Store';
import Order from '../components/Order';
import Analytics from '../components/Analytics';

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/reeco" element={<Reeco />} />
      <Route path="/store" element={<Store />} />
      <Route path="/order" element={<Order />} />
      <Route path="/analytics" element={<Analytics />} />
    </Routes>
  );
}

export default RoutesComponent;
