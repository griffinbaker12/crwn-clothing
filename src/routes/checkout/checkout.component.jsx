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
import { useSelector } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector.js';
import PaymentForm from '../../components/payment-form/payment-form.component';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const [checkoutToggle, setCheckoutToggle] = useState(false);

  const handleClick = () => setCheckoutToggle(prevState => !prevState);

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
