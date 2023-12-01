import React from "react";
import styled from "styled-components";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import OrderDetails from "./OrderDetails";


const OrderContainer = styled.div`
  margin-top: 20px;
`;

const OrderNumber = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 70%;
  margin: auto;
  cursor: pointer;
  font-family: "Inter", sans-serif;
`;

const ArrowIcon = styled(RiArrowRightSLine)`
  font-size: 20px;
`;

const OrderNumberContainer = styled.div`
  display: grid;
  grid-row-gap: 10px;
`;

function Order() {
  const navigate = useNavigate();

  const orders = [
    "23331ABC",
    "23332DEF",
    "23333GHI",
    "23333JKL",
    "23333MNO",
    "23333PQR",
    "23333STU",
    "23333VWX",
    "23333XYZ",
  ];

  const handleOrderClick = (orderId) => {
    navigate(`/order-details/${orderId}`);
  };

  return (
    <div>
     <Header/>
      <OrderContainer>
        <OrderNumberContainer>
          {orders.map((order, index) => (
            <div key={index} onClick={() => handleOrderClick(order)}>
              <OrderNumber>
                Order {order}
                <ArrowIcon />
              </OrderNumber>
            </div>
          ))}
        </OrderNumberContainer>
      </OrderContainer>
    </div>
  );
}

export default Order;
