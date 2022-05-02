import { click } from '@testing-library/user-event/dist/click';
import { initializeApp } from 'firebase/app';
import { createContext, useReducer, useEffect } from 'react';

// Initialize context

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

const updateCartItemsReducer = (cartItems, callee) => {
  const newCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const newCartTotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  console.log(cartItems, newCartCount, newCartTotal);

  const payload = {
    [`cartItems${callee}`]: cartItems,
    [`newCartCount${callee}`]: newCartCount,
    [`newCartTotal${callee}`]: newCartTotal,
  };

  console.log(payload);

  return payload;
};

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

export const CART_ACTION_TYPES = {
  TOGGLE_CART: 'TOGGLE_CART',
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  CLEAR_ITEM: 'CLEAR_ITEM',
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
      const { cartItemsAddItem, newCartCountAddItem, newCartTotalAddItem } =
        updateCartItemsReducer(
          addCartItem(state.cartItems, payload),
          'AddItem'
        );
      return {
        ...state,
        cartItems: cartItemsAddItem,
        cartQuantity: newCartCountAddItem,
        cartTotal: newCartTotalAddItem,
      };
    case CART_ACTION_TYPES.REMOVE_ITEM:
      const {
        cartItemsRemoveItem,
        newCartCountRemoveItem,
        newCartTotalRemoveItem,
      } = updateCartItemsReducer(
        removeCartItem(state.cartItems, payload),
        'RemoveItem'
      );
      return {
        ...state,
        cartItems: cartItemsRemoveItem,
        cartQuantity: newCartCountRemoveItem,
        cartTotal: newCartTotalRemoveItem,
      };
    case CART_ACTION_TYPES.CLEAR_ITEM:
      const {
        cartItemsClearItem,
        newCartCountClearItem,
        newCartTotalClearItem,
      } = updateCartItemsReducer(
        clearCartItem(state.cartItems, payload),
        'ClearItem'
      );
      return {
        ...state,
        cartItems: cartItemsClearItem,
        cartQuantity: newCartCountClearItem,
        cartTotal: newCartTotalClearItem,
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

  const value = {
    dispatch,
    isCartOpen,
    cartItems,
    cartQuantity,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
