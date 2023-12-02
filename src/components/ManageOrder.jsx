import React, { useState } from "react";
import styled from "styled-components";
import { BsShieldFillCheck } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

const ManageOrderContainer = styled.div`
  width: 75%;
  margin: auto;
  min-height: 50px;
  height: auto;
  overflow: auto;
  margin-top: 30px;
  box-shadow: 0px 1px 1px rgba(9, 30, 66, 0.25),
    0px 0px 1px 1px rgba(9, 30, 66, 0.13);
`;

const SearchAndAdd = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
  padding-left: 30px;
  justify-content: space-between;

  input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 40px;
    margin-right: 10px;
    width: 300px;
    font-size: 14px;
  }

  button {
    padding: 8px 16px;
    margin-right: 50px;
    font-size: 14px;
    color: #4caf50;
    background-color: #f0f0f0;
    border: 1px solid #4caf50;
    border-radius: 20px;
    font-weight: 500;
    cursor: pointer;
    margin-bottom:10px;
  }
`;

const Right = styled.div`
`;

const Left = styled.div`
  /* Add styles for the Left component */
  display:flex;
`;

const SearchIcon = styled.div`
  position: absolute;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  color: #ccc;
`;

const Icon = styled.div`

`

function ManageOrder() {
  const [searchQuery, setSearchQuery] = useState(""); 
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <ManageOrderContainer>
      <SearchAndAdd>
        <Right>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleInputChange}
            />
            <SearchIcon>
              <FaSearch style={{ position: "absolute", top: "50%", transform: "translateY(-50%)" }} />
            </SearchIcon>
          </div>
        </Right>

        <Left>
          <button>Add Item</button>
          <Icon>
          <BsShieldFillCheck style={{ marginRight: "40px", fontSize: "30px"}} />
          </Icon>
        </Left>
      </SearchAndAdd>
    </ManageOrderContainer>
  );
}

export default ManageOrder;
