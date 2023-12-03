import * as actionTypes from '../actionType/actionType';

export const updateGreeting = (newGreeting) => {
  return {
    type: actionTypes.UPDATE_GREETING,
    payload: newGreeting,
  };
};

export const searchQueryChange = (query) => ({
  type: actionTypes.SEARCH_QUERY_CHANGE,
  payload: query,
});

export const openUrgencyModal = (index) => ({
  type: actionTypes.OPEN_URGENCY_MODAL,
  payload: index,
});

export const closeUrgencyModal = () => ({
  type: actionTypes.CLOSE_URGENCY_MODAL,
});

export const openModal = () => ({
  type: actionTypes.OPEN_MODAL,
});

export const closeModal = () => ({
  type: actionTypes.CLOSE_MODAL,
});

export const handleModalInputChange = (event, field) => ({
  type: actionTypes.HANDLE_MODAL_INPUT_CHANGE,
  payload: { event, field },
});

export const addItem = (item) => ({
  type: actionTypes.ADD_ITEM,
  payload: item,
});

export const updateItemStatus = (index) => ({
  type: actionTypes.UPDATE_ITEM_STATUS,
  payload: index,
});

export const confirmUrgency = (index, confirmed) => ({
  type: actionTypes.CONFIRM_URGENCY,
  payload: { index, confirmed },
});

export const changeItemColor = (index, color) => ({
  type: actionTypes.CHANGE_ITEM_COLOR,
  payload: { index, color },
});

export const openEditModal = (index) => ({
  type: actionTypes.OPEN_EDIT_MODAL,
  payload: index,
});

export const closeEditModal = () => ({
  type: actionTypes.CLOSE_EDIT_MODAL,
});

export const changeEditItem = (item) => ({
  type: actionTypes.CHANGE_EDIT_ITEM,
  payload: item,
});

export const changeEditPrice = (price) => ({
  type: actionTypes.CHANGE_EDIT_PRICE,
  payload: price,
});

export const changeEditQuantity = (quantity) => ({
  type: actionTypes.CHANGE_EDIT_QUANTITY,
  payload: quantity,
});

export const decreaseEditQuantity = () => ({
  type: actionTypes.DECREASE_EDIT_QUANTITY,
});

export const increaseEditQuantity = () => ({
  type: actionTypes.INCREASE_EDIT_QUANTITY,
});



