import { createSelector } from 'reselect';
import { PaymentState } from './payment.reducer';
import { RootState } from '../store';

const selectPaymentReducer = (state: RootState): PaymentState => state.payment;

export const selectIsProccessing = createSelector(
  [selectPaymentReducer],
  payment => payment.isProcessing
);

export const selectIsShowingStatus = createSelector(
  [selectPaymentReducer],
  payment => payment.isShowingStatus
);

export const selectIsSuccessful = createSelector(
  [selectPaymentReducer],
  payment => payment.isSuccessful
);

export const selectCheckoutToggle = createSelector(
  [selectPaymentReducer],
  payment => payment.isCheckingOut
);
