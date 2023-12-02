import React, { useState } from "react";
import styled from "styled-components";
import { BsShieldFillCheck } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Avocado from "../assets/Avocado Hass.jpg";

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
`;

const SearchInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 40px;
  margin-right: 10px;
  width: 300px;
  font-size: 14px;
`;

const SearchIcon = styled.div`
  position: absolute;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  color: #ccc;
`;

const SearchIconButton = styled(FaSearch)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const Icon = styled.div`
  margin-right: 40px;
  font-size: 30px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  font-family: "Inter", sans-serif;

  th,
  td {
    padding: 8px;
    text-align: left;
    border: none; /* Remove default border */
  }

  th {
    font-weight: 400;
  }

  tbody {
    font-size: 12px;
    font-weight: 300;
  }
  tbody td:nth-child(6) {
    background-color: #f5f5f5;
  }
  tbody button {
    border: none;
    text-decoration: underline;
    cursor: pointer;
  }
  div:last-child {
    word-break: break-word;
    max-width: 300px;
  }
`;

const Left = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductImage = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const AddButton = styled.button`
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

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
`;

const InputContainer = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`;

const ModalInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 5px;
`;

const AddModalButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  color: #fff;
  background-color: #4caf50;
  border: none;
  border-radius: 20px;
  font-weight: 500;
  cursor: pointer;
`;

const UrgencyModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const UrgencyModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  button {
    margin: 0 10px;
    padding: 8px 16px;
    cursor: pointer;
  }
`;

function ManageOrder() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isUrgencyModalOpen, setIsUrgencyModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [checked, setChecked] = useState(false);
  const [urgent, setUrgent] = useState(false);
  const [itemsList, setItemsList] = useState([]);
  const [currentItemIndex, setCurrentItemIndex] = useState(null);
  const [newItem, setNewItem] = useState({
    productName: "",
    brand: "",
    price: "",
    quantity: "",
    total: "",
    status: "",
  });

  const openUrgencyModal = (index) => {
    setCurrentItemIndex(index);
    setIsUrgencyModalOpen(true);
  };

  const closeUrgencyModal = () => {
    setIsUrgencyModalOpen(false);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalInputChange = (event, field) => {
    setNewItem({ ...newItem, [field]: event.target.value });
  };

  const handleAddItem = () => {
    setItemsList([...itemsList, newItem]);
    console.log("New item:", newItem);
    closeModal();
    setNewItem({
      productName: "",
      brand: "",
      price: "",
      quantity: "",
      total: "",
      status: "",
    });
  };

  const handleStatusUpdate = (index) => {
    const updatedItemsList = [...itemsList];
    updatedItemsList[index].status = "Approved";
    updatedItemsList[index].checked = !updatedItemsList[index].checked;
    setItemsList(updatedItemsList);
    setChecked(!checked);
    setUrgent(false);
  };

  const handleUrgencyConfirmation = (index, confirmed) => {
    const updatedItemsList = [...itemsList];
    if (confirmed) {
      updatedItemsList[index].status = "Urgent";
    } else {
      updatedItemsList[index].status = "Missing-urgent";
    }
    updatedItemsList[index].checked = !updatedItemsList[index].checked;
    setItemsList(updatedItemsList);
    closeUrgencyModal();
    setUrgent(!urgent);
    setChecked(false);
  };
  console.log("checked", checked);
  console.log("urgent", urgent);

  return (
    <ManageOrderContainer>
      <SearchAndAdd>
        <div style={{ position: "relative" }}>
          <SearchInput
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleInputChange}
          />
          <SearchIcon>
            <SearchIconButton />
          </SearchIcon>
        </div>
        <Left>
          <AddButton onClick={openModal}>Add Item</AddButton>
          <Icon>
            <BsShieldFillCheck
              style={{ marginRight: "40px", fontSize: "30px" }}
            />
          </Icon>
          {isModalOpen && (
            <ModalOverlay>
              <ModalContent>
                <InputContainer>
                  <label>Product Name</label>
                  <ModalInput
                    type="text"
                    placeholder="Enter Product Name"
                    value={newItem.productName}
                    onChange={(e) => handleModalInputChange(e, "productName")}
                  />
                </InputContainer>
                <InputContainer>
                  <label>Brand</label>
                  <ModalInput
                    type="text"
                    placeholder="Enter Brand Name"
                    value={newItem.brand}
                    onChange={(e) => handleModalInputChange(e, "brand")}
                  />
                </InputContainer>
                <InputContainer>
                  <label>Price</label>
                  <ModalInput
                    type="text"
                    placeholder="Enter Price"
                    value={newItem.price}
                    onChange={(e) => handleModalInputChange(e, "price")}
                  />
                </InputContainer>
                <InputContainer>
                  <label>Quantity</label>
                  <ModalInput
                    type="text"
                    placeholder="Enter Product Quantity"
                    value={newItem.quantity}
                    onChange={(e) => handleModalInputChange(e, "quantity")}
                  />
                </InputContainer>
                <InputContainer>
                  <label>Total</label>
                  <ModalInput
                    type="text"
                    placeholder="Total"
                    value={newItem.total}
                    onChange={(e) => handleModalInputChange(e, "total")}
                  />
                </InputContainer>
                <AddModalButton onClick={handleAddItem}>ADD</AddModalButton>
              </ModalContent>
            </ModalOverlay>
          )}
        </Left>
      </SearchAndAdd>
      <Table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {itemsList.map((row, index) => (
            <tr key={index}>
              <td style={{ width: "260px" }}>
                <ProductImage>
                  <div>
                    <img src={Avocado} alt="Avocado" width={30} height={30} />
                  </div>{" "}
                  <div>{row.productName}</div>
                </ProductImage>
              </td>
              <td style={{ width: "140px" }}>{row.brand}</td>
              <td style={{ width: "90px" }}>{row.price}</td>
              <td style={{ width: "80px" }}>{row.quantity}</td>
              <td style={{ width: "70px" }}>{row.total}</td>
              <td
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginTop: "4px",
                }}
              >
                <div
                  style={{
                    width: "auto",
                    minWidth: "100px",
                    color: "white",
                    marginTop: "1px",
                    textAlign: "start",
                    height: "20px",
                    paddingLeft: "10px",
                    fontWeight: "500",
                    border: "1px solid black",
                    backgroundColor: row.checked ? "green" : "red",
                    borderRadius: "20px",
                    display: row.checked || urgent ? "block" : "none",
                  }}
                >
                  {row.status}
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "150px",
                    justifyContent: "space-evenly",
                  }}
                >
                  <div>
                    <IoCheckmark
                      style={{
                        fontSize: "22px",
                        fontWeight: "500",
                        cursor: "pointer",
                        color: checked ? "green" : "black",
                      }}
                      onClick={() => handleStatusUpdate(index)}
                    />
                  </div>
                  <div>
                    <RxCross2
                      style={{
                        fontSize: "22px",
                        fontWeight: "500",
                        cursor: "pointer",
                        color: urgent ? "red" : "black",
                      }}
                      onClick={() => openUrgencyModal(index)}
                    />
                  </div>
                  <div>
                    <button>Edit</button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {isUrgencyModalOpen && (
        <UrgencyModal>
          <UrgencyModalContent>
            <p>Is '{itemsList[currentItemIndex]?.productName}' urgent?</p>
            <ButtonContainer>
              <button
                onClick={() =>
                  handleUrgencyConfirmation(currentItemIndex, true)
                }
              >
                Yes
              </button>
              <button
                onClick={() =>
                  handleUrgencyConfirmation(currentItemIndex, false)
                }
              >
                No
              </button>
            </ButtonContainer>
          </UrgencyModalContent>
        </UrgencyModal>
      )}
    </ManageOrderContainer>
  );
}

export default ManageOrder;
