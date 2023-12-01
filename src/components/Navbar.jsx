import React, { useState } from "react";
import styled from "styled-components";
import { FaShoppingCart, FaAngleDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { updateGreeting } from "../redux/actions/action.js";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: rgb(30, 99, 63);
  color: white;
  height: 20px;
  font-family: "Inter", sans-serif;
`;

const LeftSection = styled.div`
  margin-left: 30px;
  display: flex;
  align-items: center;
`;

const RightSection = styled.div`
  margin-right: 30px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
`;

const Section = styled.div`
  margin-right: 1rem;
  cursor: pointer;
`;

const Modal = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 20%;
  border-radius: 10px;
`;

const CloseButton = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  margin-top: -8px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

const GreetingDiv = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

function Navbar() {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting.greeting);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newGreeting, setNewGreeting] = useState("");

  const handleGreetingUpdate = () => {
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    setNewGreeting(e.target.value);
  };

  const handleUpdate = () => {
    dispatch(updateGreeting(newGreeting));
    setIsModalOpen(false);
    setNewGreeting("");
  };

  return (
    <Container>
      <LeftSection>
        <Section>Reeco</Section>
        <Section>Store</Section>
        <Section>Orders</Section>
        <Section>Analytics</Section>
      </LeftSection>
      <RightSection>
        <FaShoppingCart size={20} color="white" />
        <GreetingDiv onClick={handleGreetingUpdate}>
          Hello, {greeting} <FaAngleDown /> 
        </GreetingDiv>
        <Modal isOpen={isModalOpen}>
          <ModalContent>
            <CloseButton onClick={() => setIsModalOpen(false)}>
              &times;
            </CloseButton>
            <input
              type="text"
              value={newGreeting}
              onChange={handleInputChange}
              placeholder="Enter new username"
            />
            <button onClick={handleUpdate}>Update</button>
          </ModalContent>
        </Modal>
      </RightSection>
    </Container>
  );
}

export default Navbar;
