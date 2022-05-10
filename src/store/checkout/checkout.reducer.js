import { CHECKOUT_ACTION_TYPES } from './checkout.types';

const INITIAL_STATE = {
  isProcessing: false,
  isShowingStatus: false,
  isSuccessful: false,
};

export const checkoutReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHECKOUT_ACTION_TYPES.SET_PROCESSING:
      return {
        ...state,
        isProcessing: payload,
      };
    case CHECKOUT_ACTION_TYPES.SET_SHOW_STATUS:
      return {
        ...state,
        isShowingStatus: payload,
      };
    case CHECKOUT_ACTION_TYPES.SET_SUCCESS:
      return {
        ...state,
        isSuccessful: payload,
      };
    default:
      return state;
  }
};
