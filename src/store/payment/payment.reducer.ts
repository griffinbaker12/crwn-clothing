import { AnyAction } from 'redux';
import {
  updateProcessing,
  updateShowStatus,
  updateSuccess,
  checkoutToggle,
} from './payment.action';

export type PaymentState = {
  isProcessing: boolean;
  isShowingStatus: boolean;
  isSuccessful: boolean;
  isCheckingOut: boolean;
};

const INITIAL_STATE: PaymentState = {
  isProcessing: false,
  isShowingStatus: false,
  isSuccessful: false,
  isCheckingOut: false,
};

export const paymentReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (updateProcessing.match(action)) {
    return { ...state, isProcessing: action.payload };
  }

  if (updateShowStatus.match(action)) {
    return { ...state, isShowingStatus: action.payload };
  }

  if (updateSuccess.match(action)) {
    return { ...state, isSuccessful: action.payload };
  }

  if (checkoutToggle.match(action)) {
    return { ...state, isCheckingOut: action.payload };
  }

  return state;
};
