import { UPDATE_GREETING } from '../actionType/actionType';

export const updateGreeting = (newGreeting) => {
  return {
    type: UPDATE_GREETING,
    payload: newGreeting,
  };
};


