import {
  ShoppingIcon,
  CartIconContainer,
  ItemCount,
} from './cart-icon.styles.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsCartOpen,
  selectCartQuantity,
} from '../../store/cart/cart.selector.js';
import { toggleCart } from '../../store/cart/cart.action.js';

const CartIcon = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartQuantity = useSelector(selectCartQuantity);

  const dispatch = useDispatch();

  const toggleIsCartOpen = () => dispatch(toggleCart(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartQuantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
