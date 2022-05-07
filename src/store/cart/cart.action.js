import { CART_ACTION_TYPES } from './cart.types';

// Helper Functions
const addCartItem = (cartItems, productToAdd) => {
  const contains = cartItems.find(item => item.id === productToAdd.id);
  if (contains) {
    return cartItems.map(cartItem =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  if (cartItemToRemove.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
};

// Action creators
export const clearItem = (cartItems, item) => {
  const newCartItems = clearCartItem(cartItems, item);
  return {
    type: CART_ACTION_TYPES.SET_CART_ITEMS,
    payload: newCartItems,
  };
};

export const addItem = (cartItems, item) => {
  const newCartItems = addCartItem(cartItems, item);
  return {
    type: CART_ACTION_TYPES.SET_CART_ITEMS,
    payload: newCartItems,
  };
};

export const removeItem = (cartItems, item) => {
  const newCartItems = removeCartItem(cartItems, item);
  return {
    type: CART_ACTION_TYPES.SET_CART_ITEMS,
    payload: newCartItems,
  };
};

export const clearCart = () => {
  return {
    type: CART_ACTION_TYPES.SET_CART_ITEMS,
    payload: [],
  };
};

export const toggleCart = cartStatus => ({
  type: CART_ACTION_TYPES.TOGGLE_CART,
  payload: cartStatus,
});
