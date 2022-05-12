import { createSelector } from 'reselect';
import { CartState } from './cart.reducer';
import { CartItem } from './cart.types';

const selectCartReducer = (state): CartState => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  cart => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  cart => cart.isCartOpen
);

export const selectCartQuantity = createSelector([selectCartItems], cartItems =>
  cartItems.reduce((acc, item) => acc + item.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
);
