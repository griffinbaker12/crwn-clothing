import { CHECKOUT_ACTION_TYPES } from './checkout.types';

export const updateProcessing = status => ({
  type: CHECKOUT_ACTION_TYPES.SET_PROCESSING,
  payload: status,
});

export const updateShowStatus = status => ({
  type: CHECKOUT_ACTION_TYPES.SET_SHOW_STATUS,
  payload: status,
});

export const updateSuccess = status => ({
  type: CHECKOUT_ACTION_TYPES.SET_SUCCESS,
  payload: status,
});
