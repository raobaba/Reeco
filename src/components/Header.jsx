import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";

const HeaderContainer = styled.div`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  min-height: 50px;
  height: auto;
  overflow: auto;
  line-height: 40px;
`;

const TopNav = styled.h2`
  margin-left: 30px;
  padding-top: 10px;
  font-size: 16px;
  font-family: "Inter", sans-serif;
  display: flex;
  align-items: center;
`;

const ArrowIcon = styled(RiArrowRightSLine)`
  font-size: 23px;
  margin-left: 5px;
`;

const OrderId = styled.h4`
  font-size: 20px;
  margin-left: 20px; 
`;

const OrderIdContainer = styled.div`
  margin-left: 10px;
`;

function Header() {
  const location = useLocation();

  const extractOrderIdFromUrl = () => {
    const parts = location.pathname.split("/");
    const orderIdIndex = parts.findIndex((part) => part === "order-details");
    if (orderIdIndex !== -1 && orderIdIndex < parts.length - 1) {
      return parts[orderIdIndex + 1];
    }
    return null;
  };

  const orderId = extractOrderIdFromUrl();

  return (
    <HeaderContainer>
      <TopNav>
        <Link to="/order" style={{ textDecoration: "none", color: "inherit" }}>
          Orders
        </Link>{" "}
        {orderId ? <ArrowIcon /> : ""}
        {orderId && (
          <Link style={{ fontSize: "13px", color: "black" }}>
            Order {orderId}
          </Link>
        )}
      </TopNav>
      <OrderIdContainer>
        {orderId && <OrderId>Order {orderId}</OrderId>}
      </OrderIdContainer>
    </HeaderContainer>
  );
}

export default Header;
