import { CART_ACTION_TYPES } from './cart.types';

export const clearItem = item => ({
  type: CART_ACTION_TYPES.CLEAR_ITEM,
  payload: item,
});

export const addItem = item => ({
  type: CART_ACTION_TYPES.ADD_ITEM,
  payload: item,
});

export const removeItem = item => ({
  type: CART_ACTION_TYPES.REMOVE_ITEM,
  payload: item,
});

export const toggleCart = cartStatus => ({
  type: CART_ACTION_TYPES.TOGGLE_CART,
  payload: cartStatus,
});
