import React from "react";
import styled from "styled-components";
import { RiArrowRightSLine } from "react-icons/ri";

const HeaderContainer = styled.div`
width: 100%;
box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
height: 50px;
-`;

const TopNav = styled.h2`
  margin-left:30px;
  padding-top:10px;
  font-family: "Inter", sans-serif;
`;

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
  const orders = ["23331ABC", "23332DEF", "23333GHI"];

  return (
    <div>
      <HeaderContainer>
        <TopNav>Orders</TopNav>
      </HeaderContainer>
      <OrderContainer>
        <OrderNumberContainer>
          {orders.map((order, index) => (
            <OrderNumber key={index}>
              Order {order}
              <ArrowIcon />
            </OrderNumber>
          ))}
        </OrderNumberContainer>
      </OrderContainer>
    </div>
  );
}

export default Order;
