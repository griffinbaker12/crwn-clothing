import { click } from '@testing-library/user-event/dist/click';
import { initializeApp } from 'firebase/app';
import { createContext, useReducer, useEffect } from 'react';

// Initialize context

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  cartQuantity: 0,
  clearItemFromCart: () => {},
  cartTotal: 0,
});

// Reducer Helper Functions that we can utilize

const addCartItem = (cartItems, productToAdd) => {
  console.log(cartItems, productToAdd);
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
  console.log(cartItems);
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

export const CART_ACTION_TYPES = {
  TOGGLE_CART: 'TOGGLE_CART',
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  CLEAR_ITEM: 'CLEAR_ITEM',
  SET_CART_QUANTITY: 'SET_CART_QUANTITY',
  SET_CART_TOTAL: 'SET_CART_TOTAL',
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.TOGGLE_CART:
      return {
        ...state,
        isCartOpen: payload,
      };
    case CART_ACTION_TYPES.ADD_ITEM:
      return {
        ...state,
        cartItems: addCartItem(state.cartItems, payload),
      };
    case CART_ACTION_TYPES.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeCartItem(state.cartItems, payload),
      };
    case CART_ACTION_TYPES.CLEAR_ITEM:
      return { ...state, cartItems: clearCartItem(state.cartItems, payload) };
    case CART_ACTION_TYPES.SET_CART_QUANTITY:
      return {
        ...state,
        cartQuantity: payload.reduce((acc, item) => acc + item.quantity, 0),
      };
    case CART_ACTION_TYPES.SET_CART_TOTAL:
      return {
        ...state,
        cartTotal: payload.reduce(
          (acc, item) => acc + item.quantity * item.price,
          0
        ),
      };
    default:
      throw Error(`Unhandled type ${type} in UserReducer`);
  }
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartQuantity: 0,
  cartTotal: 0,
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { cartItems, cartQuantity, cartTotal, isCartOpen } = cartState;

  useEffect(
    () =>
      dispatch({
        type: CART_ACTION_TYPES.SET_CART_QUANTITY,
        payload: cartItems,
      }),
    [cartItems]
  );

  useEffect(() => {
    dispatch({ type: CART_ACTION_TYPES.SET_CART_TOTAL, payload: cartItems });
  }, [cartItems]);

  const value = {
    dispatch,
    isCartOpen,
    cartItems,
    cartQuantity,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
