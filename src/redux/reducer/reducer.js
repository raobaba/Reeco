import { UPDATE_GREETING } from '../actionType/actionType';

const initialState = {
    greeting: ' username',
  };
  
  export const greetingReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_GREETING:
        return {
          ...state,
          greeting: action.payload,
        };
      default:
        return state;
    }
  };


