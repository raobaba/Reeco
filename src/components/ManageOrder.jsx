import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import { RxCross2, RxPadding } from "react-icons/rx";
import Avocado from "../assets/Avocado Hass.jpg";
import { IoMdAddCircle } from "react-icons/io";
import { FaCircleMinus } from "react-icons/fa6";

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

const EditModalOverlay = styled.div`
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

const EditModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 600px;
  height: 415px;
`;

const EditInputContainer = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  h4 {
    margin-bottom: 0;
    font-size:20px;
    font-weight: 700;
  }

  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    height: 200px;
  }

  & > div > div:first-child {
    width: 200px;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  & > div > div:last-child {
    width: 350px;

    label {
      margin-bottom: 5px;
    }

    p {
      margin-top: 5px;
      margin-bottom: 0;
    }
    label {
      margin-bottom: 5px;
    }
    label,
    input {
      margin-bottom: 15px;
    }
  }
`;

const EditModalInput = styled.input`
  padding: 5px;
  width: 60px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 5px;
`;

const EditButtonContainer = styled.div`
  display: flex;
  justify-content:flex-end;
  gap:10px;
  margin-top: 20px;
  margin-bottom:10px;

  button {
    padding: 8px 16px;
    font-size: 14px;
    border-radius: 20px;
    cursor: pointer;
    border:none;

    width: 15%;
    &:nth-child(1){
      background-color: rgb(255,255,255);
    }
    &:nth-child(2) {
      background-color: rgb(30,99,63);
      color: white;
    }
  }
 
`;

const OptionalButton = styled.button`
  border:0.1px solid grey;
  height:30px;
  background-color:white;
  border-radius:15px;
  font-weight:500;
  color:grey;
`

const TotalCountDiv = styled.div`
  display: flex;
  gap: 100px;
`;

const TruncatedH4 = styled.h4`
  white-space: nowrap;
  overflow: hidden;
  font-weight:700;
  text-overflow: ellipsis;
  max-width: 600px; /* Adjust the max-width to your desired value */
`;

function ManageOrder() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isUrgencyModalOpen, setIsUrgencyModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedItem, setEditedItem] = useState({});

  const [checked, setChecked] = useState(false);
  const [urgent, setUrgent] = useState(false);
  const [itemsList, setItemsList] = useState([]);
  const [itemColors, setItemColors] = useState([]);
  const [currentItemIndex, setCurrentItemIndex] = useState(null);
  const [newItem, setNewItem] = useState({
    productName: "",
    brand: "",
    price: "",
    quantity: "",
    total: "",
    status: "",
  });

  const openEditModal = (index) => {
    setEditedItem(itemsList[index]);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  useEffect(() => {
    setItemColors(Array(itemsList.length).fill(""));
  }, [itemsList]);

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
    const newItem = {
      productName:
        "Chicken Breast Fillest Boneless matuu maMarinated 6 Ounce raw Invivid",
      brand: "Home Black Labelmany",
      price: "60.67.03",
      quantity: "0",
      total: "0",
      status: "Pending",
    };
    closeModal();
    setItemsList([...itemsList, newItem]);
  };

  const handleStatusUpdate = (index) => {
    const updatedItemsList = [...itemsList];
    if (updatedItemsList[index].status !== "Approved") {
      updatedItemsList[index].status = "Approved";
      updatedItemsList[index].checked = true;
      setItemsList(updatedItemsList);
      setUrgent(false);
      handleColorChange(index, "green");
    }
  };

  const handleUrgencyConfirmation = (index, confirmed) => {
    const updatedItemsList = [...itemsList];
    const currentStatus = updatedItemsList[index].status;

    if (
      currentStatus !== "Approved" &&
      currentStatus !== "Urgent" &&
      currentStatus !== "Missing-urgent"
    ) {
      if (confirmed) {
        updatedItemsList[index].status = "Urgent";
      } else {
        updatedItemsList[index].status = "Missing-urgent";
      }
      updatedItemsList[index].checked = !updatedItemsList[index].checked;
      setItemsList(updatedItemsList);
      closeUrgencyModal();
      setUrgent(true);
      handleColorChange(index, "red");
    }
  };

  const handleColorChange = (index, color) => {
    const newColors = [...itemColors];
    newColors[index] = color;
    setItemColors(newColors);
  };

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
            <RxPadding style={{ marginRight: "40px", fontSize: "30px" }} />
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
              <td style={{ width: "110px" }}>{row.brand} </td>
              <td style={{ width: "110px" }}>${row.price}/ 6+1LB</td>
              <td style={{ width: "80px" }}>{row.quantity}* 6+1LB</td>
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
                    color:
                      itemColors[index] ||
                      (row.status === "Pending" ? "black" : "white"),
                    marginTop: "1px",
                    textAlign: "start",
                    height: "20px",
                    paddingLeft: "10px",
                    fontWeight: "500",
                    backgroundColor:
                      row.status === "Pending"
                        ? ""
                        : itemsList[index].status === "Approved"
                        ? "green"
                        : itemsList[index].status === "Urgent" ||
                          itemsList[index].status === "Missing-urgent"
                        ? "red"
                        : row.checked
                        ? "green"
                        : "red",
                    borderRadius: "20px",
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
                        color:
                          row.status === "Pending"
                            ? ""
                            : itemsList[index].status === "Approved"
                            ? "green"
                            : itemsList[index].status === "Urgent" ||
                              itemsList[index].status === "Missing-urgent"
                            ? "black"
                            : row.checked
                            ? "green"
                            : "red",
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
                        color:
                          row.status === "Pending"
                            ? ""
                            : itemsList[index].status === "Approved"
                            ? "black"
                            : itemsList[index].status === "Urgent" ||
                              itemsList[index].status === "Missing-urgent"
                            ? "red"
                            : row.checked
                            ? "green"
                            : "red",
                      }}
                      onClick={() => {
                        if (
                          itemsList[index].status !== "Approved" &&
                          itemsList[index].status !== "Urgent" &&
                          itemsList[index].status !== "Missing-urgent"
                        ) {
                          openUrgencyModal(index);
                        }
                      }}
                    />
                  </div>
                  <div>
                    <button onClick={() => openEditModal(index)}>Edit</button>
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
            <h2>Missing Product</h2>
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
      {isEditModalOpen && (
        <EditModalOverlay>
          <EditModalContent>
            <EditInputContainer>
              <TruncatedH4>{editedItem.productName}</TruncatedH4>
              <h4 style={{marginRight:"430px",color:"grey"}}>American Roland</h4>
              <div>
                <div>
                  <img src={Avocado} alt="Apple_logo" />
                </div>
                <div>
                  <label style={{ marginLeft: "40px" }}>Price($)</label>
                  <EditModalInput
                    type="text"
                    style={{ marginLeft: "60px" }}
                    value={editedItem.price}
                    onChange={(e) =>
                      setEditedItem({ ...editedItem, price: e.target.value })
                    }
                  />
                  <label style={{ marginLeft: "40px" }}>/ 6+1LB</label>
                  <br />

                  <div
                    style={{ display: "flex", gap: "1px", marginTop: "15px" }}
                  >
                    <label style={{ marginLeft: "40px" }}>Quantity</label>
                    <FaCircleMinus
                      style={{
                        cursor: "pointer",
                        color: "green",
                        marginLeft: "25px",
                        fontSize: "26px",
                        marginTop:"-2px"
                      }}
                    />
                    <EditModalInput
                      type="text"
                      style={{ marginTop: "-3px",marginLeft:"5px" }}
                      value={editedItem.quantity}
                      onChange={(e) =>
                        setEditedItem({
                          ...editedItem,
                          quantity: e.target.value,
                        })
                      }
                    />
                    <IoMdAddCircle
                      style={{
                        cursor: "pointer",
                        color: "green",
                        fontSize: "30px",
                        marginTop: "-4px",
                      }}
                    />
                    <label style={{marginLeft:"5px"}}>* 6+1LB</label>
                  </div>

                  <br />
                  <TotalCountDiv>
                    <label style={{ marginLeft: "40px" }}>Total</label>
                    <p style={{ marginTop: "-0.1px" }}>${editedItem.total}</p>
                  </TotalCountDiv>
                </div>
              </div>
              
            </EditInputContainer>
            <div>
              <h4>Choose reason <label style={{color:'gray'}}>(optional)</label></h4>
              <div style={{display:"flex",justifyContent:"space-between",marginTop:"20px"}}>
                <OptionalButton>Missing Product</OptionalButton>
                <OptionalButton>Quantity is not the same</OptionalButton>
                <OptionalButton>Price is not the same</OptionalButton>
                <OptionalButton>Other</OptionalButton>
              </div>
            </div>
            <EditButtonContainer>
              <button onClick={closeEditModal}>Cancel</button>
              <button>Send</button>
            </EditButtonContainer>
          </EditModalContent>
        </EditModalOverlay>
      )}
    </ManageOrderContainer>
  );
}

export default ManageOrder;
