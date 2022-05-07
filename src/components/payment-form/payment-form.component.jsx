import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartTotal,
  selectIsCartOpen,
} from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { clearCart, toggleCart } from '../../store/cart/cart.action';
import {
  PaymentFormContainer,
  FormContainer,
  PaymentButton,
  CloseForm,
  PaymentCard,
  Note,
} from '../../components/payment-form/payment-form.styles.jsx';
import userEvent from '@testing-library/user-event';

const PaymentForm = ({ toggleForm, checkoutToggle }) => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const resetFormAfterSuccess = () => {
    setShowStatus(false);
    elements.getElement('card').clear();
  };

  // const promisifyErrorHandle = async () => {
  //   const promise = new Promise(res => {
  //     setIsProcessingPayment(false);
  //     setIsSuccessful(false);
  //     res('finished');
  //   });
  //   const response = await promise;
  //   console.log(response);
  // };

  const handlePayment = async e => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessingPayment(true);

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then(res => res.json().catch(e => 'error'));

    // if (response === 'error') {
   
    //   return;
    }

    console.log('hello');

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : 'guest',
        },
      },
    });

    setIsProcessingPayment(false);
    setShowStatus(true);

    if (paymentResult.error) {
      promisifyErrorHandle();
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        setIsSuccessful(true);
        setTimeout(() => {
          toggleForm(false);
          dispatch(clearCart());
          setTimeout(() => {
            resetFormAfterSuccess();
          }, 1000);
        }, 1000);
      }
    }
  };

  return (
    <PaymentFormContainer
      checkoutToggle={checkoutToggle}
      onSubmit={handlePayment}
    >
      <CloseForm type="button" onClick={toggleForm}>
        &times;
      </CloseForm>
      <h2>Credit Card Payment</h2>
      <FormContainer>
        <PaymentCard />
        <PaymentButton
          isLoading={isProcessingPayment}
          showStatus={showStatus}
          isSuccessful={isSuccessful}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        >
          Pay now
        </PaymentButton>
      </FormContainer>
      <Note>
        *Please use the following test card for payments*
        <br />
        4242 4242 4242 4242 --- Exp: 04/24 -- CVC: 424 -- Zip: 00000
      </Note>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
