import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";

const HeaderContainer = styled.div`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
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

const Detailed = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Inter", sans-serif;
  margin-bottom: 10px;
`;

const Left = styled.div``;
const Right = styled.div`
  margin-right: 30px;
`;

const BackButton = styled.button`
  padding: 8px 16px;
  margin-right: 10px;
  font-size: 14px;
  color: #4caf50;
  background-color: #f0f0f0;
  border: 1px solid #4caf50;
  border-radius: 20px;
  font-weight: 500;
  cursor: pointer;
`;

const ApproveButton = styled.button`
  padding: 9px 16px;
  font-size: 14px;
  background-color: rgb(30, 99, 63);
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
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
        <Link
          to="/order"
          style={{ textDecoration: "none", color: "inherit" }}
          css={`
            &:hover {
              text-decoration: underline;
            }
          `}
        >
          Orders
        </Link>{" "}
        {orderId ? <ArrowIcon /> : ""}
        {orderId && (
          <Link style={{ fontSize: "13px", color: "black" }}>
            Order {orderId}
          </Link>
        )}
      </TopNav>
      {orderId && (
        <Detailed>
          <Left>
            <OrderIdContainer>
              <OrderId>Order {orderId}</OrderId>
            </OrderIdContainer>
          </Left>
          <Right>
            <BackButton>
              <Link
                to="/order"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Back
              </Link>
            </BackButton>
            <ApproveButton>Approve Order</ApproveButton>
          </Right>
        </Detailed>
      )}
    </HeaderContainer>
  );
}

export default Header;
