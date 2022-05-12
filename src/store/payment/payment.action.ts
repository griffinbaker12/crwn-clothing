import { PAYMENT_ACTION_TYPES } from './payment.types';
import { createAction } from '../../utils/reducer/reducer.utils';
import { Action, ActionWithPayload } from '../../utils/reducer/reducer.utils';
import { withMatcher } from '../../utils/reducer/reducer.utils';

export type UpdateProcessing = ActionWithPayload<
  PAYMENT_ACTION_TYPES.SET_PROCESSING,
  boolean
>;

export type UpdateShowStatus = ActionWithPayload<
  PAYMENT_ACTION_TYPES.SET_SHOW_STATUS,
  boolean
>;

export type UpdateSucess = ActionWithPayload<
  PAYMENT_ACTION_TYPES.SET_SUCCESS,
  boolean
>;

export type UpdateToggle = ActionWithPayload<
  PAYMENT_ACTION_TYPES.SET_CHECKOUT_TOGGLE,
  boolean
>;

export const updateProcessing = withMatcher(
  (status: boolean): UpdateProcessing =>
    createAction(PAYMENT_ACTION_TYPES.SET_PROCESSING, status)
);

export const updateShowStatus = withMatcher(
  (status: boolean): UpdateShowStatus =>
    createAction(PAYMENT_ACTION_TYPES.SET_SHOW_STATUS, status)
);

export const updateSuccess = withMatcher(
  (status: boolean): UpdateSucess =>
    createAction(PAYMENT_ACTION_TYPES.SET_SUCCESS, status)
);

export const checkoutToggle = withMatcher(
  (status: boolean): UpdateToggle =>
    createAction(PAYMENT_ACTION_TYPES.SET_CHECKOUT_TOGGLE, status)
);
