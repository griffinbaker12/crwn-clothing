import {
  CartDropDownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';
import { useNavigate } from 'react-router-dom';
import { selectTheme } from '../../store/theme/theme.selector';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const theme = useSelector(selectTheme);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => navigate('/checkout');

  return (
    <CartDropDownContainer theme={theme}>
      <CartItems>
        {cartItems.length ? (
          cartItems.map(item => {
            console.log(item);
            return <CartItem key={item.id} item={item} />;
          })
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>

      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
