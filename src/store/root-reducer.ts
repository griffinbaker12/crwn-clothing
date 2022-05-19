import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { categoriesReducer } from './categories/categories.reducer';
import { cartReducer } from './cart/cart.reducer';
import { paymentReducer } from './payment/payment.reducer';
import { themeReducer } from './theme/theme.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  payment: paymentReducer,
  theme: themeReducer,
});
