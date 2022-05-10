import { PAYMENT_ACTION_TYPES } from './payment.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const updateProcessing = status =>
  createAction(PAYMENT_ACTION_TYPES.SET_PROCESSING, status);

export const updateShowStatus = status =>
  createAction(PAYMENT_ACTION_TYPES.SET_SHOW_STATUS, status);

export const updateSuccess = status =>
  createAction(PAYMENT_ACTION_TYPES.SET_SUCCESS, status);

export const checkoutToggle = status =>
  createAction(PAYMENT_ACTION_TYPES.SET_CHECKOUT_TOGGLE, status);
