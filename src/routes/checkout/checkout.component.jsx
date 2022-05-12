import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
  CheckoutPayment,
  CheckoutButton,
  Overlay,
} from './checkout.styles.jsx';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';
import PaymentForm from '../../components/payment-form/payment-form.component';
import { toggleCart } from '../../store/cart/cart.action';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  const [checkoutToggle, setCheckoutToggle] = useState(false);

  const handleClick = () =>
    setCheckoutToggle(prevState => !prevState, dispatch(toggleCart(false)));

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Clear</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map(item => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <CheckoutPayment>
        <Total>Total: ${cartTotal}</Total>
        <CheckoutButton onClick={handleClick}>Checkout</CheckoutButton>
      </CheckoutPayment>
      <Fragment>
        <PaymentForm checkoutToggle={checkoutToggle} toggleForm={handleClick} />
        <Overlay checkoutToggle={checkoutToggle} />
      </Fragment>
    </CheckoutContainer>
  );
};

export default Checkout;
