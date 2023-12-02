import React from "react";
import Header from "./Header";
import Summary from "./Summary";
import ManageOrder from "./ManageOrder";

function OrderDetails() {
  return (
    <div>
      <Header />
      <Summary />
      <ManageOrder/>
    </div>
  );
}

export default OrderDetails;
