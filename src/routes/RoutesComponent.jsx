import React from "react";
import { Routes, Route } from "react-router-dom";
import Reeco from "../components/Reeco";
import Store from "../components/Store";
import Order from "../components/Order";
import Analytics from "../components/Analytics";
import OrderDetails from "../components/OrderDetails";

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Reeco />} />
      <Route path="/store" element={<Store />} />
      <Route path="/order" element={<Order />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/order-details/:orderId" element={<OrderDetails />} />
    </Routes>
  );
}

export default RoutesComponent;
