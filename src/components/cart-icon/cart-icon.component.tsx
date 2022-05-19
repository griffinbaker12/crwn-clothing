import { useContext } from 'react';
import { ExportedThemeContext } from '../../routes/navigation/navigation.component';
import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsCartOpen,
  selectCartQuantity,
} from '../../store/cart/cart.selector';
import { toggleCart } from '../../store/cart/cart.action';

const CartIcon = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartQuantity = useSelector(selectCartQuantity);

  const { theme } = useContext(ExportedThemeContext);

  const dispatch = useDispatch();

  const toggleIsCartOpen = () => dispatch(toggleCart(!isCartOpen));

  return (
    <CartIconContainer theme={theme} onClick={toggleIsCartOpen}>
      <ShoppingIcon theme={theme} />
      <ItemCount>{cartQuantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
