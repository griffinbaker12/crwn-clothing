import { CategoryItem } from '../categories/categories.types';
import { CART_ACTION_TYPES, CartItem } from './cart.types';
import {
  ActionWithPayload,
  createAction,
  withMatcher,
} from '../../utils/reducer/reducer.utils';

const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
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

const removeCartItem = (
  cartItems: CartItem[],
  cartItemToRemove: CartItem
): CartItem[] => {
  if (cartItemToRemove.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (
  cartItems: CartItem[],
  cartItemToClear: CartItem
): CartItem[] => {
  return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
};

export type ToggleCart = ActionWithPayload<
  CART_ACTION_TYPES.TOGGLE_CART,
  boolean
>;

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

export const clearItem = withMatcher(
  (cartItems: CartItem[], item: CartItem): SetCartItems => {
    const newCartItems = clearCartItem(cartItems, item);
    return setCartItems(newCartItems);
  }
);

export const addItem = (
  cartItems: CartItem[],
  item: CartItem
): SetCartItems => {
  const newCartItems = addCartItem(cartItems, item);
  return setCartItems(newCartItems);
};

export const removeItem = (
  cartItems: CartItem[],
  item: CartItem
): SetCartItems => {
  const newCartItems = removeCartItem(cartItems, item);
  return setCartItems(newCartItems);
};

export const clearCart = (): SetCartItems => {
  return setCartItems([]);
};

export const toggleCart = (boolean: boolean): ToggleCart =>
  createAction(CART_ACTION_TYPES.TOGGLE_CART, boolean);
