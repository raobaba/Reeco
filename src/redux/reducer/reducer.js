import * as actionTypes from '../actionType/actionType';

const initialState = {
  greeting: ' username',
  searchQuery: "",
  isUrgencyModalOpen: false,
  isModalOpen: false,
  currentItemIndex: null,
  newItem: {
    productName: "",
    brand: "",
    price: 0,
    quantity: 0,
    total: 0,
    status: "",
  },
  itemsList: [
    // Your initial items list here
  ],
  editedItem: {
    quantity: 1,
  },
  checked: false,
  urgent: false,
  itemColors: [],
};

  export const greetingReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.UPDATE_GREETING:
        return {
          ...state,
          greeting: action.payload,
        };
      default:
        return state;
    }
  };

 export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_QUERY_CHANGE:
      return {
        ...state,
        searchQuery: action.payload,
      };
    case actionTypes.OPEN_URGENCY_MODAL:
      return {
        ...state,
        isUrgencyModalOpen: true,
        currentItemIndex: action.payload,
      };
    case actionTypes.CLOSE_URGENCY_MODAL:
      return {
        ...state,
        isUrgencyModalOpen: false,
        currentItemIndex: null,
      };
    case actionTypes.OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
      };
    case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
      };
    case actionTypes.HANDLE_MODAL_INPUT_CHANGE:
      const { event, field } = action.payload;
      const updatedValue = event.target.value;
      return {
        ...state,
        newItem: {
          ...state.newItem,
          [field]: updatedValue,
        },
      };
    case actionTypes.ADD_ITEM:
      const newItemToAdd = { ...state.newItem, status: "Pending" };
      return {
        ...state,
        itemsList: [...state.itemsList, newItemToAdd],
        newItem: initialState.newItem,
      };
    case actionTypes.UPDATE_ITEM_STATUS:
      const updatedItemsList = state.itemsList.map((item, index) => {
        if (index === action.payload) {
          return {
            ...item,
            status: "Approved",
            checked: true,
          };
        }
        return item;
      });
      return {
        ...state,
        itemsList: updatedItemsList,
        urgent: false,
        itemColors: state.itemColors.map((color, index) =>
          index === action.payload ? "green" : color
        ),
      };
    case actionTypes.CONFIRM_URGENCY:
      const updatedItems = state.itemsList.map((item, index) => {
        if (index === action.payload.index) {
          return {
            ...item,
            status: action.payload.confirmed ? "Urgent" : "Missing-urgent",
            checked: !item.checked,
          };
        }
        return item;
      });
      return {
        ...state,
        itemsList: updatedItems,
        isUrgencyModalOpen: false,
        currentItemIndex: null,
        urgent: true,
        itemColors: state.itemColors.map((color, index) =>
          index === action.payload.index ? "red" : color
        ),
      };
    case actionTypes.CHANGE_ITEM_COLOR:
      const { index, color } = action.payload;
      return {
        ...state,
        itemColors: state.itemColors.map((itemColor, idx) =>
          idx === index ? color : itemColor
        ),
      };
    case actionTypes.OPEN_EDIT_MODAL:
      return {
        ...state,
        editedItem: state.itemsList[action.payload],
        isEditModalOpen: true,
      };
    case actionTypes.CLOSE_EDIT_MODAL:
      return {
        ...state,
        isEditModalOpen: false,
      };
    case actionTypes.CHANGE_EDIT_ITEM:
      return {
        ...state,
        editedItem: {
          ...state.editedItem,
          ...action.payload,
        },
      };
    case actionTypes.CHANGE_EDIT_PRICE:
      return {
        ...state,
        editedItem: {
          ...state.editedItem,
          price: action.payload,
        },
      };
    case actionTypes.CHANGE_EDIT_QUANTITY:
      return {
        ...state,
        editedItem: {
          ...state.editedItem,
          quantity: action.payload,
        },
      };
    case actionTypes.DECREASE_EDIT_QUANTITY:
      if (state.editedItem.quantity > 1) {
        return {
          ...state,
          editedItem: {
            ...state.editedItem,
            quantity: state.editedItem.quantity - 1,
          },
        };
      }
      return state;
    case actionTypes.INCREASE_EDIT_QUANTITY:
      return {
        ...state,
        editedItem: {
          ...state.editedItem,
          quantity: state.editedItem.quantity + 1,
        },
      };
    default:
      return state;
  }
};




