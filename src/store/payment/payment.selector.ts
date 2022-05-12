import { createSelector } from 'reselect';
import { PaymentState } from './payment.reducer';

const selectPaymentReducer = (state): PaymentState => state.payment;

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
