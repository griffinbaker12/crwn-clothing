import {
  ShoppingIcon,
  CartIconContainer,
  ItemCount,
} from './cart-icon.styles.jsx';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { CART_ACTION_TYPES } from '../../contexts/cart.context';

const CartIcon = () => {
  const { isCartOpen, dispatch, cartQuantity } = useContext(CartContext);

  const toggleIsCartOpen = () =>
    dispatch({ type: CART_ACTION_TYPES.TOGGLE_CART, payload: !isCartOpen });

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartQuantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
